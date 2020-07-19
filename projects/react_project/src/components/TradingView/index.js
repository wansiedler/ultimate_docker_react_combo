import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';

// TradingViewComponent
const widgetOptions = {
    container_id: 'tv_chart_container',
    library_path: '/charting_library/',
    datafeed: 'new Datafeeds.UDFCompatibleDatafeed("https://cm.wansiedler.com/udf")',
    // datafeed='new Datafeeds.UDFCompatibleDatafeed("https://138.201.188.17/udf")',
    snapshot_url: "https://www.tradingview.com/snapshot/",
    debug: false,
    symbol: "BTCUSDT",
    interval: 'D',
    enabled_features: [],
    client_id: 'test',
    user_id: 'public_user_id',
    theme: "Dark",
    allow_symbol_change: true,
    auto_save_delay: '5',
    range: "6m",
    hide_legend: true,
    locale: "en",
    timezone: "Europe/Berlin",
    studies: ["RSI@tv-basicstudies", "StochasticRSI@tv-basicstudies", "MACD@tv-basicstudies"],
    watchlist: ["BINANCE:BTCUSDT"],
    fullscreen: false,
    // height: "600px",
    // width: "600px",
    // overrides: {
    //     "paneProperties.background": "#131722",
    //     "paneProperties.vertGridProperties.color": "#363c4e",
    //     "paneProperties.horzGridProperties.color": "#363c4e",
    //     "symbolWatermarkProperties.transparency": 90,
    //     "scalesProperties.textColor": "#AAA",
    //     "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
    //     "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
    // },
    // disabled_features: ['use_localstorage_for_settings'],
    // enable_publishing:'true'
    autosize: true
}


export function TradingView() {
    return <TradingViewWidget
        {...widgetOptions}
    />
}