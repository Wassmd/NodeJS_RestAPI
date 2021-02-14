const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObject {
    SomeMathObject() {
        console.log("SomeMathObject created");
    }
}

module.exports.sum = sum 
module.exports.PI = PI
module.exports.SomeMathObject = SomeMathObject
