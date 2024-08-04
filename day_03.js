/*
Day 3: Control Structures

Tasks/Activities:

Activity 1: If-Else Statements
Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

Activity 2: Nested If-Else Statements
Task 3: Write a program to find the largest of three numbers using nested if-else statements.

Activity 3: Switch Case
Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

Activity 4: Conditional (Ternary) Operator
Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

Activity 5: Combining Conditions
Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

Feature Request:
1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name. 
4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

Achievement:
By the end of these activities, students will:
Implement and understand basic if-else control flow.
Use nested if-else statements to handle multiple conditions.
Utilize switch cases for control flow based on specific values. Apply the ternary operator for concise condition checking.
Combine multiple conditions to solve more complex problems
*/

console.log("Task1.......................")

let integer = 8

if (integer >= 0) {
    if (integer == 0) {
        console.log("zero")
    } else {
        console.log("positive")
    }
} else {
    console.log("negative")
}

console.log("Task2.......................")

let age = 19

if (age>=18) {
    console.log("You can vote..")
} else {
    console.log("You can not vote..")
}

console.log("Task3.......................")

let num1 = 7
let num2 = 8
let num3 = 4

if (num1>=num2) {
    if (num1>=num3) {
        console.log(`${num1} is greatest among ${num1},${num2},${num3}`)
    }else{
        console.log(`${num3} is greatest among ${num1},${num2},${num3}`)
    }
}else{
    if (num2>=num3) {
        console.log(`${num2} is greatest among ${num1},${num2},${num3}`)
    }else{
        console.log(`${num3} is greatest among ${num1},${num2},${num3}`)
    }
}

console.log("Task4.......................")

let week_day = 7

switch (week_day) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log("Invalid Value .....")
        break;
}

console.log("Task5.......................")

// try false in place of true in switch parameter and observe the output to understand inner working of switch statement
let score = 78

switch (true) {
    case score>=90 && score<=100:
        console.log('A')
        break;
    case score>=75 && score<=90:
        console.log('B')
        break;
    case score>=60 && score<=74:
        console.log('C')
        break;
    case score>=33 && score<=59:
        console.log('D')
        break;
    case score>=0 && score<=32:
        console.log('F')
        break;
    default:
        console.log("Invalid score")

}

console.log("Task6.......................")
let number = 87
let nature = number % 2 ? console.log(number,"is a even number"):console.log(number,"is a odd number")
//console.log(nature)

console.log("Task7.......................")

let year = 2024
if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log(year,"is a leap year")
} else {
    console.log(year,"is not a leap year")
}