// EXERCISE 15: Create multiple student objects and store them in an array called students. Use a combination of for...of and for...in to print each student's details

// Your code here:
let david = {
    name : "david",
    age : 18,
    major : "Cyber Security",
};

let viseth = {
    name : "viseth",
    age : 18,
    major : "Cyber Security",
};

let bunnak = {
    name : "bunnak",
    age : 18,
    major : "TN",
};

let students = [david, viseth, bunnak];

for(let student of students){
    for(let i in student) console.log(`${i} : ${student[i]}`)
    console.log('--------------');
}