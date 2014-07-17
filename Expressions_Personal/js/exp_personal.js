//Corey Gumbs July 16, 2014 Assignment Expressions
//Java Script



//Personal Expressions Assignment
//This is a calculator to help me plan how much time I have during the week for recreation and personal time


//declaring and defining variables

alert("RecCalc will determine your free time for the week! \n \n Please answer all questions. Click next to begin.");

var weekTime = 168;
var userSchool = prompt("How many hours a week do you spend on school work?");
var userStudy = prompt("How many hours a week do you study?");
var userSleep = prompt("How many hours do you sleep in a day?")
var userEat = prompt("How many times do you eat per day?")

var eat = "You spend " + (userEat * 30) + " minutes (based on 30 minute increments) a day eating.";
var sleep = " You sleep " + (userSleep * 7) + " hours a week.";
var avgStudy = (Number(userStudy)/7) * 10;

alert("You do " + userSchool + " hours worth of school work.");
alert("You study for " + userStudy + " hours a week for an average of " + avgStudy + " hours per day.");
alert(sleep);
alert(eat);

 
console.log(userSchool + " " + userStudy + " " + userSleep + " " + userEat);
console.log(eat + " " + sleep);