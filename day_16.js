/*
Day 16: Recursion

Tasks/Activities:

Activity 1: Basic Recursion
Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

Activity 2: Recursion with Arrays
Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

Activity 3: String Manipulation with Recursion
Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

Activity 4: Recursive Search
Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases. 
Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

Activity 5: Tree Traversal (Optional)
Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited. 
Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

Feature Request:
1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers. 
2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome. 
4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).

Achievement:
By the end of these activities, students will:
Understand and implement basic recursion.
Apply recursion to solve problems with arrays and strings. Use recursion for searching and counting elements in arrays.
Perform tree traversal and calculate tree depth using recursion (optional).
*/

function recursiveFactorial(n){
    if (n == 0 || n == 1) {
        return 1
    }
    result = n * recursiveFactorial(n-1)
    return result
}

console.log(recursiveFactorial(5))

function recursiveFibonacci(n){
    if (n==0) {
        return 0
    }
    if (n == 1 || n == 2) {
        return 1
    }
    result = recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
    return result
}

console.log(recursiveFibonacci(7))

function recursiveSumArray(arr){
    
    if (arr.length === 0) {
        return 0
    }
    let firstElement = arr[0]
    //arr = arr.splice(0,1)  // blunder ?
    arr.splice(0,1)
    // splice uses modifies the original array we can use slice that return new modified array
    //console.log(arr)
    return firstElement + recursiveSumArray(arr)
    
}

console.log(recursiveSumArray([]))
console.log(recursiveSumArray([4]))
console.log(recursiveSumArray([1,2,3,4,5,6,7,8,9,10]))


let i = 1
function findMaxRecursive(arr){
    i = i + 1
    //console.log(arr)
    if (arr.length === 0) {
        return 'Empty array'
    }
    if (arr.length === 1) {
        //console.log('returning',arr[0])
        return arr[0]
    }
    let firstElement = arr[0]
    //console.log("First Element in this case",firstElement)
    let maxRemaining = findMaxRecursive(arr.slice(1))
    //console.log(maxRemaining)
    result = firstElement >= maxRemaining ? firstElement : maxRemaining
    //console.log(result)
    return result
}

//console.log(findMaxRecursive([8,7,3,2]))
console.log(findMaxRecursive([8,7,5,10]))
console.log("no of calls for the function (findMaxRecursive) =",i)
// 16 recursive calls if using 
// result = firstElement >= findMaxRecursive(arr.slice(1)) ? firstElement : findMaxRecursive(arr.slice(1))
// calling same thing twice

/*
ternary operator bug/feature 
in the case when array was [8,7,3,2] (in descending order) 
the program was working fine but in case of [8,9,3,2] not, despite the fact that the ternary condition was incomplete in both cases
(result = firstElement >= maxRemaining ? firstElement : ma   <------ )
because in the case [8,7,3,2] it was true every time 
but in case of [8,9,3,2]  8>=9 is false so it gave error when it encounterd the incomplete false statement 

result = firstElement >= maxRemaining ? firstElement : ma
                                                       ^
ReferenceError: ma is not defined
*/



/*
console.log("abcd".slice("abcd".length - 1))
console.log("abcd".slice(-1))
console.log("abcd".slice(-2))
console.log("abcd".slice(-20))
*/

function reverseStringRecursive(str){
    /*
    if (str === '') {
        return "Empty string"  // or ''
    }
    if (str.length === 1) {
        return str
    }*/
    
    if (str.length <= 1) {
        return str
    }
    let lastChar = str[str.length - 1]
    // let remainingStr = str.slice(0,str.length)  blunder forgot -1  after str.length  // infinite recursion
    let remainingStr = str.slice(0,str.length-1)
    result = lastChar + reverseStringRecursive(remainingStr)
    return result
}

console.log(reverseStringRecursive("ABCD"))


function recursivePalindromeCheck(str){

    if (str.length <= 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }

    // str = str.replace(str[0],'').replace(str[str.length - 1],'')
    str = str.slice(1,str.length-1)
    console.log(str)
    return recursivePalindromeCheck(str)
    // return true         // I forgot return infront of recursivePalindromeCheck(str) (ForF was resulting true)

}
console.log(recursivePalindromeCheck('ForF'))
// console.log("ABCD".replace("A",'').replace("D",''))

function recursiveBinarySearch(arr, x, low=0, high=arr.length-1) {
    // console.log(low,high)
    if (low <= high) {
        let mid = Math.floor((low + high) / 2)
        // console.log(mid)

        if (arr[mid] == x) {
            return `${x} is at index ${mid}`
        }
        if (arr[mid] < x) {
            low = mid + 1
            return recursiveBinarySearch(arr, x, low, high)
        }
        else {
            high = mid - 1
            return recursiveBinarySearch(arr, x, low, high)
        }
    } else {
        return `${x} is not in the array`
    }

}

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(recursiveBinarySearch(arr,3))
// console.log(recursiveBinarySearch(arr,10,low=0,arr.length - 1))
// console.log(recursiveBinarySearch(arr,1,low=0,arr.length - 1))
// console.log(recursiveBinarySearch(arr,11))

/*
if (undefined == undefined) {
    console.log('hi')
}else{
    console.log('bye')
}
Output : bye

In JavaScript, when comparing undefined using relational operators (<=, <, >, >=), it gets implicitly converted to NaN (Not-a-Number). Any comparison involving NaN with these operators returns false.
*/

// console.log(NaN === NaN)
// console.log(undefined === undefined)

let count = 0
function countTargetRecursive(arr,x){
    if (arr.length == 0) {
        return 0
    }
    if (arr[0] == x) {
        count += 1
    }

    //return count + countTargetRecursive(arr.slice(1),x)
    // countTargetRecursive(arr,x)  // max call stack size exceeded why ??
    countTargetRecursive(arr.slice(1),x)
    return count

}

console.log(countTargetRecursive([1,1,1,3],1))

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if (node.right === null) {
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    getRoot(){
        return this.root
    }
    inOrderTraversal(node,callback){
        if (node !== null) {
            this.inOrderTraversal(node.left,callback)
            callback(node.value)
            this.inOrderTraversal(node.right,callback)

        }
    }
    depth(node){
        if (node === null) {
            return 0
        }
        return 1 + Math.max(this.depth(node.left),this.depth(node.right))
    }
}

const tree = new BinaryTree()

tree.insert(8)
tree.insert(3)
tree.insert(10)
tree.insert(1)
tree.insert(6)
tree.insert(14)
tree.insert(4)
tree.insert(7)
tree.insert(13)

// console.log(tree)
console.log("Inorder Traversal")
tree.inOrderTraversal(tree.getRoot(),(value)=>console.log(value))
console.log("Depth")
console.log(tree.depth(tree.getRoot()))







    