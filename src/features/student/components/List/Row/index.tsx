import Dropdown from '../../../../../components/Dropdown';
import SubmitField from '../../../../../components/SubmitField';

import makeStudentGradeAverageString from '../../../utils/makeStudentGradeAverageString';
import makeStudentName from '../../../utils/makeStudentName';

import { Student } from '../../../types';

import styles from './index.module.scss';

const StudentRow = ({
  student,
  onSubmit
}: {
  student: Student;
  onSubmit: (tag: string) => void;
}) => (
  <div className={styles.container}>
    <div className={styles.aside}>
      <div className={styles.avatar}>
        <img src={student.pic} className={styles.img} />
      </div>
    </div>
    <Dropdown
      className={styles.dropdown}
      title={makeStudentName(student)}
      header={(<>
        <div>Email: {student.email}</div>
        <div>Company: {student.company}</div>
        <div>Skill: {student.skill}</div>
        <div>Average: {makeStudentGradeAverageString(student)}</div>
      </>)}
      footer={(<>
        <div className={styles.tags}>
          {student.tags?.map((tag,i) => (
            <div key={i} className={styles.tag}>{tag}</div>
          ))}
        </div>
        <SubmitField onEnter={onSubmit} placeholder="Add a tag" />
      </>)}>
      {student.grades?.map((grade,i) => (
        <div className={styles.testScore} key={i}><span>Test {i+1}:</span><span>{grade}%</span></div>
      ))}
    </Dropdown>
  </div>
)

export default StudentRow;
