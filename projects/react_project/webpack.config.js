const path = require('path');
// const fs = require("fs");
const autoprefixer = require('autoprefixer');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");


const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8888';


const config = {
    devServer: {
        // proxy: {
        //     '/api': 'http://cryptoman.wansiedler.com.loc/api',
        //     pathRewrite: {"^/api" : ""}
        // },
        // writeToDisk: true,
        // open: {
        //     app: ['Google Chrome', '--incognito']
        // },
        // openPage: '/',
        stats: {
            colors: true,
            //The stats option lets you control what bundling information to display.
            logging: 'warn', // 'info': 'none' | 'error' | 'warn' | 'info' | 'log' | 'verbose'
            children: false, // Tells stats whether to add information about the children.
            modules: false, //Tells stats whether to add information about the built modules.
            maxModules: 0 // Set the maximum number of modules to be shown
        },
        clientLogLevel: 'warn', // 'info': 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'
        // public: 'localhost:10000',
        index: 'index.html',
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        inline: true,
        hot: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        port: port,
        host: host,
        overlay: true,
        publicPath: '/',
        compress: false,
        disableHostCheck: true,
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
        onListening: function (server) {
            const port = server.listeningApp.address().port;
            console.log('!Started on:' + port);
        },
    },
    plugins: [
        // new HardSourceWebpackPlugin(),
        // new UglifyJsPlugin(),
        // new MiniCssExtractPlugin()
        new HtmlWebpackPlugin({
            inject: true,
            hash: true, // hashes the source url for your application
            template: path.resolve(__dirname, 'src/index.html'),
            filename: path.resolve(__dirname, 'dist/index.html')
        }),
    ],
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        pathinfo: false,
        publicPath: "/"
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    context: path.resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.js', '.jsx'],
        symlinks: false,
        cacheWithContext: false
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-react",
                            ],
                            "plugins": [
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    },
                 /*   {
                        loader: "eslint-loader",
                        options: {
                            cache: true,
                            fix: true,
                            formatter: require('eslint-friendly-formatter'),
                            rules: {
                                "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
                                "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
                            }
                        },
                    }*/
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                include: path.resolve(__dirname, 'src'),
                use:
                    [
                        {
                            // During development, injects loaded styles into the document at runtime.
                            loader: 'style-loader'
                        },
                        {
                            // Loader for webpack to process CSS with PostCSS
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    autoprefixer({})
                                ]
                            }
                        }
                    ]

            },
            {
                test: /\.sass$/,
                exclude: /(node_modules)/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'sass-loader']
            }
        ]
    },
};


module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';
    const isProduction = !isDevelopment;
    config.mode = argv.mode;

    //https://webpack.js.org/configuration/devtool/
    config.devtool = isDevelopment && !isProduction ?
        'inline-source-map' // For development
        // 'eval-cheap-source-map'
        // 'eval-cheap-module-source-map'
        : 'none' // For production

    return config;
};

