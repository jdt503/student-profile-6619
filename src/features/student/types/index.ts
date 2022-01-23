export type Student = {
  id: string;
  city: string;
  company: string;
  email: string;
  firstName: string;
  lastName: string;
  grades: string[];
  pic: string;
  skill: string;
  tags?: string[];
}

export type TStudentList = Student[]

export type StudentResponseData = {
  students: TStudentList;
}

export type StudentFilterParams = {
  name: string;
  tag: string;
}
