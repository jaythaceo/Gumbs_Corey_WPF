//Corey Gumbs July 15th, 2014 Activity: Expression Worksheet
//JavaScript


//Begining of Problem #1 - Dog Years

//declaring and defining variables sparkyAge
var sparkyAge = 2;

//result variable created
var result = sparkyAge * 7;

//result to print -  created concatenating strings to print result and sparkyAge expression
console.log("Sparky is" + " " + sparkyAge + " " + "human years old, which is" + " " + result + " " + "in dog years." );



//Begining of Problem # 2 - Slice of Pie Part 1

//decalring and defining variables for how many slices per pizza, how many people at party, how many pizzas ordered.
var pizzaSlice = 10;
var partyPeople = 50;
var pizzaOrdered = 26;

//multiply pizza slices and pizza ordered, divide by # of people at party & assign result var
var slicesPeople = Number(pizzaSlice * pizzaOrdered)/partyPeople;

//print out of expresssion for Problem #2
console.log("Each person ate" + " " + slicesPeople + " " + "slices of pizza at the party.");



//Begining of Problem #3 - Slice of Pie part 2


//used variables from Problem #2 
var pizzaSlice = 10;
var partyPeople = 50;
var pizzaOrdered = 26;

//calculate the number of pizzas, slices, people, and remainder to sparky
var resultSparky = Number(pizzaSlice * pizzaOrdered) / partyPeople;
console.log("Sparky got" + " " +resultSparky + " " + "slice of pizza.");
