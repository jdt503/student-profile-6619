import makeStudentName from '../makeStudentName';

const testStudent = {"city":"Fush\u00eb-Muhurr","company":"Yadel","email":"iorton0@imdb.com","firstName":"Ingaberg","grades":["78","100","92","86","89","88","91","87"],"id":"1","lastName":"Orton","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg","skill":"Oracle"}

test('should return the students full name', () => {
  expect(makeStudentName(testStudent)).toBe("Ingaberg Orton")
});
