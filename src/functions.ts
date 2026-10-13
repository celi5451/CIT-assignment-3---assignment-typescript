// Part B - higher-order functions and closures
//
// Each of these either takes a function, returns one, or both.

import { Student } from './data.js';

/** A test on a student. Used by everything below. */
export type Test = (student: Student) => boolean;   // a function that takes a student and returns a boolean

// --- B1. The opposite test ------------------------------------------------

/**
 * Takes a test and returns the opposite test:
 *
 *     const inCs = (s: Student) => s.deptName === 'Comp. Sci.';
 *     students.filter(not(inCs));      // everyone else
 *
 * One line is enough, once you see what has to be returned.
 */
export function not(test: Test): Test {   
  return (student) => !test(student);   // return a new function that takes a student and returns the opposite of the test
}

// --- B2. One pass, two answers -------------------------------------------

/**
 * Splits a list in two by a test, in one pass: those that pass first, those
 * that fail second.
 *
 *     const [passing, failing] = partition(students, s => s.totCred >= 60);
 *
 * The return type is a tuple, so the two arrays cannot be mixed up, and the
 * caller can take them apart by position.
 */
export function partition(list: Student[], test: Test): [Student[], Student[]] {
  const passing: Student[] = [];    // an array to hold the students that pass the test
  const failing: Student[] = [];    // an array to hold the students that fail the test

  for (const student of list) {     // loop over the list of students
    if (test(student)) {            // if the student passes the test
      passing.push(student);        // add the student to the passing array
    } else {                        // if the student fails the test
      failing.push(student);        // add the student to the failing array
    }
  }

  return [passing, failing];        // return a tuple of the passing and failing arrays
}

// --- B3. Do it once -------------------------------------------------------

/**
 * The parameter is a calculation: a function that takes no arguments and
 * returns a number. Takes such a function and returns a new one that runs
 * it the first time it is called and never again. Every later call hands
 * back the number from the first call, without calculating it again:
 *
 *     let calls = 0;
 *     const count = once(() => { calls++; return students.length; });
 *     count();   // 13, calls is now 1
 *     count();   // 13, calls is still 1
 *
 * Be ready to say where the saved number lives after once has returned.
 */
export function once(calculation: () => number): () => number {
  // TODO
  throw new Error('not implemented');
}

// --- B4. All of them ------------------------------------------------------

/**
 * Combines any number of tests into one test that passes only when all of
 * them do:
 *
 *     const senior = allOf(inDepartment('Comp. Sci.'), atLeast(60));
 *
 * The three dots in a parameter list gather the arguments into an array.
 * With no tests at all, everything passes: there is nothing to fail.
 */
export function allOf(...tests: Test[]): Test {
  // TODO
  throw new Error('not implemented');
}

// Two small helpers to build tests with, given to you.
export const inDepartment = (deptName: string): Test =>
  (student: Student) => student.deptName === deptName;

export const atLeast = (credits: number): Test =>
  (student: Student) => student.totCred >= credits;
