const tutorial = require("./Tutorial");
console.log("Hello World from NodeJS");
console.log(tutorial);
console.log(tutorial.sum(2,3));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());

console.log("--------- Event Emitter -----");

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', (num1, num2) => { console.log('Tutorial events has occured:', (num1 + num2)); });
eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;

    }

    get name() {
        return this._name;
    }
}

let wasim = new Person('Wasim');
let amna = new Person('Amna');

wasim.on('hi', () => { console.log('My name is ' + wasim.name); });
amna.on('hi', () => { console.log('My name is ' + amna.name); });
wasim.emit('hi')
amna.emit('hi')


