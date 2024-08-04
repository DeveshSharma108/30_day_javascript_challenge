/*
Day 1: Variables and Data Types

Tasks/Activities:

Activity 1: Variable Declaration
Task 1: Declare a variable using var, assign it a number, and log the value to the console.
Task 2: Declare a variable using let, assign it a string, and log the value to the console.

Activity 2: Constant Declaration
Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

Activity 3: Data Types
Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeor operator.

Activity 4: Reassigning Variables
Task 5: Declare a variable using tet, assign it an initial value, reassign a new value, and log both values to the console.

Activity 5: Understanding const
Task 6: Try reassigning a variable declared with const and observe the error.

Feature Request:
1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

Achievement:
By the end of these activities, you will:
Know how to declare variables using var, let, and const.
Understand the different data types in JavaScript
Be able to use the typeof operator to identify the data type of a variable.
Understand the concept of variable reassignment and the immutability of const variables.
*/

var number1 = 123
console.log(number1)

let string1 = 'abc'
console.log(string1)

const boolean1 = true
console.log(boolean1)

let number2 = 435
let string2 = "alsj"
let boolean2 = false
let object1 = {color: "blue",size: "small"}
let array1 = [1,2,3]
let undefined_1;
let null1 = null
let fn = function(){}
let symbol1 = Symbol("xyz")
let bigint1 = BigInt(123456789012345678901234567890123456789089676856765443424)

console.log("The datatype of ",number2," is : ",typeof(number2))
console.log("The datatype of ",string2," is : ",typeof(string2))
console.log("The datatype of ",boolean2," is : ",typeof(boolean2))
console.log("The datatype of ",object1," is : ",typeof(object1))
console.log("The datatype of ",array1," is : ",typeof(array1))
console.log("The datatype of ",undefined_1," is : ",typeof(undefined_1))
console.log("The datatype of ",null1," is : ",typeof(null1))
console.log("The datatype of ",fn," is : ",typeof(fn))
console.log("The datatype of ",symbol1," is : ",typeof(symbol1))
console.log("The datatype of ",bigint1," is : ",typeof(bigint1))

let x = 5
console.log("Initial value of x : ",x)
try {
    x= 8
    console.log("Value of x after reassignment is :",x)
} catch (error) {
    console.log("Error : ",error)
}

const y = 2
console.log("Initial value of y : ",y)
try {
    y= 8
    console.log("Value of y after reassignment is :",y)
} catch (error) {
    console.error("Error : ",error.message)
    //console.log(error)
}


const student = {
    Name: "Avatar",
    Roll_No: 1 
};
console.log(`Initial student object: ${JSON.stringify(student)}`);
student.Name = "Ash";
console.log(`Modified student object: ${JSON.stringify(student)}`);
try {
    student = {
        Name: "Avatar",
        Roll_No: 2
    };
} catch (error) {
    console.error(`Error : ${error.message}`);
    //console.log(error)
}


