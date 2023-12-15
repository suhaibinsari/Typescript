// classes

// class Coder  {
//     name: string
//     music: string
//     age: number
//     lang: string


//     constructor(
//         name:string,
//         music:string,
//         age:number,
//         lang:string

//         ){
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }

// }


class coder{

    constructor(
        public name: string,
        private age: number,
        protected lang: string,
        readonly music: string
    ){
        this.name = name
        this.age = age
        this.lang = lang = 'tyypescript'
        this.music = music
    }
}
class coder1{

    secondLang!: string

    constructor(
        public name: string,
        private age: number,
        protected lang: string,
        readonly music: string
    ){
        this.name = name
        this.age = age
        this.lang = lang
        this.music = music
    }

public getAge(){
    return `hello i am ${this.age}`
}



}

const moon = new coder('Moon', 24, "" , "Teresang yara")
const moon1 = new coder1('Moon', 24, "Urdu" , "Teresang yara")


console.log(moon)
console.log(moon1.getAge())

class webDev extends coder{
    constructor(
        public computer: string,
        name: string,
        age: number,
        lang: string,
        music: string
    ) {
        super(name, age, lang, music)

        this.computer = computer

    }
    public getLang(){
        return `i write ${this.lang}`
           }
}

const sara = new webDev('mac', 'moon', 22, '', 'helloworld')
console.log(sara)

console.log(sara.getLang())

// console.log(sara.lang)

interface musician {
    name: string,
    insturements: string,
    play(action: string): string
}

class Guitarist implements musician{
    name: string
    insturements: string

    constructor(
        name:string,
        instruments: string
    ){
        this.name = name
        this.insturements = instruments
    }

    play(action: string){
        return `${this.name} ${action} the ${this.insturements}`
    }

}

const ms = new Guitarist('jimmy', 'guitar')
console.log(ms.play('strums'))



class peeps {

    static count: number = 0
    static getCount(): number {
        return peeps.count
    }

    public id: number

    constructor(
        public name:string
    ){
        this.name =name
        this.id = ++peeps.count
    }

}

const johnplay = new peeps('john')
const stevey = new peeps('jsteve')
const amy = new peeps('pppp')

console.log(amy.id)
console.log(stevey.id)
console.log(peeps.count)


class bands {
    private datasheet: string[]

    constructor(){
        this.datasheet = []
    }

    public get data(): string[]{
        return this.datasheet
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.datasheet = value
            return
        } else throw new Error('param us not an arrray of strings')
    }
}

const mybands = new bands()
mybands.data = ['neli', 'sssss']

console.log(mybands.data)

mybands.data = [...mybands.data, 'sss']
console.log(mybands.data)

mybands.data = ['can', 'gg']

