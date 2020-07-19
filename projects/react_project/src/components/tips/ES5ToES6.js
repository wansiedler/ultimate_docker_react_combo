// ES5...
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
// ...to ES6
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

// ES5...
function greetings (name) {
    return 'hello ' + name
}
// ...to ES6 (can be used only for many parameters)
const greetings = (name,name2) => {
    return `hello ${name} ${name2}`;
}
// ...to ES6 (shorter, but can be used only for a single parameter)
const greetings = name => `hello ${name}`;

// ES5...
var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, c: 3, d: 4}
var obj3 = Object.assign(obj1, obj2)
// ...to ES6
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = {...obj1, ...obj2}

// ES5...
var obj1 = { a: 1, b: 2, c: 3, d: 4 }
var a = obj1.a
var b = obj1.b
var c = obj1.c
var d = obj1.d
// ...to ES6
const obj1 = { a: 1, b: 2, c: 3, d: 4 }
const {
    a,
    b,
    c,
    d
} = obj1

// ES5...
var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a: a, b: b, c: c, d: d }
// ...to ES6
var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a, b, c, d }

// ES5...
function isGreater (a, b, cb) {
    var greater = false
    if(a > b) {
        greater = true
    }
    cb(greater)
}
isGreater(1, 2, function (result) {
    if(result) {
        console.log('greater');
    } else {
        console.log('smaller')
    }
})

// ...to ES6
const isGreater = (a, b) => {
    return new Promise ((resolve, reject) => {
        if(a > b) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}
isGreater(1, 2)
    .then(result => {
        console.log('greater')
    })
    .catch(result => {
        console.log('smaller')
    })


//Exporting
// ES5...
var myModule = { x: 1, y: function(param){ console.log('This is ES5') }}
module.exports = myModule;
// ...to ES6
const myModule = { x: 1, y: (param) => { console.log('This is ES6' + param) }}
export default myModule;

//Importing
// ES5...
var myModule = require('./myModule');
// ...to ES6
import myModule from './myModule';