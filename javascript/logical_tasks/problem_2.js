// 2. Find Second Highest Salary
// Problem Statement
// Given an array of employee objects, write a function that returns the second highest salary.

//input
const employees = [
  { name: "Rahul", salary: 50000 },
  { name: "Amit", salary: 70000 },
  { name: "Neha", salary: 65000 },
  { name: "Priya", salary: 80000 },
  { name: "Vikram", salary: 70000 }
];

//declare variables for storing highest and second highest
let highest_salary=0;
let second_highest_salary=0;

//iterate for each object in array
employees.forEach((employee)=>{
    if(employee.salary>highest_salary){
        //if current salary is greater than current highest 
        second_highest_salary=highest_salary;
        highest_salary=employee.salary;     
    }else if(employee.salary>second_highest_salary && employee.salary<highest_salary){
        //if current salary is less than current highest and greater than second highest
        second_highest_salary=employee.salary;
    }
})

//print output
console.log(second_highest_salary);


