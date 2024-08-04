/*
Day 5: Functions

Tasks/Activities:

Activity 1: Function Declaration
Task 1: Write a function to check if a number is even or odd and log the result to the console.
Task 2: Write a function to calculate the square of a number and return the result.

Activity 2: Function Expression
Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
Task 4: Write a function expression to concatenate two strings and return the result.

Activity 3: Arrow Functions
Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

Activity 4: Function Parameters and Default Values
Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

Activity 5: Higher-Order Functions
Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

Feature Request:
1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result. 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

Achievement:
By the end of these activities, students will:
Understand and define functions using function declarations, expressions, and arrow functions.
Use function parameters and default values effectively.
Create and utilize higher-order functions.
Apply functions to solve common problems and perform calculations. Enhance code reusability and organization using functions.
*/


// what is difference between function declaration and function expression ?? (find out)

console.log("Task1.......................")

function checkEvenOrOdd(num) {
try {
        if (isNaN(num)) {
            // console.log("Invalid Input")
            // return
            throw new Error("Invalid input !")
    
        }
        if (num % 2 === 0) {
            console.log(num, "is even number")
        } else {
            console.log(num, "is odd number");
        }
} catch (error) {
    console.error("Error:",error.message,num)
}

}
checkEvenOrOdd(2)                    // why it was giving output abc is odd number ?? 
checkEvenOrOdd(5)                    // to fix it we need to check the type of the arrgument
checkEvenOrOdd('abc')

console.log("Task2.......................")

function square(num) {
    try {
            if (isNaN(num)) {
                // console.log("Invalid Input")
                // return
                throw new Error("Invalid input !")
        
            }
            return (`Square of ${num} is ${num*num}`)
    } catch (error) {
        return `Error: ${error.message} ${num}`
    }
    
    }

console.log(square(2))
console.log(square("a"))

console.log("Task3.......................")

const maximum = function(num1,num2){
    if(isNaN(num1)||isNaN(num2)){
        console.log("Either or both of the input is invalid")
        
    }else{
        if(num1>=num2){
            console.log(`${num1} is greater`)
        }else{
            console.log(`${num2} is greater`)
        }
    }

}
maximum(3,9)
maximum('a',4)


// same silly error (typeof(str1)&&typeof(str2)) === 'string'
console.log("Task4.......................")

const concatanate_string = function (str1, str2) {

    if (typeof (str1) === 'string' && typeof (str2) === 'string') {
        return str1 + str2
    } else {
        return ("Invalid Input")
    }

}
console.log(concatanate_string('a','b'))
console.log(concatanate_string(1,2))
//console.log(concatanate_string(a,"b"))

console.log("Task5.......................")

const sum = (num1,num2)=>{
    if(isNaN(num1)||isNaN(num2)){
       return("Either or both of the input is invalid")}
    return num1+num2
}
console.log(sum(2,3))
console.log(sum(8,"k"))

console.log("Task6.......................")

const findSubstr = (str,target)=>{
    if (typeof(str) === 'string' && typeof(target) === 'string') {
        return str.includes(target)
    }else{
        return("Invalid input")
    }
}
console.log(findSubstr('devesh','dev'))
console.log(findSubstr('devesh',4))

console.log("Task7.......................")

const product = function (num1, num2=1) {
    if (isNaN(num1) || isNaN(num2)) {
        return("Either or both of the input is invalid")

    } else {
        return(num1 * num2)
    }

}
console.log(4,5)
console.log(4)
    
    


console.log("Task8.......................")

const greet = function (name, age=18) {
    if ((typeof(name) !== 'string' || typeof(age) !== 'number')) {
        return("Either or both of the input is invalid")

    } else {
        return `Welcome ${name} your age is ${age}`
    }

}
// console.log("Ash",15)       // what a silly mistake :-)
// console.log("Ash")
// console.log(5,5)
console.log(greet("Ash",15))
console.log(greet("Ash"))
console.log(greet(5,5))

console.log("Task9.......................")

const functionCaller = function(fn,numberOfCalls){
    for (let i = 0; i < numberOfCalls; i++) {
        fn()
    }
}

const sayHi = ()=>{
    console.log("HI..")
}

functionCaller(sayHi,5)

console.log("Task10.......................")

const fn3 = function(fn1,fn2,x){
    return fn2(fn1(x))
}

const incrementByOne = function(num){
    return num + 1}
const decrementByOne = function(num){
    return num - 1}

console.log(fn3(incrementByOne,incrementByOne,5))
console.log(fn3(incrementByOne,decrementByOne,5))