// Part A - arrays and types
//
// Fill in each TODO. Do not change the signatures: the parameter types and
// the return types are part of the task.
//
//     npm run build
//     npm start

import { Student, Enrolment, students, courses, enrolments } from './data.js';

// --- A1. The grade report -------------------------------------------------

/**
 * One line per enrolment of a student, in the order the enrolments appear:
 *
 *     CS-101 Intro. to Computer Science: 12
 *     BIO-301 Genetics: not awarded
 *
 * A grade of null is "not awarded". The lines are joined with a newline, and
 * a student with no enrolments gives an empty string.
 *
 * You need enrolments and courses. filter, map, find, a template literal and
 * join. No for loops in this file.
 */
export function gradeReport(studentId: string): string {    
  return enrolments  
    .filter((enrolment) => enrolment.studentId === studentId)   // filter the enrolments for the given studentId
    .map((enrolment) => {     // map each enrolment to a string
      const course = courses.find((course) => course.courseId === enrolment.courseId);    // find the course for the enrolment
      const grade = enrolment.grade !== null ? enrolment.grade : 'not awarded';           // if the grade is null, return 'not awarded', otherwise return the grade
      return `${course?.courseId} ${course?.title}: ${grade}`;    // return the string with the courseId, title and grade
    })
    .join('\n');    // join the strings with a newline
}

// --- A2. Averaging --------------------------------------------------------

/**
 * The average of a student's awarded grades, on the Danish 7-point scale
 * (12, 10, 7, 4, 02, 00, -3), rounded to one decimal.
 *
 * Grades are stored as strings, so '02' and '00' keep their leading zero.
 * Enrolments with no grade yet do not count. A student with no awarded
 * grades gives 0: divide only when there is something to divide by.
 *
 *     averageGrade('00128')   // 11  (12 and 10)
 */
export function averageGrade(studentId: string): number {
  const grades = enrolments
    .filter(enrolment => enrolment.studentId === studentId && enrolment.grade !== null)
    .map(enrolment => Number(enrolment.grade));

  if (grades.length === 0) return 0;

  const sum = grades.reduce((total, grade) => total + grade, 0);
  return Math.round((sum / grades.length) * 10) / 10;
}

// --- A3. Who is missing a grade ------------------------------------------

/**
 * The names of the students who have at least one enrolment without a grade,
 * sorted alphabetically and without repeats.
 */
export function awaitingGrades(): string[] {
  return students   //returns an array of students
    .filter(student => enrolments.some(enrolment => enrolment.studentId === student.id && enrolment.grade === null))    // filters the students who have at least one enrolment without a grade. some checks if there is at least one enrolment for the student with a null grade
    .map(student => student.name)   // maps the students to their names
    .sort();    // sorts the names alphabetically
}

// --- A4. A family of formatters ------------------------------------------

/**
 * Returns a function that formats a student in the chosen style:
 *
 *     formatterFor('short')(student)   // 'Zhang'
 *     formatterFor('long')(student)    // 'Zhang (Comp. Sci.), 102 credits'
 *
 * The style may only be one of two strings. Try passing 'medium' and read
 * the error the compiler gives you.
 */

type Style = 'short' | 'long';

export function formatterFor(style: Style): (student: Student) => string {
    if (style === 'short') {
      return student => student.name;
    }
    else if (style === 'long') {
      return student => `${student.name} (${student.deptName}), ${student.totCred} credits`;
    }
    else {
      throw new Error(`Unknown style: ${style}`);
    }
}

// --- A5. Changing nothing -------------------------------------------------

/**
 * A new array in which the students of one department have extra credits.
 * Everyone else is unchanged, and the students array itself must not change
 * at all: build new objects with the three dots.
 */
export function raiseCredits(list: Student[], deptName: string, extra: number): Student[] {
  // TODO
  throw new Error('not implemented');
}
