// Data for the exercises.
//
// These are ordinary objects held in memory. From Unit 4 onwards the same
// shapes will be filled from a PostgreSQL database instead, but the
// interfaces will not change.

export interface Student {
  id: string;
  name: string;
  deptName: string;
  totCred: number;
}

export interface Course {
  courseId: string;
  title: string;
  deptName: string;
  credits: number;
}

// The grade is the Danish 7-point scale: 12, 10, 7, 4, 02, 00, -3.
// It is a string, not a number: 02 and 00 would lose their leading zero,
// and null means the grade has not been awarded yet.
export interface Enrolment {
  studentId: string;
  courseId: string;
  semester: string;
  year: number;
  grade: string | null;
}

export const students: Student[] = [
  { id: '00128', name: 'Zhang', deptName: 'Comp. Sci.', totCred: 102 },
  { id: '12345', name: 'Shankar', deptName: 'Comp. Sci.', totCred: 32 },
  { id: '19991', name: 'Brandt', deptName: 'History', totCred: 80 },
  { id: '23121', name: 'Chavez', deptName: 'Finance', totCred: 110 },
  { id: '44553', name: 'Peltier', deptName: 'Physics', totCred: 56 },
  { id: '45678', name: 'Levy', deptName: 'Physics', totCred: 46 },
  { id: '54321', name: 'Williams', deptName: 'Comp. Sci.', totCred: 54 },
  { id: '55739', name: 'Sanchez', deptName: 'Music', totCred: 38 },
  { id: '70557', name: 'Snow', deptName: 'Physics', totCred: 0 },
  { id: '76543', name: 'Brown', deptName: 'Comp. Sci.', totCred: 58 },
  { id: '76653', name: 'Aoi', deptName: 'Elec. Eng.', totCred: 60 },
  { id: '98765', name: 'Bourikas', deptName: 'Elec. Eng.', totCred: 98 },
  { id: '98988', name: 'Tanaka', deptName: 'Biology', totCred: 120 },
];

export const courses: Course[] = [
  { courseId: 'BIO-101', title: 'Intro. to Biology', deptName: 'Biology', credits: 4 },
  { courseId: 'BIO-301', title: 'Genetics', deptName: 'Biology', credits: 4 },
  { courseId: 'CS-101', title: 'Intro. to Computer Science', deptName: 'Comp. Sci.', credits: 4 },
  { courseId: 'CS-190', title: 'Game Design', deptName: 'Comp. Sci.', credits: 4 },
  { courseId: 'CS-315', title: 'Robotics', deptName: 'Comp. Sci.', credits: 3 },
  { courseId: 'CS-319', title: 'Image Processing', deptName: 'Comp. Sci.', credits: 3 },
  { courseId: 'CS-347', title: 'Database System Concepts', deptName: 'Comp. Sci.', credits: 3 },
  { courseId: 'EE-181', title: 'Intro. to Digital Systems', deptName: 'Elec. Eng.', credits: 3 },
  { courseId: 'FIN-201', title: 'Investment Banking', deptName: 'Finance', credits: 3 },
  { courseId: 'HIS-351', title: 'World History', deptName: 'History', credits: 3 },
  { courseId: 'MU-199', title: 'Music Video Production', deptName: 'Music', credits: 3 },
  { courseId: 'PHY-101', title: 'Physical Principles', deptName: 'Physics', credits: 4 },
];

export const enrolments: Enrolment[] = [
  { studentId: '00128', courseId: 'CS-101', semester: 'Fall', year: 2017, grade: '12' },
  { studentId: '00128', courseId: 'CS-347', semester: 'Fall', year: 2017, grade: '10' },
  { studentId: '12345', courseId: 'CS-101', semester: 'Fall', year: 2017, grade: '4' },
  { studentId: '12345', courseId: 'CS-190', semester: 'Spring', year: 2017, grade: '12' },
  { studentId: '12345', courseId: 'CS-315', semester: 'Spring', year: 2018, grade: '12' },
  { studentId: '12345', courseId: 'CS-347', semester: 'Fall', year: 2017, grade: '12' },
  { studentId: '19991', courseId: 'HIS-351', semester: 'Spring', year: 2018, grade: '7' },
  { studentId: '23121', courseId: 'FIN-201', semester: 'Spring', year: 2018, grade: '4' },
  { studentId: '44553', courseId: 'PHY-101', semester: 'Fall', year: 2017, grade: '7' },
  { studentId: '45678', courseId: 'CS-101', semester: 'Fall', year: 2017, grade: '00' },
  { studentId: '45678', courseId: 'CS-101', semester: 'Spring', year: 2018, grade: '10' },
  { studentId: '45678', courseId: 'CS-319', semester: 'Spring', year: 2018, grade: '7' },
  { studentId: '54321', courseId: 'CS-101', semester: 'Fall', year: 2017, grade: '10' },
  { studentId: '54321', courseId: 'CS-190', semester: 'Spring', year: 2017, grade: '10' },
  { studentId: '55739', courseId: 'MU-199', semester: 'Spring', year: 2018, grade: '10' },
  { studentId: '76543', courseId: 'CS-101', semester: 'Fall', year: 2017, grade: '12' },
  { studentId: '76543', courseId: 'CS-319', semester: 'Spring', year: 2018, grade: '12' },
  { studentId: '76653', courseId: 'EE-181', semester: 'Spring', year: 2017, grade: '4' },
  { studentId: '98765', courseId: 'CS-101', semester: 'Fall', year: 2017, grade: '02' },
  { studentId: '98765', courseId: 'CS-315', semester: 'Spring', year: 2018, grade: '7' },
  { studentId: '98988', courseId: 'BIO-101', semester: 'Summer', year: 2017, grade: '12' },
  { studentId: '98988', courseId: 'BIO-301', semester: 'Summer', year: 2018, grade: null },
];
