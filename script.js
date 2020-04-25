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
    
    
    if (monthDayYear === localStorage.getItem("currentlyDate")) {
        // Load text for that day
        $(".description" + i).val(localStorage.getItem(i + 9));
    } else {
        localStorage.clear();
        localStorage.setItem("currentlyDate", monthDayYear);
    }
    if (utcHour < dataValue) {
        inputEl.addClass("future");
    } else if (utcHour > dataValue) {
        inputEl.addClass("past");
    } else {
        inputEl.addClass("present");
    }
};


$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var hour = $(this).siblings(".user-text").attr("data-value");
    console.log(hour);


    var userText = $(this).siblings(".user-text").val();
    console.log(userText);


    // console.log($(this).attr("data-text"));
    // console.log($("." + $(this).attr("data-text")).val());


    localStorage.setItem(hour, userText);

    // var inputElText = inputEl.val().trim();

    // localStorage.setItem("input", JSON.stringify(inputElText));

    // var lastData = JSON.parse(localStorage.getItem("input"));

    
});
//     var inputSave = localStorage.getItem("inputSave");

console.log(localHour);
console.log(monthDayYear);
console.log(dayOfWeek);
console.log(currentlyDate);
console.log(utcHour);
