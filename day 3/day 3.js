function returnArray(array){ //gets input of array
    let arr = [] //initializing first array
    for (num of array){ //loops through each value of the array
        let newArray = []; // creates sub array
        for (i = 1; i <= num; i++){ //loops through from 1 to each value of array
            if (i % 3 === 0 && i % 5 === 0){ // checks if the value of i is divisible by 3 and 5
        newArray.push('FizzBuzz') // this pushes FizzBuzz into newArray in place of the number if it is
            }
            else if (i % 3 === 0){ // checks if the value of i is divisible by 3
        newArray.push('Fizz') // this pushes 'Fizz' into newArray in place of the number if it is
            }
            else if (i % 5 === 0){ // checks if the value of i is divisible by 5
        newArray.push('Buzz') // this pushes 'Buzz' into newArray in place of the number if it is.
        
            }
            else{
        newArray.push(i) // pushes the values of i into newArray    
            }
        }
        arr.push(newArray); // pushes the newArray into an array called arr before newArray becomes empty for a new loop
        
    }
    return arr; // returns the array 'arr' after it has stored all the iterations of newArray
}
let result = returnArray ([4,6,10]) // assigns the function that contains an array with values to a variable 'result'
console.log(result); // prints the variable 'result'