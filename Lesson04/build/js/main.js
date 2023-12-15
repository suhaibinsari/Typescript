"use strict";
// type aliases
let abc = {
    name: "sss",
    active: false,
    albumbs: ['abc', 12]
};
console.log(abc);
// literal types
let myName;
let userName;
userName = 'ease-in';
// functions
const add = (a, b) => {
    return a + b;
};
console.log(add("abc ", "abv"));
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello!");
logMsg(add("aaa", "aaa"));
let subtract = function (c, d, e) {
    return c - d + e;
};
let result = subtract(2, 3, 5);
console.log(result);
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
let mul = function (f, g) {
    return f * g;
};
logMsg(mul(4, 4));
// optional pramaters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else
        return a + b;
};
console.log(addAll(2, 3, 5));
// default parameters value
const sumAll = (a, b, c = 3) => {
    return a - b + c;
};
logMsg(sumAll(2, 2));
// rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4));
const total1 = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr); //redduce function is uused to sum of alll the values in the nums
};
console.log(total(1, 2, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
logMsg(isNumber("A"));
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    if (isNumber(value))
        return 'number';
    return createError('this show an error!');
};
console.log(numberOrString(1));
