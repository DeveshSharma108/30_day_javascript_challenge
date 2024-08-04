/*
Day 11: Promises and Async/Await

Tasks/Activities:

Activity 1: Understanding Promises
Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console. 
Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().

Activity 2: Chaining Promises
Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

Activity 3: Using Async/Await
Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

Activity 4: Fetching Data from an API
Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
Task 7: Use the fetich API to get data from a public API and log the response data to the console using async/await.

Activity 5: Concurrent Promises
Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values. 
Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Feature Request:
1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence. 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.

Achievement:
By the end of these activities, students will:
Understand and create promises, including handling resolved and rejected states.
Chain multiple promises to perform sequential asynchronous operations.
Use async/await to handle asynchronous code more readably. Fetch data from public APIs using both promises and async/await.
Manage multiple concurrent promises using Promise.all and Promise.race,
*/



// const promise_ = new Promise(function(resolve,reject){
//     let failure = true      // toggle the value to simulate task 1 and task 2
//     setTimeout(()=>{
//         if (failure) {
//             reject('Failed to fillfull promise....')
//         } else {
//             resolve('promise fillfulled ... ')
//         }
        
//     },2000)
// })

// promise_
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))




// function fetchData(endPoint,delay){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             switch (endPoint) {
//                 case 'user':
//                     resolve({ username: "Jack", id: "#1032" })
//                     break;
//                 case 'posts':
//                     resolve([{ id: 1, title: 'First Post' }, { id: 2, title: 'Second Post' }]);
//                     break;
//                 case 'comments':
//                     resolve([{ id: 1, text: 'Great post!' }, { id: 2, text: 'Thanks for sharing!' }]);
//                     break;
//                 default:
//                     reject('Unknown endpoint');
//                 }
//         }, delay);
//     })
// }

// fetchData('user',2000)
// .then((user)=>{
//     console.log("....User Profile....")
//     console.log("Username :",user.username)
//     console.log("id :",user.id)
//     return fetchData('posts',1500)}
// )
// .then((posts)=>{
//     console.log("....Posts......")
//     for (let i = 0; i < posts.length; i++) {
//         console.log("Post Id:",posts[i].id,"Post Title:",posts[i].title)
        
//     }
//     return fetchData('comments',1000)}
// )
// .then((comments)=>{
//     console.log("....Comments......")
//     for (let i = 0; i < comments.length; i++) {
//         console.log(comments[i].text)
//     }
//     return promise_
// })
// .then((message)=>console.log(message))
// .catch(error => {
//     console.error('Error:', error);
// });





// const test_promise = new Promise(function(resolve,reject){
//     let failure = true
//     setTimeout(()=>{
//         if (failure) {
//             // 1 reject('Failed to fillfull promise....')
//             reject(new Error('Failed to fillfull promise....'))
//         } else {
//             resolve('promise fillfulled ... ')
//         }
        
//     },7000)
// })

// async function wait(givenPromise){
//     console.log("..1...")
//     try {
//         const message = await givenPromise
//         console.log(message)
//         console.log("...2...")
//     } catch (error) {
//         // console.error("Error",message)  // message is not defined
//         // 1 console.error("Error",error.message)
//         console.error("Error",error.message)
//     }

// }
// wait(test_promise)



// fetch('https://api.adviceslip.com/advice')
// .then((response)=>response.json())
// .then((data)=>{
//     const advice = data.slip.advice
//     console.log(".......... Advice Of The Day1 ..........")
//     console.log(advice)
// })

// async function dailyAdvice(){
//     const respone = await fetch('https://api.adviceslip.com/advice')
//     // console.log(respone)
//     const data = await respone.json()       // why await is used here ??
//     const advice = data.slip.advice
//     console.log(".......... Advice Of The Day2 ..........")
//     console.log(advice)
    
// }
// dailyAdvice()


/*
.then(response => console.log(response.json().slip.advice))

The problem is that response.json() returns a promise, not the parsed JSON object directly. You can't access properties (slip and advice) on a promise; you need to wait for the promise to resolve first.
*/

// read jikan api documentation to use it in future


// this program is in my github in javascriptlearning/promises/bakery.js
// const bakingTime = {
//     'Cheese cake':3000,
//     'Black Forest cake':5000,
//     'Red Velvet cake':6000,
//     'Fruit cake':5000,
//     'Atta Jaggery cake':4000,
// }

// function placeOrder(cake){
//     const baking = new Promise(function(resolve,reject){
//         console.log(`baking your ${cake} 🍰🍰😋`)
//         console.log(`will be ready in ${(bakingTime[cake])/1000} seconds\n`)

//         const failure = Math.random()<0.8 ? false:true
//         setTimeout(()=>{
//             if(!failure){
//                 resolve(`Your ${cake} is ready 👍... You can pick it up after payment 💸💸.`)
//             }
//             else{
//                 let apology = `Sorry! 🙇🙇 your ${cake} is not ready yet! The oven is not working properply. You can wait or come again later sorry for the inconvenience ..... `
//                 reject(apology)

//             }
            
//         },(bakingTime[cake]))
//     })
//     return baking
// }

// Promise.all([placeOrder("Red Velvet cake"),placeOrder("Cheese cake")])
// .then((messages)=>{                                             // then get array of resolved value
//     messages.forEach((message)=> console.log(message))
//     console.log("\nAll cakes are baked.... Enjoy 😋😋")
// })          
// .catch((error)=>console.log(error))
// .finally(()=>console.log("\nHave a nice day ..!"))


// placeOrder("Red Velvet cake")
// placeOrder("Cheese cake")
// placeOrder("Atta Jaggery cake")
// placeOrder("Black Forest cake")
// placeOrder("Fruit cake")


const car1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Car1 reached the finishing line.....")
    },3000)
})

const car2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Car2 reached the finishing line.....")
    },5000)
})

Promise.race([car1,car2])
.then((winner)=>console.log(winner))















// check chatgpt conversation (30_days_javascript)  in case of confusion/to understand