/*
Day 19: Regular Expressions

Tasks/Activities:

Activity 1: Basic Regular Expressions
Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript in a string). Log the matches.
Task 2: Write a regular expression to match all digits in a string. Log the matches.

Activity 2: Character Classes and Quantifiers
Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

Activity 3: Grouping and Capturing
Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures. 
Task6: Write a regular expression to capture the username and domain from an email address. Log the captures.

Activity 4: Assertions and Boundaries
Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

Activity 5: Practical Applications
Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.. 
Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

Feature Request:
1. Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches. 
2. Character Classes and Quantifiers
3. Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures. 
4. Assertions and Boundarles Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.
5. Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.

Achievement:
By the end of these activities, students will:
Understand and create basic regular expressions.
Use character classes and quantifiers in regular expressions. Implement grouping and capturing in regular expressions.
Apply assertions and boundaries in regular expressions.
Use regular expressions for practical applications Ilke validating passwords and URLS
*/

const para = 'Once upon a time in a land far, far away, there lived a 🐉 dragon named Drago. Drago loved to collect shiny ✨ treasures from across the 12 kingdom. Every day, he would fly over the mountains 🏔️ and rivers 🌊, looking for new gems 💎 and gold coins 🪙 to add to his collection. One day, while exploring a deep, dark cave 🕳️, Drago stumbled upon a mysterious map 🗺️. The map was said to lead to a hidden treasure chest 💰 filled with ancient artifacts and priceless jewels. Excited about the discovery, Drago set off on a grand adventure 🚀, facing many challenges along the way. He battled 4 fierce beasts 🐺, solved 11 tricky puzzles 🧩, and navigated through 3 labyrinths 🌀. With bravery and determination, Drago finally reached the treasure and became the most famous dragon in all the lands'


const dragonMatches = para.match(/dragon/g)
console.log(dragonMatches)
console.log()


const digitsMatch = para.match(/\d/g)
console.log(digitsMatch)
console.log()


const capitalMatches = para.match(/[A-Z]\w*/g)
console.log(capitalMatches)
console.log()


// const digitsSeq = para.match(/\d*/g)   // why this output
const digitsSeq = para.match(/\d+/g)
console.log(digitsSeq)
console.log()

const phoneNumber = '(123) 456-7890'
const phoneNumberDetails = /\((?<areaCode>\d\d\d)\)\s(?<centralOfficeCode>\d{3})\-(?<lineNumber>\d{4})/
// console.log(typeof phoneNumber.match(phoneNumberDetails))    // it is array and we are accessing properties by dot notatiion
console.log(phoneNumber.match(phoneNumberDetails)[0])
console.log("Area Code :",phoneNumber.match(phoneNumberDetails).groups.areaCode)
console.log("Central Office Code :",phoneNumber.match(phoneNumberDetails).groups.centralOfficeCode)
console.log("Line Number :",phoneNumber.match(phoneNumberDetails).groups.lineNumber)

/*
// General array
const numbers = [10, 20, 30];

// Adding named properties directly to the array
numbers.first = 10;
numbers.second = 20;
numbers.third = 30;

console.log(numbers); // [10, 20, 30]
console.log(numbers.first); // 10
console.log(numbers.second); // 20
console.log(numbers.third); // 30
*/

console.log()
const email = 'asdf1234@gmail.com'
const emailDetails = /(?<username>\w*)@(?<domainName>\w+).(?<topLeveldomainName>\w*)/
// console.log(email.match(emailDetails))
console.log("Username :",email.match(emailDetails).groups.username)
console.log("Domain Name :",email.match(emailDetails).groups.domainName)
console.log("Top level Domain Name :",email.match(emailDetails).groups.topLeveldomainName)

console.log()
const start = /^\w+/
//console.log(para.match(start))
console.log(para.match(start)[0])


// The match method with a regular expression returns an array of all matches found in the string. When using the global flag g, it returns an array of all matches rather than including capturing groups.
const end = /(\w+)$/g
console.log(para.match(end))



console.log()
const passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
console.log('Dev!12asd'.match(passwordValidator)[0])  // match() returns null if password do not match the pattern
//console.log('Dev!asd'.match(passwordValidator))

/*
const a = null?'hi':'bye'
console.log(a)
*/

let passwords = ['123ABcd@','1234','ABCDE','1234ABCd','@abc12DE']

/*
passwords.forEach((password)=>{
    let result = password.match(passwordValidator) ? `Valid Password (${password})`:`Invalid Password (${password})`
    console.log(result)
})
*/

//or

// regexp.test(text)    returns true or false
// console.log(passwordValidator.test('1234'))

passwords.forEach((password)=>{
    let result = passwordValidator.test(password) ? `Valid Password (${password})`:`Invalid Password (${password})`
    console.log(result)
})




console.log()
// const urlValidator = /^(https:|http:|ftp:)(?=\/\/)(?=www)/
/*
Because lookaheads do not consume characters, these assertions do not move the "current position" in the string forward. Thus, the second lookahead ((?=www)) is checking for www immediately after the scheme (https:, http:, ftp:) without considering the //.
For more details go to chatgpt  conversation 30_days_javascript_challenge_part3
so we are using direct matching instead
*/

const urlValidator = /^(https|http|ftp):(\/\/)(www\.)([a-zA-Z0-9-]+\.)+[a-zA-z]{2,}(:[0-9]{1,5})?(\/[a-zA-Z0-9._-]*)*(\?[a-zA-Z0-9=&]*)?(#.*)?/
// (#.*)?   --> is optional and matches the pattern #(0 or more character of any type)
const Urls = [
    "http://www.example.com",
    "https://example.com",
    "ftp://example.com",
    "http://www.example.com:8080",
    "http://www.example.com/path/to/resource.",
    "http://www.example.com/path/to/.resource",
    "http://www.example.com/path/to/resource?key=value&key2=value2",
    "http://www.example.com/path/to/resource?key=value&key2=value2#fragment",
    "http://www.example",
    "http://",
    "http://www.example.com/path/to/resource."
]

Urls.forEach((url)=>{
    let result = urlValidator.test(url) ? `Valid URL (${url})`:`Invalid URL (${url})`
    console.log(result)
})