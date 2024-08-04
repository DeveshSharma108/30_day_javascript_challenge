/*
Day 12: Error Handling

Tasks/Activities:

Activity 1: Basic Error Handling with Try-Catch
Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

Activity 2: Finally Block
Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

Activity 3: Custom Error Objects
Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

Activity 4: Error Handling in Promises
Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console. 
Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

Activity 5: Graceful Error Handling in Fetch
Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console. 
Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

Feature Request:
1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks. 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.

Achievement:
By the end of these activities, students will:
Understand and implement basic error handling using try-catch blocks.
Use finally blocks to execute code regardless of the try-catch outcome.
Create and use custom error classes.
Handle errors in promises using catch() and within async functions using try-catch.
Implement graceful error handling when making network requests with the fetch API
*/


function fn(){
    try {
        console.log(5*a)
    } catch (error) {
        console.error(error.message)
    }
}

//fn()


function divide(num1,num2){
    try {
        if (num2 === 0) {
            throw new Error('Denominator can not be zero...')
        }
        console.log(num1,'/',num2,'=',(num1/num2))
    } catch (error) {
        console.error(error.message)
    }
}
// divide(5,2)
// divide(5,0)


// try {
//     const failure = true   // toggle to see execution flow
//     if (failure) {
//         throw new Error("Catch block executed due to error")
//     }
//     console.log("try block executed no error")
// } catch (error) {
//     console.log(error.message)
// }finally{
//     console.log("Program executed successfully")
// }


class MyCustomError extends Error{
    constructor(message,errorCode){
        super(message)
        this.errorCode = errorCode
        let timeStamp = new Date()
        this.timeStamp = timeStamp.toString()
        
    }
    details(){
        console.log('........................................')
        console.log("Timestamp :",this.timeStamp)
        console.log("Error Code :",this.errorCode)
        console.log("Error Message :",this.message)
        console.log('........................................')
    }
}

function myFunction(){
    failure = true
    try {
        if (failure) {
            throw new MyCustomError("Error occured while execution",500)
        }
        console.log("Successful execution completed ")
    } catch (error) {
        //console.log(error)
        //console.log(error.errorCode)
        error.details()
    }finally{
        console.log("end...")
    }
}
//myFunction()

// let date = new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toUTCString())


function registerUser(username,email){
    try {
        if (!username || !email) {
            throw new MyCustomError('All fields are required for registration ',401)
        }
        console.log('registration successful..')
    } catch (error) {
        console.log(error.errorCode,error.message)
    }
}
//registerUser("A.K.")

// const test_promise = new Promise(function(resolve,reject){
//     let failure = Math.random() < 0.5 ? true:false
//     setTimeout(()=>{
//         if (failure) {
//             // 1 reject('Failed to fillfull promise....')
//             reject(new Error('Failed to fillfull promise....'))
//         } else {
//             resolve('promise fillfulled ... ')
//         }
        
//     },3000)
// })
/*
test_promise
.then((message)=>{console.log(message)})
.catch((error)=>{console.log(error.message)})
*/

async function test(testPromise){
    try {
        let message = await testPromise
        console.log(message)
    } catch (error) {
        console.log(error.message)
    }
}

//test(test_promise)

// fetch('https://Why_I_Am_Typing_A_Wrong_URL/data')
// .then((response)=>response.json())
// .then((data)=>console.log(data.entry))
// .catch((error)=>console.log(error.message))


async function fn1(){
    try {
        let respone = await fetch('https://Why_I_Am_Typing_A_Wrong_URL/data')
        let data = respone.json()
        console.log(data.entry)
    } catch (error) {
        console.log(error.message)
    }
}
// fn1()