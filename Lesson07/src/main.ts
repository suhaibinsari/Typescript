// index signatures

// interface TransactionObj {

//     Pizza: number
//     Books: number
//     Cig: number
// }

interface TransactionObj{
   readonly [index: string]: number
}


const todayTransactions: TransactionObj = {
    Pizza: -10,
    Books: -3,
    Cig: 50
}

console.log(todayTransactions.Pizza)
console.log(todayTransactions.Books)
console.log(todayTransactions.Cig)

console.log(todayTransactions['Cig'])


let prop: string = 'Pizza'
console.log(todayTransactions[prop])

const todaysNet  = (transactions: TransactionObj):number =>{
    let total = 0
    for (const transaction in transactions){
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todayTransactions))

// todayTransactions.Pizza = 55

console.log(todayTransactions)

console.log(todayTransactions['dave'])



// ex 2

interface Student {

    [key: string]: string | number | number[] | undefined

    name: string,
    gpa: number,
    classes?: number[]

}

const student: Student = {
    name: 'ali',
    gpa: 3.4,
    classes:[100,200]
}


console.log(student.test);

for (const key in student){
    console.log(`${key}: ${student[key]}`)
}

const logStudent = (student: Student, key: keyof Student): void => {
    console.log(`student ${key}: ${student[key]}`)
}

logStudent(student, 'gpa')
logStudent(student, 'name')
logStudent(student, 'classes')


interface Incomes {
    [key: string]: number
}

type Streams = 'salary' | 'bonous' | 'sidehustle'

// type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonous: 400,
    sidehustle: 200
}

// console.log(monthlyIncomes.salary)


for (const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
}
