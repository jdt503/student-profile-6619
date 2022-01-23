import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useStudentFilters } from '../useStudents';

const testStudents = [{id: 1, firstName: "Jake", lastName: "Thornton"},{id: 2, firstName: "Berti", lastName: "Skitt",tags: ['fail']},{id: 3, firstName: "Mureil", lastName: "Summerley", tags: ['pass']},{id: 4, firstName: "Stephanie", lastName: "Rapelli"},{id: 5, firstName: "Rory", lastName: "Iban"},{id: 6, firstName: "Moses", lastName: "Swaiter"}]

const TestUseStudentFilters = () => {
  const {
    filteredStudents,
    filters,
    onFilterChange
  } = useStudentFilters(testStudents)

  return(
    <div>
      <input role="nameFilter" name="name" value={filters.name} onChange={onFilterChange} />
      <input role="tagFilter" name="tag" value={filters.tag} onChange={onFilterChange} />
      <ul role="students">
        {filteredStudents.map(student => (
          <li key={student.id}>{student.id}</li>
        ))}
      </ul>
    </div>
  )
}

test('should only show students with names that match the name filter', async () => {
  await render(<TestUseStudentFilters />);
  userEvent.type(screen.getByRole('nameFilter'), 'er')
  expect(screen.getByRole('students').children.length).toBe(3);
})

test('should only show students with tags that match the tag filter', async () => {
  await render(<TestUseStudentFilters />);
  userEvent.type(screen.getByRole('tagFilter'), 'pass')
  expect(screen.getByRole('students').children.length).toBe(1);
})

test('should only show students with names that match both the name and tag filter', async () => {
  await render(<TestUseStudentFilters />);
  userEvent.type(screen.getByRole('tagFilter'), 'pass')
  userEvent.type(screen.getByRole('nameFilter'), 'er')
  expect(screen.getByRole('students').children.length).toBe(1);
})

test('should be case insensitive', async () => {
  await render(<TestUseStudentFilters />);
  const input = screen.getByRole('nameFilter')

  userEvent.type(input, 'jake')
  expect(screen.getByRole('students').children.length).toBe(1);

  input.setSelectionRange(0,4)

  userEvent.type(input, 'JAKE')
  expect(screen.getByRole('students').children.length).toBe(1);
});
