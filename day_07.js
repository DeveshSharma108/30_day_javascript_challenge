/*
Day 7: Objects

Tasks/Activities:

Activity 1: Object Creation and Access
Task 1: Create an object representing a Book1 with properties like title, author, and year, and log the object to the console.
Task 2: Access and log the title and author properties of the Book1 object.

Activity 2: Object Methods
Task 3: Add a method to the Book1 object that returns a string with the Book1's title and author, and log the result of calling this method. 
Task 4: Add a method to the Book1 object that takes a parameter (year) and updates the Book1's year property, then log the updated object.

Activity 3: Nested Objects
Task 5: Create a nested object representing a library with properties like name and Book1s (an array of Book1 objects), and log the library object to the console. 
Task 6: Access and log the name of the library and the titles of all the Book1s in the library.

Activity 4: The this Keyword
Task 7: Add a method to the Book1 object that uses the this keyword to return a string with the Book1's title and year, and log the result of calling this method.

Activity 5: Object Iteration
Task 8: Use a for...in loop to iterate over the properties of the Book1 object and log each property and its value.
Task 9: Use Object.keys and Object values methods to log all the keys and values of the Book1 object.

Feature Request:
1. Book1Book1 Object Script: Write a script that creates a Book1 object, adds methods to it, and logs its properties and method results.
2. Library Object Script: Create a script that defines a library object containing an array of Book1 objects and logs the library's details.
3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.

Achievement:
By the end of these activities, students will:
Create and manipulate objects with properties and methods. Understand and use the this keyword in object methods.
Work with nested objects and arrays of objects.
Iterate over an object's properties using loops and built-in methods
*/


console.log("Task1.......................")

const Book1 = {
    title: 'Atomic Habits',
    author: 'James Clear',
    year: 2016
}
console.log(Book1)
const Book2 = {
    title: 'The Subtle Art Of Not Giving A F*ck',
    author: 'Mark Manson',
    year: 2016
}
const Book3 = {
    title: 'Ikigai',
    author: 'Héctor García and Francesc Miralles',
    year: 2016
}

console.log("Task2.......................")

console.log(Book1['title'])
console.log(Book1['author'])

console.log("Task3.......................")

Book1.detail = function(){
    return `${Book1.title} by ${Book1.author}`            // return `${Book1.title} by ${Book1.author}` using this is good practice
}
console.log(Book1.detail())

console.log("Task4.......................")

Book1.updateYear = function(updatedYear){
    this.year = updatedYear
    console.log(this)
}
Book1.updateYear(2018)


console.log("Task5.......................")

const library = {
    name: "Learner's Paradise",
    Books: [Book1,Book2,Book3]
}
console.log(library)

console.log("Task6.......................")

console.log("Library Name:",library.name)
console.log("Titles:")
library.Books.forEach((book)=> console.log(book.title))

console.log("Task7.......................")

Book1.detail_using_this = function(){
    return `${this.title} by ${this.author}`
}
console.log(Book1.detail_using_this())

console.log("Task8.......................")

for (const property in Book1) {
    console.log(`${property}:${Book1[property]}`)
}

console.log("Task9.......................")

console.log(Object.keys(Book1))
console.log(Object.values(Book1))



/*
Understanding Enumerable Properties
In JavaScript, every property of an object has several attributes:

Value: The actual value of the property.
Writable: If true, the value of the property can be changed.
Enumerable: If true, the property shows up during property enumeration (e.g., in for...in loops and Object.keys()).
Configurable: If true, the property can be deleted and its attributes (excluding its value) can be changed.
*/
