class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //   Instance method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  static enrollStudents(...students) {
    //   ..............  may be they send an email
  }
}

const student1 = new Student("Keerthy", "C");
const student2 = new Student("Harry", "Joseph");

let result = student1.fullName();
console.log(result);

Student.enrollStudents(student1, student2);
