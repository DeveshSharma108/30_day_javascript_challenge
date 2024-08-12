/*
Day 20: LocalStorage and SessionStorage

Tasks/Activities:

Activity 1: Understanding LocalStorage
Task 1: Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.
Task 2: Write a script to save an object to localstorage by converting it to a JSON string. Retrieve and parse the object, then log it.

Activity 2: Using LocalStorage
Task 3: Create a simple form that saves user input (e.g., name and email) to localstorage when submitted. Retrieve and display the saved data on page load.
Task 4: Write a script to remove an item from localstorage. Log the localstorage content before and after removal.

Activity 3: Understanding SessionStorage
Task 5: Write a script to save a string value to sessionstorage and retrieve it. Log the retrieved value.
Task 6: Write a script to save an object to sessionstorage by converting it to a JSON string. Retrieve and parse the object, then log it.

Activity 4: Using SessionStorage
Task 7: Create a simple form that saves user Input (e.g., name and email) to sessionstorage when submitted. Retrieve and display the saved data on page load.
Task 8: Write a script to remove an item from sessionstorage. Log the sessionstorage content before and after removal.

Activity 5: Comparing LocalStorage and SessionStorage
Task 9: Write a function that accepts a key and a value, and saves the value to both localstorage and sessionstorage. Retrieve and log the values from both storage mechanisms.
Task 10: Write a function that clears all data from both locallstorage and sessionatorage. Verify that both storages are empty.

Feature Request:
1. LocalStorage Script: Write a script that saves, retrieves, and removes items from localstorage, and displays the saved data on page load.
2. SessionStorage Script: Create a script that saves, retrieves, and removes items from seastonstorage, and displays the saved data on page load.
3. Storage Comparison Script: Write a script that saves data to both localstucage and sessconitorage, retrieves the data, and compares the results.
4. Clear Storage Script: Create a script that clears all data from both localstorage and sessionstorage, and verifies the operation.

Achievement:
By the end of these activities, students will:
Understand how to use Localstorage and sessionDtorage for persistent and session-specific data storage.
Save, retrieve, and remove data from both localstorage and seastonhtorage.
Implement form data storage using localstorage and sessionstorage.
Compare and contrast the use cases for localstorage and sessionätorage.
*/






/*
let obj = {'a':[1,2,"a"]}
let b = String(obj)
console.log(typeof b)
console.log(b)
let c = JSON.stringify(obj)
// c=c+'abcd'
console.log(c)
console.log(c.length)
// for (let i = 0; i < c.length; i++) {
//     console.log(c[i])
// }
console.log(typeof c)
console.log(JSON.parse(c))
console.log(typeof JSON.parse(c))

let arr = [1,2,3,"hi"]
let stringifyARR = JSON.stringify(arr)
console.log(stringifyARR)
console.log(typeof stringifyARR)
// console.log(JSON.parse(arr))            // give error because parse expect a JSON string as a parameter
console.log(JSON.parse(stringifyARR))
console.log(typeof JSON.parse(stringifyARR))
*/



/*
const obj1 = {
    name: "John",
    age: 30,
    city: "New York",
    
};
console.log(JSON.stringify(obj1))
console.log(obj1.toString())
console.log(String(obj1))
const fn = function(){console.log('I am a function')}
console.log(String(fn))
console.log(fn.toString())
console.log(JSON.stringify(fn))    // give undefined as output we can't convert function to string using JSON.stringify()

// how to stringify a object if it contains a function

// The replacer function is called for each key-value pair in the object, and it can modify or filter out values as needed. The function takes two arguments: the key and the value being stringified. It should return the value that should be added to the JSON string, or undefined to omit the key-value pair from the string.

const obj2 = {
    name: "John",
    age: 30,
    city: "New York",
    greet:function () {return('I am a function')}
};

const strObj2 = JSON.stringify(obj2,(key,value)=>{
    if (typeof value === 'function') {
        return value.toString()
    }
    return value
})
console.log(strObj2)


// if we want to omit numeric value properties
obj3 = {phone:100,age:32,city:"City"}

console.log(JSON.stringify(obj3,(key,value)=>{
    if (typeof value === 'number') {
        return undefined
    }
    return value
    }
))
*/

window.localStorage.setItem('1','one')
const userLocalStorage = {
    'username':null,
    'email':null,
    'color':null
}

const userSessionStorage = {
    'username':null,
    'email':null,
    'color':null
}

const localForm = document.getElementById("localPreferencesForm")

// console.log(localForm)
// console.log(['hibhijhio'])


// just for fun
/*
let a = {'details':null}
function subm(e){
    e.preventDefault()
    a['details'] = e
    console.log(a.details)
    console.log(a.details.target[0])
    console.log(a.details.target[0].value)
    console.log(a.details.target.elements)
}
localForm.addEventListener('submit', subm)
*/

localForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    userLocalStorage["username"] = event.target[0].value
    userLocalStorage["email"] = event.target[1].value
    userLocalStorage["color"] = event.target[2].value
    window.localStorage.setItem('userLocalStorage',JSON.stringify(userLocalStorage))
})


/*
event.target.elements is an object-like structure where each form control (input, select, textarea, etc.) can be accessed by their name or id attribute.
This allows you to directly access a specific input field by its name or id, making your code more readable and less prone to errors if the form structure changes.
*/

const sessionForm = document.getElementById("sessionPreferencesForm")
sessionForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    userSessionStorage["username"] = event.target.elements['username'].value
    userSessionStorage["email"] = event.target.elements['email'].value
    userSessionStorage["color"] = event.target.elements['theme'].value
    window.sessionStorage.setItem('userSessionStorage',JSON.stringify(userSessionStorage))
})


console.log(window.localStorage)
window.localStorage.removeItem('1')
console.log(window.localStorage)


function clearBoth(){
    window.localStorage.clear()
    window.sessionStorage.clear()
    if (window.localStorage.length === 0 && window.sessionStorage.length === 0) {
        console.log("Both storages are empty")
    }
}
// clearBoth()