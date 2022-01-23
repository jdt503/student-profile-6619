import { ChangeEvent } from 'react';

import { Student, StudentFilterParams } from '../../../types';

import styles from './index.module.scss';

const StudentFilters = ({
  filters,
  onFilterChange
}: {
  filters: StudentFilterParams;
  onFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className={styles.container}>
    <input
      className={styles.input}
      name="name"
      placeholder="Search by name"
      value={filters.name}
      onChange={onFilterChange} />
    <input
      className={styles.input}
      name="tag"
      placeholder="Search by tag"
      value={filters.tag}
      onChange={onFilterChange} />
  </div>
)

export default StudentFilters;
