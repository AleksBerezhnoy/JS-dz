class Car {
  #mark;
  #model;
  #mileage;
  constructor(mark, model, mileage) {
    this.#mark = mark
    this.#model = model
    this.#mileage = mileage;
  }

  set changeMileage(newMilage) {
    this.#mileage = newMilage
  }
  get changeMileage() {
    return this.#mileage + ' км';
  }

  info() {
    console.log(this.#mark, this.#model, this.#mileage + " км");
  }
}

const mercedes = new Car('Mercedes', 'AMG-97', 30000);
console.log(mercedes);
mercedes.changeMileage = 10000
console.log(mercedes.changeMileage);
mercedes.info()
