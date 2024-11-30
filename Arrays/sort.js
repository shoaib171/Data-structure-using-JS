// Question #01: Sort an single Array....

// Step 1: Define an array of numbers
const numbers = [42, 23, 16, 15, 8, 4, 0];

// Step 2: Sort the array using the sort() method
// The sort() method expects a compare function to sort numbers properly.
//  Logic part
//  -- a,b are the two first index of array both compares the value of "a" and "b" like
//    a < b   --- a comes first
//    a > b   --- b comes first
//    a === b   remain same unchanged
//    a === 0   a remains unchanged
//
numbers.sort(); // its an ascending order...
// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b- a);   // its an descending order...
// Step 3: Print the sorted array
console.log("Sorted Array:", numbers);

let fruits = ["banana", "Apple", "cherry"];
// fruits.sort(); // ["Apple", "banana", "cherry"]
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits, "fruits");


// using data structure...
  