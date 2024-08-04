/*
Day 6: Arrays

Tasks/Activities:

Activity 1: Array Creation and Access
Task 1: Create an array of numbers from 1 to 5 and log the array to the console. 
Task 2: Access the first and last elements of the array and log them to the console.

Activity 2: Array Methods (Basic)
Task 3: Use the push method to add a new number to the end of the array and log the updated array.
Task 4: Use the pop method to remove the last element from the array and log the updated array. 
Task 5: Use the shift method to remove the first element from the array and log the updated array.
Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

Activity 3: Array Methods (Intermediate)
Task 7: Use the map method to create a new array where each number is doubled and log the new array.
Task 8: Use the filter method to create a new array with only even numbers and log the new array.
Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

Activity 4: Array Iteration
Task 10: Use a for loop to iterate over the array and log each element to the console.
Task 11: Use the forEach method to iterate over the array and log each element to the console.

Activity 5: Multi-dimensional Arrays
Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
Task 13: Access and log a specific element from the two-dimensional array.

Feature Request:
1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shirt, and unshirt methods.
2. Array Transformation Script: Create a script that uses map, Filter, and reduce methods to transform and aggregate array data.
3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.

Achievement:
By the end of these activities, students will:
Create and manipulate arrays using various methods.
Transform and aggregate array data using map, filter, and reduce,
Iterate over arrays using loops and iteration methods. Understand and work with multi-dimensional arrays.
*/


console.log("Task1.......................")

let arr = new Array(1,2,3,4,5)
console.log(arr)

console.log("Task2.......................")

console.log("First Element :",arr[0])
console.log("Last Element:",arr[arr.length - 1])

console.log("Task3.......................")

arr.push(6)
console.log(arr)

console.log("Task4.......................")

arr.pop(6)
console.log(arr)

console.log("Task5.......................")

arr.shift()
console.log(arr)

console.log("Task6.......................")

arr.unshift(1)  // unshift() return length of updated array
console.log(arr)

console.log("Task7.......................")

let doubledArray = arr.map((element)=> element*2)
console.log(doubledArray)

console.log("Task8.......................")

let evenArray = arr.filter((element)=> element%2==0)        // arr.filter((element)=> element%2)
console.log(evenArray)

console.log("Task9.......................")

let sum = doubledArray.reduce((accumulator,currentValue)=> accumulator + currentValue,0) 
console.log(sum)
    
console.log("Task10.......................")

for (let i = 0; i < arr.length; i++) {
    console.log(arr)
    
}

console.log("Task11.......................")

doubledArray.forEach((element,index)=>console.log(`${index}:${element}`))


console.log("Task12.......................")

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.table(matrix)

console.log("Task13.......................")

console.log("Element at diagonal intersection is",matrix[1][1])