import { Student } from '../types';

const makeStudentName = (
  student: Student
) => `${student.firstName} ${student.lastName}`

export default makeStudentName;
