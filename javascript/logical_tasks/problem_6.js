// 6. Array Flattening (Nested Arrays)
// Problem Statement
// You are given a nested array containing numbers at different depths.
// Write a function to flatten the array into a single array.

// input
const arr = [1, [2, [3, 4], 5], [6, 7 ,[10,11]], 8];

// declare new array to store separated element
const element_arr=[];

//function call on arr
separate_element(arr);

function separate_element(element){
    if(element instanceof Array){
        element.forEach((value)=>{
            separate_element(value);
        })
    }else{
        element_arr.push(element);
    }
}

// print output
console.log(element_arr);