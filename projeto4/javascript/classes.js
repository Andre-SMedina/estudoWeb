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
// chama função da classe sem instanciar antes, pois é static
// Person.speak();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barked!(latiu)`);
  }
}

const animal = new Animal("Simba");
const dog = new Dog('Bob')

animal.speak();
dog.speak()