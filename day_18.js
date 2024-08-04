/*
Day 18: Algorithms

Tasks/Activities:

Activity 1: Sorting Algorithms
Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array. 
Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

Activity 2: Searching Algorithms
Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value. 
Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

Activity 3: String Algorithms
Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

Activity 4: Array Algorithms
Task 8: Write a function to rotate an array by k positions. Log the rotated array.
Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

Activity 5: Dynamic Programming (Optional)
Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

Feature Request:
1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.
2. Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.
5. Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).

Achievement:
By the end of these activities, students will:
Implement and understand common sorting algorithms.
Implement and understand common searching algorithms.
Solve string manipulation problems using algorithms.
Perform array operations using algorithms.
Apply dynamic programming to solve complex problems (optional).
*/

function bubbleSort(array){
    let rounds = 0
    let swaps = 0
    for (let i = array.length-1; i > 0; i--) {
        let swapped = false
        for (let j = 0; j < i; j++) {
            if (array[j]>array[j+1]) {
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
                swapped = true
                swaps = swaps + 1
                
                
            }
            
        }
        rounds = rounds + 1
        if (!swapped) {
            break
        }
        
    }
    console.log('rounds :',rounds)
    console.log('swaps :',swaps)
    return array
}

// let arr = [9,8,7,6,5,4,3,2,1]
// let arr = [1,2,3,4,5,6,7,8,9]
const arr1 = [1,2,3,4,5,6,9,8,7]
const bubbleSortedArray = bubbleSort(arr1)
console.log(bubbleSortedArray)

// function fn(x) {
//     console.log(y)
// }
// fn(4)
// let y  = 5


function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minElement = array[i]
        let minIdx = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j]<minElement) {
                minElement = array[j]
                minIdx = j
            }
            
        }
        let temp = array[i]
        array[i] = minElement
        array[minIdx] = temp
        
    }
    return array
}


function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIdx = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j
            }
        }
        if (minIdx !== i) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]]      // here no problem 
        }
    }
    return array
}


const selectionSortedArray = selectionSort(arr1)
console.log(selectionSortedArray)


// quick sort using lomuto's partition

function lomutoPartition(array,low,high) {
    let i = low - 1
    const pivot = array[high]
    // (let j = 0; j < array.length; j++) fine when only using lumoto partition alone but when used with quicksort it will result in RangeError: Maximum call stack size exceeded because the if condition always remain same instead use :

    for (let j = low; j < high; j++) {                
        if (array[j] < pivot) {
            i = i + 1
            let temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
        
    }
    let temp = pivot
    array[high] = array[i+1]
    array[i+1] = temp
    return i+1

}

const arr2 = [90,60,70,10,40]
console.log(lomutoPartition(arr2,0,arr2.length-1))

function quickSort(array,low,high){
    if (low<high) {
        let partition = lomutoPartition(array,low,high)
        quickSort(array,low,partition-1)
        quickSort(array,partition+1,high)
    }
}

let arr3 = [90,30,49,100,10,20]
quickSort(arr3,0,arr3.length-1)
console.log(arr3)


function linearSearch(array,x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return `${x} is present at index ${i}`
        }
        
    }
    
    return (`${x} is not present in the array`)
    
}

console.log(linearSearch([1,2,3],4))

/*
function binarySearch(array,x,low,high) {
    if (low > high) {
        return `${x} is not present in the array`;
    }
    
    let mid = Math.floor((low+high)/2)
    
    if (array[mid]===x) {
        return `${x} is present at index ${mid}`
    }else{
        if (array[mid]<x) {
            low = mid + 1
            return binarySearch(array,x,low,high)
        }else{
            high = mid - 1
            return binarySearch(array,x,low,high)
        }
    }
}
*/


// more effecient (iterative approach)

