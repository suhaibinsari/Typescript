"use strict";
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
class coder {
    constructor(name, age, lang, music) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
        this.name = name;
        this.age = age;
        this.lang = lang = 'tyypescript';
        this.music = music;
    }
}
class coder1 {
    constructor(name, age, lang, music) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
    }
    getAge() {
        return `hello i am ${this.age}`;
    }
}
const moon = new coder('Moon', 24, "", "Teresang yara");
const moon1 = new coder1('Moon', 24, "Urdu", "Teresang yara");
console.log(moon);
console.log(moon1.getAge());
class webDev extends coder {
    constructor(computer, name, age, lang, music) {
        super(name, age, lang, music);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i write ${this.lang}`;
    }
}
const sara = new webDev('mac', 'moon', 22, '', 'helloworld');
console.log(sara);
console.log(sara.getLang());
class Guitarist {
    constructor(name, instruments) {
        this.name = name;
        this.insturements = instruments;
    }
    play(action) {
        return `${this.name} ${action} the ${this.insturements}`;
    }
}
const ms = new Guitarist('jimmy', 'guitar');
console.log(ms.play('strums'));
class peeps {
    static getCount() {
        return peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++peeps.count;
    }
}
peeps.count = 0;
const johnplay = new peeps('john');
const stevey = new peeps('jsteve');
const amy = new peeps('pppp');
console.log(amy.id);
console.log(stevey.id);
console.log(peeps.count);
class bands {
    constructor() {
        this.datasheet = [];
    }
    get data() {
        return this.datasheet;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.datasheet = value;
            return;
        }
        else
            throw new Error('param us not an arrray of strings');
    }
}
const mybands = new bands();
mybands.data = ['neli', 'sssss'];
console.log(mybands.data);
mybands.data = [...mybands.data, 'sss'];
console.log(mybands.data);
mybands.data = ['can', 'gg'];
