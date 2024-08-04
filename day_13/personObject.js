const person = {
    name: "John Doe",
    age: 21,
    gender: "Male",
    info(){
        console.log("......................")
        console.log("Name :",this.name)
        console.log("Age :",this.age)
        console.log("Gender :",this.gender)
        console.log("......................")
    }
}

export { person }