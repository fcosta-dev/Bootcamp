function  multiplicacao (a, b) {
    b = typeof  b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiplicacao(5, 10))