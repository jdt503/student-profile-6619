import { useState, useEffect, ChangeEvent } from 'react';

import getStudents from '../api/getStudents';

import addTagToStudentById from '../utils/addTagToStudentById';

import { TStudentList } from '../types';

export function useStudentQuery() {
  const [ students, setStudents ] = useState<TStudentList>([]);
  const [ status, setStatus ] = useState("loading");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setStatus("loading");
        const res = await getStudents();
        setStudents(res.students)
        setStatus("success");
      } catch (e) {
        setStatus("error");
      }
    }
    makeRequest();
  }, []);

  return {
    students,
    status,
    addTagToStudent: (studentId: string, tag: string) => setStudents(prevStudents => addTagToStudentById(prevStudents,studentId,tag))
  }
};

export function useStudentFilters(
  students: TStudentList
){
  const [ filters, setFilters ] = useState({
    name: "",
    tag: ""
  });

  const lowerCaseNameFilter = filters.name.toLowerCase();
  const lowerCaseTagFilter = filters.tag.toLowerCase();

  const filteredStudents = students.filter(student => (
    // passes name filter
    (!filters.name || `${student.firstName} ${student.lastName}`.toLowerCase().includes(lowerCaseNameFilter))
    // passes tag filter
    && (!filters.tag || (student.tags && student.tags.find(tag => tag.toLowerCase().includes(lowerCaseTagFilter))))
  ))

  return {
    filteredStudents,
    filters,
    onFilterChange: (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setFilters(prevFilters => ({
        ...prevFilters,
        [e.target.name]: value
      }))
    }
  }
};

export default function useStudents(){

  const {
    students,
    status,
    addTagToStudent
  } = useStudentQuery();

  const {
    filteredStudents,
    filters,
    onFilterChange
  } = useStudentFilters(students);

  return {
    students,
    filteredStudents,
    status,
    addTagToStudent,
    filters,
    onFilterChange
  }
};
