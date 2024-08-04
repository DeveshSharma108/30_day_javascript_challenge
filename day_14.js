/*
Day 14: Classes

Tasks/Activities:

Activity 1: Class Definition
Task 1: Define a class Person with properties name and age, and a method to retun a greeting message. Create an instance of the class and log the greeting message.
Task 2: Add a method to the Person class that updates the age property and logs the updated age.

Activity 2: Class Inheritance
Task 3: Define a class Student that extends the Person class. Add a property Student ID and a method to return the Student ID. Create an instance of the Student class and log the Student ID.
Task 4: Override the greeting method in the Student class to include the Student ID in the message. Log the overridden greeting message.

Activity 3: Static Methods and Properties
Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Task 6: Add a static property to the Student class to keep track of the number of Students created. Increment this property in the constructor and log the total number of Students.

Activity 4: Getters and Setters
Task 7: Add a getter method to the Person class to return the full name (assume a firstname and lastname property). Create an instance and log the full name using the getter.
Task 8: Add a setter method to the Person class to update the name properties (firstname and lastname). Update the name using the setter and log the updated full name.

Activity 5: Private Fields (Optional)
Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money, Ensure that the balance can only be updated through these methods. 
Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

Feature Request:
1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
2. Class Inheritance Script: Create a script that defines a Student class extending on, averrides methods, and logs the results.
3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes. 
4. Getters and Setters Script: Create a script that uses getters and setters in a class.
5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).

Achievement:
By the end of these activities, Students will:
Define and use classes with properties and methods. Implement inheritance to extend classes.
Utilize static methods and properties.
Apply getters and setters for encapsulation.
Understand and use private fields in classes (optional).
*/


class Person{
    
    constructor(firstName,lastName,age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
        
    }

    greet(){
        return `Hey there I am ${this.firstName + ' ' + this.lastName}. I am ${this.age} years old. You can't see me 👌❌👀❌💪`
    }

    updateAge(updatedAge){
        this.age = updatedAge
        console.log("Age Updated to",this.age)
    }

    static genericGreet(){
        console.log('Hello person. If you exist you have age > 0')
    }

    get fullname(){
        return this.firstName + ' ' + this.lastName
    }

    set fullname([a,b]){
        this.firstName = a,
        this.lastName = b,
        console.log(this.fullname)
    }
    

}


const John = new Person('John','Cena',42)
console.log(John.greet())
John.updateAge(47)

class Student extends Person{
    static totalStudents = 0
    constructor(firstName,lastName,age,studentId){
        super(firstName,lastName,age)
        this.studentId = studentId
        Student.totalStudents = Student.totalStudents + 1
    }

    showId(){
        console.log(`Student ID of ${this.firstName + ' ' + this.lastName} is ${this.studentId}`)
    }

    greet(){
        console.log('................................................')
        console.log("Student Name :",this.firstName,this.lastName)
        console.log("Student ID :",this.studentId)
        console.log('................................................')
    }

    static getTotalNoOfStudents(){
        console.log('Total no of students enrolled till now is :',Student.totalStudents)
    }
}

const student1 = new Student('Nagisa','Shiota',15,8025)
student1.showId()
student1.greet()
Person.genericGreet()
Student.getTotalNoOfStudents()

const Jack = new Person('Jack','Jonas',27)
//console.log(Jack)
console.log(Jack.fullname)
Jack.fullname = ['Samurai','Jack']
//console.log(Jack)



/*
Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money, Ensure that the balance can only be updated through these methods. 
Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
*/

class Account{
    #balance
    constructor(accNo){
        this.accountNumber = accNo
        this.#balance = 0
        
    }
    get balance(){
        return this.#balance
    }
    deposit(amount){
        if (!isNaN(amount) && amount>0 && amount == Math.round(amount)) {
            this.#balance += amount
            console.log("Depsited amount :",amount)
            console.log("Current Balance :",this.balance)
        }
        else{
            console.log("Invalid Operation")
        }
    }
    withdraw(amount){
        if (!isNaN(amount) && amount>0 && amount == Math.round(amount) && this.#balance-amount> 0) {
            this.#balance -= amount
            console.log("Withdrawn amount :",amount)
            console.log("Current Balance :",this.balance)
        }
        else{
            console.log("Invalid Operation")
        }
    }

}

const acc1 = new Account(101)
const acc2 = new Account(102)

acc1.deposit(150)
acc2.deposit(500)
acc1.withdraw(50)
acc2.withdraw(100)

/*
console.log(acc1.balance)
acc1.balance = 54
console.log(acc1.balance)
*/

// console.log(acc1.#balance)