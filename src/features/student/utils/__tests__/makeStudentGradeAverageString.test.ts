import makeStudentGradeAverageString from '../makeStudentGradeAverageString';

const testStudentWithGrades = {"city":"Fush\u00eb-Muhurr","company":"Yadel","email":"iorton0@imdb.com","firstName":"Ingaberg","grades":["78","100","92","86","89","88","91","87"],"id":"1","lastName":"Orton","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg","skill":"Oracle"}
const testStudentWithNoGrades = {grades: []}

test('should return the correct percentage string if the student has grades', () => {
  expect(makeStudentGradeAverageString(testStudentWithGrades)).toBe("88.875%")
});

test('should return N/A if the student has no grades', () => {
  expect(makeStudentGradeAverageString(testStudentWithNoGrades)).toBe("N/A")
});
