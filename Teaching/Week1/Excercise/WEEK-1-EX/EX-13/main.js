// EXERCISE 13: Create an array of numbers and use forEach to multiply each number by 2 and print it

// Your code here:
let num = [1, 2, 3, 4, 5, 6, 7, 8];

num.forEach((value, i) => {
    num[i] = value * 2;
    console.log(num[i]);
});