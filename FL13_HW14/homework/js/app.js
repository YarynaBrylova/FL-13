function Student(name, email) {
  let homeworkResults = [];
  let studentName = name;
  let studentEmail = email;

  return {
    getName: () => studentName,
    getEmail: () => studentEmail,
    getHomeworkResults: () => homeworkResults,
    addHomeworkResult: function (topic, success) {
      const newResult = {
        topic: topic,
        success: success
      };
      homeworkResults.push(newResult);
    }
  };
}

function FrontendLab(listOfStudents, failedLimit) {
  const failedHomeworksLimit = failedLimit;
  const studentsList = listOfStudents;

  return {
    printStudentsList: function () {
      studentsList.forEach((el) => {
        console.log(`name: ${el.getName()}, email: ${el.getEmail()}`);
        console.log(el.getHomeworkResults());
      });
    },

    addHomeworkResult: function (homeworkResults) {
      homeworkResults['results'].forEach((el) => {
        studentsList.forEach((student) => {
          if (student.getEmail() === el['email']) {
            student.addHomeworkResult(homeworkResults['topic'], el['success']);
          }
        });
      });
    },

    printStudentsEligibleForTest: function () {
      studentsList.forEach((el) => {
        let fail = 0;
        let studentsResults = el.getHomeworkResults();
        studentsResults.forEach((elem) => {
          if (elem['success'] === false) {
            fail++;
          }
        });
        if (fail <= failedHomeworksLimit) {
          console.log(`name: ${el.getName()}, email: ${el.getEmail()}`);
        }
      });
    }
  };
}



