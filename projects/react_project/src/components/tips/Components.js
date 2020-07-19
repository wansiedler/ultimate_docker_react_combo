//ES5
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

//ES6
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
// Note: Always start component names with a capital letter.
// React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.
const element = <div />;
const element2 = <Welcome name="Sara" />;

ReactDOM.render(
    element2,
    document.getElementById('root')
);



ReactDOM.render(
    <App />,
    document.getElementById('root')
);