// 3. Group Users by Role
// Problem Statement
// You are given a list of users with roles.
// Write a function that groups users by their role.

// input
const users = [
  { name: "Anil", role: "Admin" },
  { name: "Sunil", role: "User" },
  { name: "Rita", role: "Admin" },
  { name: "Karan", role: "User" },
  { name: "Pooja", role: "Manager" }
];

// declare object to store user role-wise array
const role_wise_users={};

//iterate for each user and push name in respective array in object role_wise_users
users.forEach((user)=>{
    role_wise_users[user.role]=
    role_wise_users[user.role]
    ?role_wise_users[user.role].concat(user.name)
    :[user.name];
})

//print output
console.log(JSON.stringify(role_wise_users) );
