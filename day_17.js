/*
Day 17: Data Structures

Tasks/Activities:

Activity 1: Linked List
Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

Activity 2: Stack
Task 3: Implement a stack class with methods push (add element), pop (remove element), and peek (view the top element).
Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.

Activity 3: Queue
Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

Activity 4: Binary Tree
Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
Task 8: Implement a BinaryTree class with method for inserting values and performing in-order traversal to display nodes.

Activity 5: Graph (Optional)
Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

Feature Request:
1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
2. Stack Script: Create a script that implements a stack and uses it to reverse a string.
3. Queue Script: Write a script that implements a queue and simulates a printer queue.
4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
5. Graph Script: Write a script that Implements a graph and performs breadth-first search (optional).

Achievement:
By the end of these activities, students will:
Implement and use linked lists for dynamic data storage.
Use stacks for LIFO (Last-In-First-Out) operations and reverse data.
Use queues for FIFO (First-In-First-Out) operations and simulate real-world scenarios.
Implement binary trees for hierarchical data storage and traversal.
Understand and use graphs for network representations and pathfinding (optional).
*/

// can you implement both binary tree and linked list with same class node

class LinkedListNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    insertAtEnd(value){
        if (this.head === null) {
            this.head = new LinkedListNode(value)
            return 
        }
        let curr = this.head
        while (curr.next !== null) {
            curr = curr.next
        }
        curr.next = new LinkedListNode(value)
        
    }
    removeFromEnd(){
        if (this.head === null) {
            console.log("Empty Linked list...")
            return
        }
        if (this.head.next === null) {
            this.head = null
            return
        }
        let curr = this.head
        while (curr.next.next !== null){
            curr = curr.next
        }
        curr.next = null
        
    }
    display(){
        if (this.head === null) {
            console.log("Empty Linked list...")
            return
        }
        let curr = this.head
        let list = ''
        while (curr !== null) {
            list = list + curr.value + ' ---> '
            curr = curr.next
        }
        list = list + 'null'
        console.log(list)

    }
    
    
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(5)
linkedList.insertAtEnd(8)
linkedList.insertAtEnd(6)
linkedList.display()
linkedList.removeFromEnd()
linkedList.display()
linkedList.removeFromEnd()
linkedList.display()
linkedList.removeFromEnd()
linkedList.display()
linkedList.removeFromEnd()



// try to implement stack and queue in c++ or more raw in javascript
class Stack{
    // static top = -1 // Big mistake 
    constructor(){
        this.array = []
        this.top = -1
    }
    push(value){
        this.array.push(value)
        this.top += 1
        console.log(`Added ${value} to the stack`)
    }
    pop(){
        if (this.top === -1) {
            console.log("Empty Stack !")
            return
        }
        let poppedElement = this.array.pop()
        console.log(`Popped ${poppedElement} from stack..`)
        this.top -= 1
        return poppedElement
        
    }
    peek(){
        if (this.top === -1) {
            console.log("Empty Stack !")
            return
        }
        console.log(`Top : ${this.top} Element : ${this.array[this.top]}`)
        
    }
}

const stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(15)
stack.pop()
stack.peek()

function reverseString(str){
    let str_stack = new Stack()
    let rev = ''
    for (let i = 0; i < str.length; i++) {
        str_stack.push(str[i])
        
    }
    for (let i = 0; i < str.length; i++) {
        rev = rev + str_stack.pop()
        
    }
    return rev
}

console.log(reverseString('abc'))

class Queue{
    constructor(initialArray=[]){
        this.array = initialArray
    }
    enqueue(value){
        this.array.push(value)
        console.log(value,'added to the queue')
    }
    dequeue(){
        if (this.array.length === 0) {
            console.log("Empty queue")
            return
        }
        let removedElement = this.array.shift()
        console.log(removedElement,'removed from the queue')
        return removedElement
    }
    front(){
        if (this.array.length === 0) {
            console.log("Empty queue")
            return
        }
        console.log("Front element of the queue :",this.array[0])
    }
}



const queue = new Queue()
queue.enqueue(5)
queue.enqueue(3)
queue.enqueue(8)
queue.front()
queue.dequeue()
queue.front()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.front()

const printQueue = new Queue()
printQueue.enqueue("Task 1")
printQueue.enqueue("Task 3")
printQueue.enqueue("Task 2")
printQueue.enqueue("Task 5")
printQueue.enqueue("Task 4")
console.log(printQueue.dequeue(),'done')
console.log(printQueue.dequeue(),'done')
console.log(printQueue.dequeue(),'done')
console.log(printQueue.dequeue(),'done')
console.log(printQueue.dequeue(),'done')


// Understand below code and error's causes as well
class TreeNode{
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
        const newNode = new TreeNode(value)
        if (this.root === null) {
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
        return newNode
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
            } else {
                this.insertNode(node.right,newNode)
            }
        }
    }
    getRoot(){
        return this.root
    }
    inOrderTraversal(node){
        if (node !== null) {
            this.inOrderTraversal(node.left)
            console.log(node.value)
            this.inOrderTraversal(node.right)
        }
    }

}

const binaryTree = new BinaryTree()
const rootNode = binaryTree.insert(5)

/*
Wrong approch and logic 
Issue with the insertion of initial node.Directly inserting a TreeNode object instead of a value. The insert method is designed to accept a value, not a TreeNode.

const rootNode = new TreeNode(5)
binaryTree.insert(rootNode)
binaryTree.insert(4)
binaryTree.insert(6)
console.log(binaryTree.getRoot)
binaryTree.inOrderTraversal(binaryTree.getRoot())
*/

console.log(rootNode)
let newNode = new TreeNode(4)
binaryTree.insertNode(rootNode,newNode)
newNode = new TreeNode(6)
binaryTree.insertNode(rootNode,newNode)
console.log(binaryTree.getRoot())
binaryTree.inOrderTraversal(rootNode)

// use bracket notation to dynamically access object properties **
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if (!(Object.keys(this.adjacencyList).includes(vertex))) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(vertex1,vertex2,directed = false){
        if (!(Object.keys(this.adjacencyList).includes(vertex1))) {
            this.adjacencyList[vertex1] = []
        }
        if (!(Object.keys(this.adjacencyList).includes(vertex2))) {
            this.adjacencyList[vertex2] = []
        }
        this.adjacencyList[vertex1].push(vertex2)
        if (!directed) {
            this.adjacencyList[vertex2].push(vertex1)
        }   
    }
    bfs(origin){ 
        let order = []
        // const bfsQueue = new Queue(this.adjacencyList[origin]) // incorrect approach
        const bfsQueue = new Queue([origin])
        let visited = new Set()
        visited.add(origin)

        while (bfsQueue.array.length !== 0) {
            let vertex = bfsQueue.dequeue()
            order.push(vertex)

            for (const adjacentVertex of this.adjacencyList[vertex]) {
                
                if (!visited.has(adjacentVertex)) {
                    visited.add(adjacentVertex)
                    bfsQueue.enqueue(adjacentVertex)
                }
            }
        }
        return order
    }
    
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'C')
console.log(graph.bfs('A'))
