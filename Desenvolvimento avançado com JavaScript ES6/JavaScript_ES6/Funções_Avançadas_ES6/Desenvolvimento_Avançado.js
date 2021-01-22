function log(value) {
    console.log(value);
}
log('teste');

var sum = function (a, b) {
    return a + b;
}
console.log(sum(5, 5));

// Funções construtoras
function Car() {
    this.foo = 'bar';
}
console.log(Car())
// Array function
var newSum = (a, b) => a + b

console.log(newSum(10,5));
var createObj = () => ({ test: 123});
console.log(createObj());