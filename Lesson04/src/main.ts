// type aliases


type stringOrNumber = string | number

type stringOrNuumberArray = (string | number)[]

interface Guitars {
    name?: string,
    active: true,
    albums: stringOrNuumberArray
}

type userId = stringOrNuumberArray

let abc = {
    name: "sss",
    active: false,
    albumbs: ['abc', 12]
}

console.log(abc)


// literal types

let myName: 'Dave'

let userName: "ease-in" | 11 | true

userName = 'ease-in'

// functions

const add = (a: string, b: string):string =>{
    return a + b;
}

console.log(add("abc ", "abv"))


const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("hello!");
logMsg(add("aaa", "aaa"));

let subtract = function (c:number, d:number, e:number):number{
    return c - d + e
}

let result = subtract(2,3,5)

console.log(result)

//type allias
type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c,d){
    return c * d
}

logMsg(multiply(2,2))


//type interface

interface mathFun {
    (a:number, b:number):number
}

let mul: mathFun = function(f,g){
    return f * g
}

logMsg(mul(4,4));


// optional pramaters

const addAll = (a:number, b:number, c?:number):number =>{

if(typeof c !== 'undefined'){

    return a + b + c

}
else return a + b
}


console.log(addAll(2,3,5))

// default parameters value

const sumAll = (a:number, b:number, c:number =3) => {

  return a - b + c

}

logMsg(sumAll(2,2))

// rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr)=> prev + curr)
}

console.log(total(1,2,3,4));

const total1 = (a:number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr)=> prev + curr) //redduce function is uused to sum of alll the values in the nums
}

console.log(total(1,2,4));


const createError = (errMsg: string): never =>{
  throw new Error(errMsg)
}


const infinite = () => {
  let i: number = 1;
  while(true){
    i++
    if(i > 100)
    break
  }
}


// custom type guard
const isNumber = (value: any):boolean =>{
  return typeof value === 'number' ? true : false
}

logMsg(isNumber("A"))

// use of the never type
const numberOrString = (value: number | string ): string =>{

  if (typeof value ===  'string') return 'string'
  if (typeof value ===  'number') return 'number'
  if(isNumber(value)) return 'number'

  return createError('this show an error!')

}
console.log(numberOrString(1))
