import React from "react";
import ReactDOM from "react-dom";
import App from "../old/App";

// JSX
export class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
);

// Plain JS
const e = React.createElement;
export class Hello2 extends React.Component {
    render() {
        // React.createElement('div', null, `Hello ${this.props.toWhat}`);
        return e('div', null, `Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    e(Hello2, {toWhat: 'World'}, null),
    document.getElementById('root')
);
