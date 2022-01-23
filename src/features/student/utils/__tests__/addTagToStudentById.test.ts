import addTagToStudentById from '../addTagToStudentById';

const testStudents = [{"city":"Fush\u00eb-Muhurr","company":"Yadel","email":"iorton0@imdb.com","firstName":"Ingaberg","grades":["78","100","92","86","89","88","91","87"],"id":"1","lastName":"Orton","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg","skill":"Oracle"},{"city":"Fush\u00eb-Muhurr","company":"Yadel","email":"iorton0@imdb.com","firstName":"Ingaberg","grades":["78","100","92","86","89","88","91","87"],"id":"2","lastName":"Orton","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg","skill":"Oracle"},{"city":"Fush\u00eb-Muhurr","company":"Yadel","email":"iorton0@imdb.com","firstName":"Ingaberg","grades":["78","100","92","86","89","88","91","87"],"id":"3","lastName":"Orton","pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg","skill":"Oracle"}]

test('should correctly add a tag to the student by id', () => {
  const test1 = addTagToStudentById(testStudents,"2","Test 1")
  expect(test1[1].tags).toStrictEqual(["Test 1"])

  const test2 = addTagToStudentById(test1,"2","Test 2")
  expect(test2[1].tags).toStrictEqual(["Test 1","Test 2"])
  
  const test3 = addTagToStudentById(test2,"3","Test 3")
  expect(test3[2].tags).toStrictEqual(["Test 3"])
});
