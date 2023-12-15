"use strict";
// utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'CS-321',
    title: 'FYP',
    grade: 2
};
console.log(assign1);
console.log(updateAssignment(assign1, { grade: 44 }));
const assignGrade = updateAssignment(assign1, { grade: 33 });
console.log(assignGrade);
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
// assignVerified.grade = 99 cannot work because its read only
recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true }));
// Record Utility
const hexColorMap = {
    red: 'ff000',
    green: '00g00f',
    blue: '00000s'
};
const finalGrades = {
    sara: 'b',
    kelly: 'c'
};
console.log(finalGrades);
const gradeData = {
    sara: { assign1: 55, assign2: 54 },
    kelly: { assign1: 32, assign2: 21 },
};
console.log(gradeData);
const score = {
    studentId: 'c03-11',
    grade: 12
};
console.log(score);
const preview = {
    studentId: 'c2-00099',
    title: 'Ik thi lrki'
};
console.log(preview);
// ReturnType
// type newAssign = {title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('utility types', 100);
console.log(tsAssign);
const assignArgs = ['generics', 1000];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUser().then(users => console.log(users));