function binarySearch(array,x,low,high) {
    
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        if (array[mid]===x) {
            return `${x} is present at index ${mid}`
        }else{
            if (array[mid]<x) {
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
    }
    return `${x} is not present in the array`
}


const arr4 = [10,20,30,40,50,60]
console.log(binarySearch(arr4,40,0,arr4.length-1))

// for looping over an object we can use for in loop or take help of static methods like Object.keys(),Object.entries()....
/*
function charactersFrequency(str){
    let count = {}
    for (let i = 0; i < str.length; i++) {
        if (count.hasOwnProperty(str[i])) {
            count[str[i]] += 1
        }
        else{count[str[i]] = 1}
        
    }

    return count
}
*/

// more effecient code

function charactersFrequency(str){
    let count = {}
    for (const char of str) {
        count[char] = (count[char] ?? 0) + 1
    }

    return count
}

let freq = charactersFrequency('Devesh Sharma')
console.log(freq)


function longestSubstringWithoutRepeatingCharacter(str){
    let charSet = new Set()
    let [low,high,maxLength] = [0,0,0]

    while (high < str.length) {
        if (!charSet.has(str[high])) {
            charSet.add(str[high])
            maxLength = Math.max(maxLength,high-low+1)
            high = high + 1
        }else{
            charSet.delete(str[low])
            low = low + 1
        }
    }
    return [maxLength,charSet]
}

console.log(longestSubstringWithoutRepeatingCharacter('devesh'))

function rotateArray(array,rotations=1) {
    //let arr = array  // redundant as it directly refrencing the array and directly modifing it
    // array === [] -->This condition will always return 'false' since JavaScript compares objects by reference, not value
    if (array.length === 0 || array.length === 1) {
        return array
    }
    rotations = rotations % array.length
    for (let j = 0; j < rotations; j++) {
        let prev = array[0]
        
        let last = array[array.length-1]
        for (let i = 0; i < array.length-1; i++) {
            let curr = array[i+1]
            array[i+1] = prev
            prev = curr
        
        }
        array[0] = last
        //console.log('rotation :',j+1)
    }
    
    return array
    
}

console.log(arr4)
console.log(rotateArray(arr4,7))
//console.log(arr4)      // original array is changing deep vs shallow copy I think verify it

function rotateArrayByReversing(array,rotations) {
    if (array.length === 0 || array.length === 1) {
        return array
    }
    rotations = rotations % array.length
    let low = 0
    let high = array.length - 1
    function reverse(left,right){
        while (left<=right) {
            [array[left], array[right]] = [array[right], array[left]]
            left++
            right--
        }
    }
    reverse(low,high)
    reverse(low,rotations-1)
    reverse(rotations,high)


    console.log(array) 
}

rotateArrayByReversing([10,20,30,40],5)


function mergeSortedArrays(array1,array2) {
    const mergedArray = []
    if (array1.length === 0) {
        return array2
    }
    if (array2.length === 0) {
        return array1
    }

    let pointer1 = 0
    let pointer2 = 0
    while (pointer1 < array1.length && pointer2 < array2.length) {
        if (array1[pointer1] === array2[pointer2]) {
            mergedArray.push(array1[pointer1])
            pointer1 ++
            pointer2 ++
        }else{
            if (array1[pointer1] < array2[pointer2]) {
                mergedArray.push(array1[pointer1])
                pointer1 ++
            }else{
                mergedArray.push(array2[pointer2])
                pointer2 ++
            }
        }
    }

    // console.log(pointer1,pointer2)
    while (pointer1 < array1.length) {                    // forgot to increment the pointers in the while loops 
        mergedArray.push(array1[pointer1])
        pointer1 ++
    }

    while (pointer2 < array2.length) {
        mergedArray.push(array2[pointer2])
        pointer2 ++
    }


    console.log(mergedArray)
}

mergeSortedArrays([10,15,20],[1,4,10,21])

// top down approach
function fibonacciUsingDPMemo(n,memo = [0,1]) {
    if (n < 0) {
        return 'Invalid Input'
    }
    if (memo[n] !== undefined) {
        return memo[n]
    }
    memo[n] = fibonacciUsingDPMemo(n-1,memo) + fibonacciUsingDPMemo(n-2,memo)
    return memo[n]
}
console.log(fibonacciUsingDPMemo(10))
// bottom up
function fibonacciUsingDPTabulation(n) {
    let fib = [0,1,1]
    if (n < 0) {
        return 'Invalid Input'
    }
    if (n === 0 || n === 1 || n === 2) {
        return fib[n]
    }
    for (let i = 3; i < n+1; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }

    return fib[n]
}
console.log(fibonacciUsingDPTabulation(10))

// in above code space complexity is O(n) we can do it in O(1)?  only use array of size of 2 and update it 

/*
Sample Knapsack Problem

Given the following items:

Item 1: Value = 60, Weight = 1
Item 2: Value = 100, Weight = 2
Item 3: Value = 120, Weight = 3

What will be the maximum value that can be carried in a knapsack with a capacity of 5 ?
*/

const profits = [60,100,120]
const weights = [1,2,3]
const capacity = 5
const n = profits.length

// const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));


const dp = []
for (let i = 0; i < n+1; i++) {
    dp.push([])
    for (let j = 0; j < capacity+1; j++) {
        dp[i].push(0)
    }
    
}

//console.log(dp)
console.table(dp)

for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity ; w++) {
        // why [i-1] --> When i = 1, we are considering the first item. This corresponds to weights[0] and values[0].
        // When i = 2, we are considering the first two items. The second item corresponds to weights[1] and values[1] and so on ..
        if (weights[i - 1] <= w) {
            dp[i][w] = Math.max(dp[i - 1][w], profits[i - 1] + dp[i - 1][w - weights[i - 1]]);
        } else {
            dp[i][w] = dp[i - 1][w];
        }
        console.table(dp)
    }
}

