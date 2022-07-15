function sum1(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++) total += arguments[i];
    return total;
}

function sum2 (...arguments){
    let total = 0;
    for (let i = 0; i < arguments.length; i++) total += arguments[i];
    return total;
}

console.log(sum1(1,2,3,4,5));
console.log(sum2(1,2,3,4,5));


Function.prototype.myBind = function(ctx, ...bindArgs){
    return (...callArgs) => {
        this.apply(ctx, [...bindArgs, ...callArgs])
    }
}

Function.prototype.myBind = function(ctx){
    const idk = this;
    return function (...args) {
        idk.apply(ctx, args);
    }
}


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");

function curriedSum (numArgs) {
    let numbers = [];
    return function _curriedSum (num) {
        numbers.push(num);
        return (numbers.length === numArgs) ? numbers.reduce((a,b) => a + b) : _curriedSum;
     }
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let ca = [], fn = this; 
    return function _curry(arg){
        ca.push(arg);
        return (ca.length === numArgs) ? fn(...ca) : _curry;
    }
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
console.log(f1(4)); // [Function]
console.log(f1(20)); // [Function]
console.log(f1(6)); // = 30
