var fullDate = new Date();
var localHour = fullDate.toLocaleTimeString();
var monthDayYear = fullDate.toLocaleDateString();
var day = fullDate.getDay();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekDay[day];
var todayDate = dayOfWeek + ", " + monthDayYear + ", " + localHour;

$("#currentDay").append(todayDate);



console.log(localHour);
console.log(monthDayYear);
console.log(dayOfWeek);
console.log(todayDate);
