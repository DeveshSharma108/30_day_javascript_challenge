/*
Day 8: ES6+ Features

Tasks/Activities:

Activity 1: Template Literals
Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
Task 2: Create a multi-line string using template literals and log it to the console.

Activity 2: Destructuring
Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

Activity 3: Spread and Rest Operators
Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

Activity 4: Default Parameters
Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

Activity 5: Enhanced Object Literals
Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
Task 9: Create an object with computed property names based on variables and log the object to the console.

Feature Request:
1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments. 
4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

Achievement:
By the end of these activities, studerits will:
Understand and use template literals for string interpolation and multi-line strings.
Apply destructuring to extract values from arrays and objects. Utilize spread and rest operators for array manipulation and function arguments.
Define functions with default parameters.
Create objects using enhanced object literals, including methods and computed property names.
*/


console.log("Task1.......................")

let name = 'John'
let age = 15
let greeting1 = `Hello ${name}. I think you are ${age} years old`
console.log(greeting1)

console.log("Task2.......................")

let greeting2 = `Hello ${name}. I think you are ${age} years old
Have a nice day !`
console.log(greeting2)

console.log("Task3.......................")

const [first,second] = [1,2,4,5]
console.log(first,second)

console.log("Task4.......................")

const {title,author} = {
    title: 'Atomic Habits',
    author: 'James Clear',
    year: 2016
}
console.log(`Title:${title}\nAuthor:${author}`)


console.log("Task5.......................")

let arr1 = [1,2,3,4,5]
let arr2 = [...arr1,6,7,8,9,10]
console.log(arr1)
console.log(arr2);

console.log("Task6.......................")

const sum_ = function(...arguments){                // rest params are placed in array 
    let total = 0
    for (const argument in arguments) {
        total = total + Number(arguments[argument])        // elements❌ key✅ are treated as string
    }                                                      // argument is key(index) of array object arguments
    return total
}
console.log(sum_(1,2,3,4,5,6))
console.log(sum_(5,8))
console.log(sum_(5))

console.log("Task7.......................")

const product = function(num1,num2=1){
    if(isNaN(num1)||isNaN(num2)){
        return("Either or both of the input is invalid")}
     return num1*num2
}
console.log(product(4,5))
console.log(product(4))

console.log("Task8.......................")

// what are enhanced objects https://dev.to/sarah_chima/enhanced-object-literals-in-es6-a9d

function generateBook(title,author,year,info){
    return{
        title,
        author,
        year,
        info(){
            return `${this.title} by ${this.author}`
        }

    }
}
let book1 = generateBook('Atomic Habits','James Clear',2018)
console.log(book1.info())

console.log("Task9.......................")

const fruits = ['Mango','Banana','Watermelon','Grapes']

const basket ={}

for (let i = 0; i < fruits.length; i++) {
    basket['fruit' + String(i+1)] = fruits[i]
}

console.log(basket)