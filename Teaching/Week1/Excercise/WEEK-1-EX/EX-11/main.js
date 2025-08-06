// EXERCISE 11: Create an object representing a student with properties like name, age, and major. Print each property

// Your code here:
let student = {
    fullName : "Vorng Viseth",
    age : 18,
    major : "CS"
};

for(let i in student) console.log(`${i} : ${student[i]}`);