class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hello, Yes My name is ${this.name}`;
  }
}

module.exports = {
  Person,
};
