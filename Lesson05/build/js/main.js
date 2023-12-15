"use strict";
// type asseretion
//conver to more or less specific
let a = 'hello';
let b = a; // less specific
console.log(b);
let c = a; // more specific
console.log(c);
let e = 'world';
console.log(e);
let d = 1;
console.log(d);
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
// TS sees no problem - but a string is returend
let myVal1 = addOrConcat(2, 3, 'add');
console.log(myVal);
console.log(myVal1);
// 10 as string
10;
// The dom assertiion is better to use
// ! NOT NULL ASSERTION
const img = document.querySelector('img');
const img1 = document.getElementById('#id');
const nextImg = document.getElementById('#id');
img.src;
img1.src;
