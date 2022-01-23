import { axios } from '../../../lib/axios';

import { StudentResponseData } from '../types';

export default function getStudents(): Promise<StudentResponseData> {
  return axios.get("/students").then(res => res.data);
};
