var utcDate = new Date();
var dayIndex = utcDate.getDay();
var utcHour = utcDate.getHours();
var localHour = utcDate.toLocaleTimeString();
var monthDayYear = utcDate.toLocaleDateString();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekDay[dayIndex];
var todayDate = dayOfWeek + ", " + monthDayYear + ", " + localHour;

$("#currentDay").append(todayDate);



console.log(localHour);
console.log(monthDayYear);
console.log(dayOfWeek);
console.log(todayDate);
