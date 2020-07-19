import './TradingInterface.css';
import React from 'react';

import {Provider} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core';
import {store} from './store';
import OrderList from '../Order/OrderList';
import Loader from '../Loader/Loader';
import axios from "axios";
import {EnhancedTable} from "../Order/EnhancedTable";
import {Orders} from "../Order";

const useStyles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        // padding: theme.spacing(2),
        margin: '2px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#b5b5b5',
    },
    tradingView: {
        padding: 0,
        margin: '2px'
    },
});

const toStorage = (jsonData) => {
    // parse json
    let jsonObj = JSON.parse(jsonData);
    console.log(jsonObj);
    localStorage.setItem('data', jsonObj);

}

export class TradingInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            totalOrders: 0,
            loading: true
        };
    }


    // API_URL = 'http://cryptoman.wansiedler.com.loc/api/orders/';
    // API_URL = 'https://jsonplaceholder.typicode.com/users'
    host = process.env.REST_API;
    getData = () => {
        // axios.get(this.API_URL)
        //     .then(response => {
        //         if (response.status > 400) {
        //             return this.setState(() => ({placeholder: 'Something went wrong!'}));
        //         }
        //         console.log(response);
        //         let data = response.data.count;
        //         console.log(data.results);
        //         console.log(data.results[0]);
        //
        //         this.setState({
        //             orders: data,
        //             // totalOrders: data.count,
        //             loading: false
        //         });
        //     })
        //     .catch(error => {
        //         console.error("FAIL: " + error)
        //     })
    }
 
    componentDidMount() {
        // console.log(data)
        // this.getData();
        // this.setState({
        //     orders: data.results,
        //     totalOrders: data.count,
        //     loading: false
        // });
    }

    componentWillUnmount() {

    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    handleChange = (event, newValue) => {
    }

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Provider store={store}>
                    <div className={classes.root}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.tradingView}>
                                    {/* <TradingView/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    {/*<EnhancedTable/>*/}
                                    {
                                        // this.state.loading ?
                                        //     <Loader/> :
                                        // <OrderList orders={this.state.orders}/>
                                        <EnhancedTable/>
                                        // <Orders/>
                                    }
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                {/* <Paper className={classes.paper}><OrderForm/></Paper> */}
                            </Grid>
                        </Grid>
                    </div>
                </Provider>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles, {withTheme: true})(TradingInterface);
