function addittion(num1,num2){
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid inputs")
    }else{
        console.log(`${num1} + ${num2} = ${num1+num2}`)
    }
}
export default  addittion

