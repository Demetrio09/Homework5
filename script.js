var utcDate = new Date();
var dayIndex = utcDate.getDay();
var utcHour = utcDate.getHours();
var localHour = utcDate.toLocaleTimeString();
var monthDayYear = utcDate.toLocaleDateString();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekDay[dayIndex];
var todayDate = dayOfWeek + ", " + monthDayYear + ", " + localHour;
var inputEl = $("input");

// Show currently date on HTML document.
$("#currentDay").append(todayDate);

//get data-value from input tags in order to set attributes.
for (i = 0; i <= 8; i++) {
    var dataValue = $(".description" + i).attr("data-value");
    console.log(dataValue);
};

// set the attributes to the hour elements using if statments

if (dataValue < utcHour) {
    inputEl.addClass("past");
} else if (dataValue === utcHour) {
    inputEl.addClass("present");
} else {
    inputEl.addClass("future")
};


console.log(localHour);
console.log(monthDayYear);
console.log(dayOfWeek);
console.log(todayDate);
console.log(utcHour);
