import {combineReducers} from 'redux'
import {ADD_ARTICLE} from './../actions/action-types';
import {LIST_ORDERS, GET_ORDER, ADD_ORDER, DELETE_ORDER, UPDATE_ORDER} from './../actions/action-types';

import {data} from "./../data";

// this.setState({
//     orders: data.results,
//     totalOrders: data.count,
//     loading: false
// });

const initialState = {
    orders: data.results,
    totalOrders: data.count,
    loading: false,
    selected: null
};

export let rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            // state.articles.push(action.payload);
            return {...state, articles: state.articles.concat(action.payload)};
        // return Object.assign({}, state, {
        //     articles: state.articles.concat(action.payload)
        // });
        case LIST_ORDERS:
            return state;
        case GET_ORDER:
            return state;
        case ADD_ORDER:
            return state;
        case DELETE_ORDER:
            return state;
        case UPDATE_ORDER:
            return state;
        default:
            // console.log(`State: ${JSON.stringify(state.totalOrders)}`)
            return state;
    }
}

// export let rootReducer = combineReducers({
//     orderReducer
// })