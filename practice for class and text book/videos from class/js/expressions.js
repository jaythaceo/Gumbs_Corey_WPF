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
