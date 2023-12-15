let stringArr = ['one','two', 'three']

let guitars = ['start', 'lespaul', 5150]

let mixedData = ['evm',1982, true]

stringArr[0] = 'abc'
stringArr.push('as')

console.log(stringArr)

guitars[1] = 123
guitars.unshift('asd')

console.log(guitars)

let test = []

test = guitars

let bands: string[] = []

// bands = guitars

bands.push('hello')
bands.unshift('moon')

console.log(bands)

// TUPLES

let myTuple: [string, number, boolean] = ['dave', 34, true]

let mixed = ['ss', 1, false]

mixed = myTuple

myTuple[2] = true

// objects

let myObj: object

myObj = []

console.log(typeof myObj )

myObj = bands
myObj = {}

const exmpObj = {

    prop1: 'Dave',
    prop2: true
}


exmpObj.prop1 = "a"
exmpObj.prop2 = false


console.log(exmpObj)

type Guitarist = { // or use interface without =
    name?: string,
    active?: boolean, // ? make it a union type optional
    albums: (string| number)[]
}

let evh: Guitarist = {
    name: "MOon",
    active: false,
    albums:[1999,2222,4444]
}
let jp: Guitarist = {
    active: true,
    albums:[1995,2233,4421]
}


console.log(evh)
console.log(jp)

// const greetGuitarist = (guitarist: Guitarist)=>{
//     return `hello ${guitarist.name}!`
// }
const greetGuitarist = (guitarist: Guitarist)=>{
    if(guitarist.name){
        return `hello ${guitarist.name.toUpperCase()}!`
    }
    return 'hello!'
}

console.log(greetGuitarist(evh));

// Enums

enum Grade {
    U,
    R = 7,
    B,
    Y,
}

console.log(Grade.U)
