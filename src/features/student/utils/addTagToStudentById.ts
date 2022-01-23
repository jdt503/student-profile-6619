import { TStudentList } from '../types';

const addTagToStudentById = (
  students: TStudentList,
  id: string,
  tag: string
) => students.map(student => (
  student.id === id
    ? ({
        ...student,
        tags: student.tags
          ? [...student.tags,tag]
          : [tag]
      })
    : student
))


export default addTagToStudentById;
