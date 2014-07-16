//Corey Gumbs July 16, 2014 Assignment Expressions
//Java Script



//Expressions - Personal: How Many hours after studying and schoolwork do I have to play.
//Dictating and defining variables for "School and Play" calc.
//weekTime is how many hours in a week minus 8 hrs per day for sleep (7 day week)
var weekTime = 168 - 56;
//this variable user inputs how much time they did school work
var schoolTime = 40;
//this variable is how many hours of study time they completed
var studyTime = 20;

//Result variable that determines the remainder of time left after study and school time.
var playTime =  ((schoolTime + studyTime) - Number(weekTime)) % 100 ;

console.log(playTime);

	prompt("Fill in the blank");