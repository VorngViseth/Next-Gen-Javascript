// EXERCISE 12: Write a for...in loop to iterate over the student object you created above

// Your code here:
let student = {
    fullName : "Vorng Viseth",
    age : 18,
    major : "CS"
};

for(let i in student) console.log(`${i} : ${student[i]}`);