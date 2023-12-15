// utility types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: 'CS-321',
    title: 'FYP',
    grade: 2
}

console.log(assign1)

console.log(updateAssignment(assign1,{grade: 44}))
const assignGrade: Assignment = updateAssignment(assign1, {grade:33})

console.log(assignGrade)


// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.

    return assign
}


const assignVerified: Readonly<Assignment> = {
    ...assignGrade, verified: true
}

// assignVerified.grade = 99 cannot work because its read only

recordAssignment({ ... assignGrade, verified: true })


// Record Utility


const hexColorMap: Record<string, string> = {
    red: 'ff000',
    green: '00g00f',
    blue: '00000s'
}

type Students = 'sara' | 'kelly'
type LetterGrades = 'a' | 'b' | 'c' | 'd' | 'f'

const finalGrades: Record<Students, LetterGrades> = {
    sara: 'b',
    kelly: 'c'
}

console.log(finalGrades)

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> ={
    sara: {assign1: 55, assign2: 54},
    kelly: { assign1:32, assign2: 21},

}

console.log(gradeData)


// Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
    studentId: 'c03-11',
    grade: 12
}

console.log(score)

type AssignPrevieew = Omit<Assignment, 'grade' | 'verified'>


const preview: AssignPrevieew ={
    studentId: 'c2-00099',
    title: 'Ik thi lrki'
}

console.log(preview)

// Exculde and Extract


type adjustedGrades = Exclude<LetterGrades, 'a'>

type highGrades = Extract<LetterGrades, 'a' | 'b'>


// Nonnuullable

type AllpossiblGrades = 'moon' | 'dave' | 'john' | null | undefined

type NamesOnly =NonNullable<AllpossiblGrades>


// ReturnType

// type newAssign = {title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}


type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign('utility types', 100)

console.log(tsAssign)


// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['generics', 1000]

const tsAssign2: newAssign = createNewAssign( ...assignArgs)

console.log(tsAssign2)

// Awaited - helps us with the retuurn type of a promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUser = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res =>{
        return res.json()
    }).catch(err =>{
        if(err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>

fetchUser().then(users => console.log(users))