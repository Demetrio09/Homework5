var utcDate = new Date();
var dayIndex = utcDate.getDay();
var utcHour = utcDate.getHours();
var localHour = utcDate.toLocaleTimeString();
var monthDayYear = utcDate.toLocaleDateString();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekDay[dayIndex];
var currentlyDate = dayOfWeek + ", " + monthDayYear + ", " + localHour;
var inputEl = ""//$(".description");
var inputForm = $(".col-8");
var dataValue = "";
var saveButton = $(".saveBtn");

// Show currently date on HTML document.
$("#currentDay").append(currentlyDate);

// Compare the time you get to the 9AM-5PM
    // highlight those before the hour green
    // highlight current hour red
    // highlight after hour gray
    // add or remove classes with jQuery

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

$("saveButton").on("click", function(event) {
    event.preventDefault();

    var inputElText = inputEl.val().trim();

    localStorage.setItem("input", JSON.stringify(inputElText));

    var lastData = JSON.parse(localStorage.getItem("input"));

    console.log(inputElText);
    
    console.log(lastData);
    
});

console.log(localHour);
console.log(monthDayYear);
console.log(dayOfWeek);
console.log(currentlyDate);
console.log(utcHour);
