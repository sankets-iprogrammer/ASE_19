// 4. Find Missing Number in Sequence
// Problem Statement
// Given an array of numbers from 1 to N, one number is missing.
// Write a function to find the missing number.

//input
const numbers = [1,2,3,4,6,7,8,9,11];


for(let i=0 ;i<numbers.length-1;i++){
    if(numbers[i+1]-numbers[i]!=1){
        console.log(numbers[i]+1);
    }
}
