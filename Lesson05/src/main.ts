// type asseretion

type One = string
type Two = string | number
type Three = 'hello'

//conver to more or less specific

let a: One = 'hello'

let b = a as Two // less specific
console.log(b)

let c = a as Three // more specific
console.log(c)

let e = <One>'world'
console.log(e)

let d = <string | number>1

console.log(d)


const addOrConcat = (a:number, b:number, c: 'add' | 'concat'):number | string => {
if (c === 'add') return a + b
return '' + a + b

}

let myVal: string = addOrConcat(2,3,'concat') as string

// TS sees no problem - but a string is returend
let myVal1: number = addOrConcat(2,3,'add') as number

console.log(myVal);
console.log(myVal1);

// 10 as string
(10 as unknown) as string

// The dom assertiion is better to use

// ! NOT NULL ASSERTION

const img = document.querySelector('img')!
const img1 = document.getElementById('#id')! as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#id')


img.src
img1.src