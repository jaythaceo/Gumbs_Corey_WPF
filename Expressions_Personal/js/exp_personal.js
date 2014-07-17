//Corey Gumbs July 16, 2014 Assignment Expressions
//Java Script



//Personal Expressions Assignment
//This is a calculator to help me plan how much time I have during the week for recreation and personal time


//declaring and defining variables
//title alert
alert("RecCalc will determine your free time for the week! \n \n Please answer all questions. Click next to begin.");
//input variables
var weekTime = 168;//hours in a week
var userSchool = prompt("How many hours a week do you spend on school work?");
var userStudy = prompt("How many hours a week do you study?");
var userSleep = prompt("How many hours do you sleep in a day?")
var userEat = prompt("How many times do you eat per day?")
var total= Number(userSchool + userStudy + userSleep + userEat);


var eat =(userEat * 30 / 60)* 7;//hours per week for eat: convert minutes into hours per week
var sleep = (userSleep * 7)//hours per tingweek for sleep
var avgStudy = Number(userStudy)/7;
var result = Number(total - weekTime);

alert("You do " + userSchool + " hours worth of school work.");
alert("You study for " + userStudy + " hours a week, for an average of " + avgStudy + " hours per day.");
alert("You sleep a total of " + sleep + " hours per week." );
alert(eat);
alert(result);


 
console.log(userSchool + " " + userStudy + " " + userSleep + " " + userEat);
console.log(eat + " " + sleep);