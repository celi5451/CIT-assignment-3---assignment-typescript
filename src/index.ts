// Run your work with:  npm run build   then   npm start
//
// Uncomment each block as you finish it. The expected result is beside each
// line, so you can see for yourselves whether it is right.

import { students } from './data.js';
import { gradeReport, averageGrade, awaitingGrades, formatterFor, raiseCredits } from './arrays.js';
import { not, partition, once, allOf, inDepartment, atLeast } from './functions.js';

console.log(students.length + ' students');

// --- Part A ---
console.log(gradeReport('00128'));
//   CS-101 Intro. to Computer Science: 12
//   CS-347 Database System Concepts: 10
console.log(gradeReport('98988'));
//   BIO-101 Intro. to Biology: 12
//   BIO-301 Genetics: not awarded
// console.log(gradeReport('70557'));              // '' (no enrolments)
// console.log(averageGrade('00128'));             // 11
// console.log(averageGrade('98988'));             // 12  (the null does not count)
// console.log(averageGrade('70557'));             // 0
// console.log(awaitingGrades());                  // [ 'Tanaka' ]
// console.log(formatterFor('short')(students[0])); // Zhang
// console.log(formatterFor('long')(students[0]));  // Zhang (Comp. Sci.), 102 credits
// const raised = raiseCredits(students, 'Physics', 10);
// console.log(raised[4].totCred);                 // 66  (Peltier, was 56)
// console.log(students[4].totCred);               // 56  (unchanged)
// console.log(raised[0].totCred);                 // 102 (Zhang, not Physics)

// --- Part B ---
// const inCs = inDepartment('Comp. Sci.');
// console.log(students.filter(inCs).length);       // 4
// console.log(students.filter(not(inCs)).length);  // 9
// const [upper, lower] = partition(students, atLeast(60));
// console.log(upper.length, lower.length);         // 6 7
// calls is not part of the task: it only proves the calculation ran once.
// The first two numbers are the answer handed back twice, the last is how
// many times the calculation actually ran.
// let calls = 0;
// const count = once(() => { calls++; return students.length; });
// console.log(count(), count(), calls);            // 13 13 1
// console.log(students.filter(allOf(inCs, atLeast(60))).length);   // 1
// console.log(students.filter(allOf()).length);    // 13
