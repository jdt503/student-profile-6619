import { Student } from '../types';

export default function makeStudentGradeAverageString(
  student: Student
){
  if(student.grades.length === 0){
    return "N/A";
  };

  const sum = student.grades.map(grade => Number(grade)).reduce((a, b) => a + b)

  return `${sum / student.grades.length}%`
}
