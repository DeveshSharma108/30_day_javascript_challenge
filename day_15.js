/*
Day 15: Closures

Tasks/Activities:

Activity 1: Understanding Closures
Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result. 
Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

Activity 2: Practical Closures
Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

Activity 3: Closures in Loops
Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

Activity 4: Module Pattern
Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

Activity 5: Memoization
Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
Task 8: Create a memoized version of a function that calculates the factorial of a number.

Feature Request:
1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions. 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID. functions log the correct index.
4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure 
5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.

Achievement:
By the end of these activities, students will:
Understand and create closures in JavaScript.
Use closures to maintain private state and create encapsulated modules. Apply closures in practical scenarios like generating unique IDs and memoization.
Use closures in loops to capture and use variables correctly
*/

// what is closure, persistant state, encapsulation 



function outerFn(x){
    let y = x*2
    function innerFn(){
        return y
    }
    return innerFn
}

let a = outerFn(5)
console.log(a)
console.log(a())




function wrapper(initialValue){
    let value = initialValue
    function increment(){
        value = value + 1
    }
    function currentValue(){
        return value
    }
    return [increment,currentValue]
}

let [incrementer,getValue] = wrapper(5)
console.log(getValue())
incrementer()
console.log(getValue())



function generateId(){
    let ID = 0
    function lastID(){
        ID = ID + 1
        return ID
    }
    return lastID
}

let IDgenerator = generateId()
console.log(IDgenerator())
console.log(IDgenerator())


function getUser(username){
    return function greet(){
        return(`Welcome ${username}`)
    }
}

console.log(getUser('Ronin')())



/*
To ensure that each function logs the correct index, we need to create a new scope for each iteration of the loop. This can be done by creating an IIFE (Immediately Invoked Function Expression) or using the let keyword directly within the loop (which already provides block scope in modern JavaScript environments). Since we are using ES6 syntax so the code below is working fine in case of previous syntax we can use the IIFE approch
*/


// using let
/*
function fnGenerator(numberOfFunctions){
    let functionArray = []
    for (let i = 1; i <= numberOfFunctions; i++) {
        functionArray.push(()=>{return i})
    }
    return functionArray
}


let FnArray = fnGenerator(5)

for (let i = 0; i < FnArray.length; i++) {
    console.log(FnArray[i]())
}
*/

// IIFE approch
/* 
function fnGenerator(numberOfFunctions) {
    let functionArray = [];
    for (let i = 1; i <= numberOfFunctions; i++) {
        functionArray.push(
            (function(index) {
                return function() {
                    return index;
                };
            })(i)
        );
    }
    return functionArray;
}


let FnArray = fnGenerator(5)

for (let i = 0; i < FnArray.length; i++) {
    console.log(FnArray[i]())
}
*/

// dynamically named functions

function fnGenerator(numberOfFunctions){
    let functionArray = []
    for (let i = 1; i <= numberOfFunctions; i++) {
        let fn = new Function(`return function fn${i}(){return ${i}}`)     // understand this line ??
        functionArray.push(fn)
    }
    return functionArray
}

let FnArray = fnGenerator(5)

for (let i = 0; i < FnArray.length; i++) {
    //console.log(FnArray[i])                                                // ???
    //console.log(FnArray[i]())                                              //  ???
    console.log(FnArray[i]()())
}

// I took help of chatgpt for the task below

function itemManager(){
    let items = []
    let methods = {
        addItem(item){
            items.push(item)
            console.log("Item Added :",item)
        },
        removeItem(item){
            const index = items.indexOf(item)
            if (index !== -1) {
                items.splice(index,1)
                console.log("Item removed :",item)
            }else{
                console.log("Item not found !!")
            } 
        },
        allItems(){
            let Items = items
            return Items
        }
    }
    return methods
}

let list = itemManager()
list.addItem('Bananas')
list.addItem('Apples')
list.addItem('Strawberry')
console.log(list.allItems())
list.removeItem('Strawberry')
list.removeItem("Lime")
console.log(list.allItems())


function memoizedFactorial(n,memo=[1,1]){
    if (memo[n]) {
        return memo[n]
    }else{
        memo[n] = n * memoizedFactorial(n-1,memo)
    }
    return memo[n]
}

//console.log(memoizedFactorial(0))
console.log(memoizedFactorial(6))

function memoizedFibonacci(n,memo=[0,1]){
    /*

    if (memo[n]) {
        return memo[n]

    does not handle the case when n = 0 (if memo[0]) will result in false as memo[0] = 0 so else will execute 
    memo[0] = memoizedFibonacci(-1,memo) + memoizedFibonacci(-2,memo)
    This problem doesn't occured in factorial since memo[0] == 1 (true ) in factorial 

    output 
    function memoizedFibonacci(n,memo=[0,1,1]){
                          ^
    RangeError: Maximum call stack size exceeded
    at memoizedFibonacci (/home/devesh/Desktop/30_days_javascript/day_15.js:211:27)
    at memoizedFibonacci (/home/devesh/Desktop/30_days_javascript/day_15.js:216:19)
    at memoizedFibonacci (/home/devesh/Desktop/30_days_javascript/day_15.js:216:19)

    Two options
    1. use default memo = [0,1]  and use condition if (n==0 || n==1) return n
    2. Below
    */
    if (n<0) {
        return "Invalid Input !"
    }
    if (memo[n] !== undefined){
        return memo[n]
    }else{
        memo[n] = memoizedFibonacci(n-1,memo) + memoizedFibonacci(n-2,memo)
    }
    // return memo  :-)
    return memo[n]
}


// console.log(memoizedFibonacci(0))
console.log(memoizedFibonacci(7))

// try bottom up approch for above two



/*
String() vs JSON.stringify()
const args1 = [1, 2, [3, 4]];
const args2 = [1, "2,3", 4];

const key1String = String(args1);
const key1JSON = JSON.stringify(args1);

const key2String = String(args2);
const key2JSON = JSON.stringify(args2);

console.log(key1String); // "1,2,3,4"
console.log(key1JSON);   // "[1,2,[3,4]]"

console.log(key2String); // "1,2,3,4"
console.log(key2JSON);   // "[1,\"2,3\",4]"
*/




// generalised memoize function 

function memoize(fn){
    const chache = {}
    function memoizedFunction(...args){
        const key = JSON.stringify(args)
        if (chache[key] !== undefined) {
            console.log("Returning from the cache for the key :",key)
            return chache[key]
        }
        const result = fn(...args)
        chache[key] = result
        return result
    }
    return memoizedFunction
}

function isPrime(n){
    if (n <= 1) {
        return false
    }
    if (n <= 3) {
        return true
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false
        }
    }
    return true
}

const memoized_isPrime = memoize(isPrime)
console.log(memoized_isPrime(7))
console.log(memoized_isPrime(7))
console.log(memoized_isPrime(4))
console.log(memoized_isPrime(4))

