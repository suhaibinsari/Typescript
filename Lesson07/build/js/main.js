"use strict";
// index signatures
const todayTransactions = {
    Pizza: -10,
    Books: -3,
    Cig: 50
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions.Books);
console.log(todayTransactions.Cig);
console.log(todayTransactions['Cig']);
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
// todayTransactions.Pizza = 55
console.log(todayTransactions);
console.log(todayTransactions['dave']);
const student = {
    name: 'ali',
    gpa: 3.4,
    classes: [100, 200]
};
console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const logStudent = (student, key) => {
    console.log(`student ${key}: ${student[key]}`);
};
logStudent(student, 'gpa');
logStudent(student, 'name');
logStudent(student, 'classes');
// type Incomes = Record<Streams, number>
const monthlyIncomes = {
    salary: 500,
    bonous: 400,
    sidehustle: 200
};
// console.log(monthlyIncomes.salary)
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
