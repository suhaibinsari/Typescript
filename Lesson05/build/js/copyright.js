"use strict";
// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getTime.getFullYear()
// year?.setAttribute("datetime", thisYear)
// year.textContect = thisYear
// 1st variation
let year;
year = document.getElementById("year");
let thisYear;
thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
/// 2nd veriation
const year1 = document.getElementById("year");
const thisYear1 = new Date().getFullYear().toString();
year1.setAttribute("datetime", thisYear);
year1.textContent = thisYear;
