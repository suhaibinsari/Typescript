"use strict";
let stringArr = ['one', 'two', 'three'];
let guitars = ['start', 'lespaul', 5150];
let mixedData = ['evm', 1982, true];
stringArr[0] = 'abc';
stringArr.push('as');
console.log(stringArr);
guitars[1] = 123;
guitars.unshift('asd');
console.log(guitars);
let test = [];
test = guitars;
let bands = [];
// bands = guitars
bands.push('hello');
bands.unshift('moon');
console.log(bands);
// TUPLES
let myTuple = ['dave', 34, true];
let mixed = ['ss', 1, false];
mixed = myTuple;
myTuple[2] = true;
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exmpObj = {
    prop1: 'Dave',
    prop2: true
};
exmpObj.prop1 = "a";
exmpObj.prop2 = false;
console.log(exmpObj);
let evh = {
    name: "MOon",
    active: false,
    albums: [1999, 2222, 4444]
};
let jp = {
    active: true,
    albums: [1995, 2233, 4421]
};
console.log(evh);
console.log(jp);
// const greetGuitarist = (guitarist: Guitarist)=>{
//     return `hello ${guitarist.name}!`
// }
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'hello!';
};
console.log(greetGuitarist(evh));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["R"] = 7] = "R";
    Grade[Grade["B"] = 8] = "B";
    Grade[Grade["Y"] = 9] = "Y";
})(Grade || (Grade = {}));
console.log(Grade.U);
