function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
  const student1 = new Student("Шурик", "male", 29);
  const student2 = new Student("Володя", "male", 30);
  const student3 = new Student("Вика", "female", 18);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...arr) {
  if(this.marks === undefined){
    this.marks = arr;
  } else {
    this.marks.push(arr);
  }
}

Student.prototype.getAverage = function() {
  if(this.marks.length === 0){
    return 0;
  } else {
    let sum = 0;
    let count = 0;
      for (let i = 0; i < this.marks.length; i++){
       count += 1;
       sum += this.marks[i];
      }
    return sum/count
  }
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}