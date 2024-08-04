function subtraction(num1,num2){
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid Input")
    }else{
        console.log(`${num1} - ${num2} = ${num1-num2}`)
    }
}

function multiply(num1,num2){
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid Input")
    }else{
        console.log(`${num1} * ${num2} = ${num1*num2}`)
    }
}

export { subtraction, multiply }