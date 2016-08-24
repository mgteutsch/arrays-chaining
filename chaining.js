// Scroll down to the bottom beneath the ~~~~~~~ to see completed exercise.

console.log("Before creating 1 line of code, let's break it down into steps:");

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log("Here is the initial integers array: ", integers);
document.getElementById("startingpoint").innerHTML += "What the beginning array looks like:" + "<br/>" + integers + "<br/>"

// 1. Integers in Descending Order:
console.log("1. Descending Integers:");
var orderedIntegers = integers.sort(
	function integerSorter(first, second) {
		return first - second;
	}
);
console.log("First, order the integers: ", orderedIntegers);

var descendingIntegers = orderedIntegers.reverse();
console.log("Then, use .reverse() to descend: ", descendingIntegers);


// 2. Removing Integers greater than 19:
console.log("2. Integers Less Than or Equal to 19:");
var integersLessThanTwenty = descendingIntegers.filter(function(x) {
	return x <=19;
});
console.log("Use a filter function: ", integersLessThanTwenty);


// 3. Multiplying by 1.5 and then removine 1:
console.log("3. (Integers x 1.5) - 1:");
var mathIntegers = integersLessThanTwenty.map(function(x) {
	return (x * 1.5) - 1;
});
console.log("Use a .map() function: ", mathIntegers);


// 4. Output into DOM
console.log("4. Input into DOM:");
console.log("Use document.getElementById('id').innerHTML");
document.getElementById("initialarrayoutput").innerHTML += "What the array should look like:" + "<br/>" + mathIntegers + "<br/>";


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// FINALLY: One Line of Code
console.log("---***--- Alright, now in ONE line of code ---***---");
console.log("View code under the 'Sources' tab.")

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort(function(first, second) {return first - second}).reverse().filter(function(x) {return x <= 19}).map(function(x) {return (x * 1.5) - 1}));

var newIntegers = integers.sort(function(first, second) {return first - second}).reverse().filter(function(x) {return x <= 19}).map(function(x) {return (x * 1.5) - 1});

document.getElementById("finalarrayoutput").innerHTML += "New array in just one line of code:" + "<br/>" + newIntegers + "<br/><br/>" + "Here's the one line of code:" + "<br/>" + "integers.sort(function(first, second) {return first - second}).reverse().filter(function(x) {return x <= 19}).map(function(x) {return (x * 1.5) - 1})"
