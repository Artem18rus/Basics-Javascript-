function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}    
  const student1 = new Student("Шурик", "male", 29);
  const student2 = new Student("Володя", "male", 30);
  const student3 = new Student("Вика", "female", 18);

Student.prototype.setSubject = function (subjectName) {
  const subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...rest) {
  this.marks.push(rest);
}

Student.prototype.getAverage = function(marks) {
  let max = marks[0];
  let min = marks[0];
  let sum = 0;
  let avg;
    for (let i = 0; i < marks.length; i++) {
      if (marks[i] > max) {
        max = marks[i];
      } 
      if (marks[i] < min) {
        min = marks[i];
      }
      sum += marks[i];
    }
    avg = +(sum / marks.length);
    return avg;
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  Student.excluded = reason;
}

// ваш код для остальных методов