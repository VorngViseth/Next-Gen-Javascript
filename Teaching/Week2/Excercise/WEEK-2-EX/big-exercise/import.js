// Exercise:
// 1. Import displayStudentInfoSimulation from 'export.js'.
// 2. Create a student object with properties 'name', 'age', 'gender', and 'grade'.
// 3. Use destructuring to extract the properties from the data returned by the function.
// 4. Use template literals to print the student's information to the console.

import {displayStudentInfoSimulation} from './export.js';

const run = async () => {
    const studentData = {
        name : 'alic',
        age : 20,
        gender : 'female',
        grade : 'A'
    };

    const student = await displayStudentInfoSimulation(studentData);
    const {name, age, gender, grade} = student;

    console.log(`Student Info :
        name : ${name}
        age : ${age}
        gender : ${gender}
        grade : ${grade}
    `);
}

run();