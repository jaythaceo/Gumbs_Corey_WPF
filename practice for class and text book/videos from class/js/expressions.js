//JavaScript
// 	

var a = 2; //defines value of variable
var b = a+3; //assignment operator changes changes and defines new value of a

console.log(a + b);

//example Expressions

var yearBorn = 1977;

var age = 2014 - yearBorn; //arithmetic operator

console.log(age);


//arithmetic operator exercise

//area of a triangle is 1/2 width x height

var width = 18;
var height = 10;
var area = width * height/2;

console.log(area); 

//Modulo Operatorexercise

var remainder = 32 % 11;

console.log(remainder);

//order of operations examples PEMDAS

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of the items divided by the number of items
//place what you want to run first in parenthesis otherwise PEMDAS will happen

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4; 
console.log(average);

//learning not to overuse parenthesis
var length = 7;
var width = 6;

var perimeter =  length * 2 + width *2;
console.log(perimeter);


//Using arrays in Expressions

var orangeBins	= [234, 568, 883];

var total 	= orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);


//concatenating or combining strings

var firstName = "Corey";
var lastName = "Gumbs";
var space = " ";
var fullName = firstName + space + lastName;
console.log(fullName);

//practice

var a = "6";//"quotations" turns variable into a string and will concatenate the strings rather than do mathematical operation. 
var b = "7";
var c = 6;
var d = 7;


var result = a + b;
var sum = c +d; 
console.log(result);
console.log(sum);


//casting - treating numbers like strings

var stringVar = "6";
var result = 7 + Number(stringVar);//to cast put string in () and write Number in front of it to give it numerical value
console.log(result);

var areaCode = 718;
var firstPart = 341;
var secPart = 2281;

var phoneNo = areaCode + firstPart + secPart;
console.log(phoneNo);

