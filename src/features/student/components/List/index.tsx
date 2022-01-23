import StudentRow from './Row';
import StudentFilters from './Filters';

import useStudents from '../../hooks/useStudents';

import { Student } from '../../types';

import styles from './index.module.scss';

export default function StudentList(){
  const {
    filteredStudents,
    status,
    addTagToStudent,
    filters,
    onFilterChange
  } = useStudents();

  return (<>
    <StudentFilters
      filters={filters}
      onFilterChange={onFilterChange} />
    <div className={styles.list}>
      {status === "success" && filteredStudents.map((student: Student) => (
        <StudentRow
          key={student.id}
          student={student}
          onSubmit={(tag) => addTagToStudent(student.id,tag)} />
      ))}
    </div>
  </>);
}
