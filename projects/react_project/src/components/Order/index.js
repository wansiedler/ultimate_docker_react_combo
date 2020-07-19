import React from 'react';
import {connect} from "react-redux";

export class ConnectedOrders extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentWillUnmount() {
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    render() {
        console.log(this.props)
        return (
            <div onClick={this.handleClick}>
                <h1>Orders</h1>
                <ul>
                    {this.props.orders.map(el => (
                        <li key={el.id}>{el.id}</li>
                    ))}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(`we got ${state.orders}`)
    return {orders: state.orders};
};

export const Orders = connect(mapStateToProps)(ConnectedOrders);