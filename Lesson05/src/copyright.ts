// Original JS code

// const year = document.getElementById("year")
// const thisYear = new Date().getTime.getFullYear()
// year?.setAttribute("datetime", thisYear)
// year.textContect = thisYear



// 1st variation

let year: HTMLElement | null

year = document.getElementById("year")

let thisYear: string
thisYear = new Date().getFullYear().toString()

if (year){

year.setAttribute("datetime", thisYear)
year.textContent = thisYear

}


/// 2nd veriation


const year1 = document.getElementById("year") as HTMLSpanElement

const thisYear1 = new Date().getFullYear().toString() as string


year1.setAttribute("datetime", thisYear)
year1.textContent = thisYear

