var utcDate = new Date();
var dayIndex = utcDate.getDay();
var utcHour = utcDate.getHours();
var localHour = utcDate.toLocaleTimeString();
var monthDayYear = utcDate.toLocaleDateString();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekDay[dayIndex];
var todayDate = dayOfWeek + ", " + monthDayYear + ", " + localHour;
var inputEl = "";//$(".description");
var dataValue = "";

// Show currently date on HTML document.
$("#currentDay").append(todayDate);

//get data-value from input tags in order to set attributes.

for (i = 0; i <= 8; i++) {
    var inputEl = $(".description" + i);
    var dataValue = $(".description" + i).attr("data-value");
    console.log(dataValue);

    if (utcHour < dataValue) {
        inputEl.addClass("future");
    } else if (utcHour > dataValue) {
        inputEl.addClass("past");
    } else {
        inputEl.addClass("present");
    }
};

console.log(dataValue);

// add class to set attributes to input element using if statments

// function attributesEl() {
//     if (utcHour > dataValue) {
//         inputEl.addClass("past");
//     } else if (utcHour === dataValue) {
//         inputEl.addClass("present");
//     } else {
//         inputEl.addClass("future")
//     }};

// attributesEl();

console.log(localHour);
console.log(monthDayYear);
console.log(dayOfWeek);
console.log(todayDate);
console.log(utcHour);
