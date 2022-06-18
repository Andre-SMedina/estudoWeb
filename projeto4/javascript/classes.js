class Person {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  getFullName() {
    console.log(`Olá ${this.firstName} ${this.lastName}`);
  }

  static speak() {
    console.log("Me instancie para ter mais opções.");
  }
}

const person = new Person("André", "Luís", 39);

// console.log(person.firstName);
// person.getFullName();
Person.speak()

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log();
  }
}
