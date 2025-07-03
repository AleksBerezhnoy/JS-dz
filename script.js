class Character {
  constructor(rasa, name, language) {
    this.rasa = rasa;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`Я персонаж под именем ${this.name}`);
  }
}

class Ork extends Character {
  constructor(rasa, name, language, weapon) {
    super(rasa, name, language);
    this.weapon = weapon
  }

  speak() {
    console.log(`Я персонаж под именем ${this.name}`);
  }
}

class Elf extends Character {
  constructor(rasa, name, language, zaclinanie) {
    super(rasa, name, language);
    this.zaclinanie = zaclinanie;
  }

  speak() {
    console.log(`Я персонаж под именем ${this.name}`);
  }
}

const newOrk = new Ork('Орки', 'Супер Орк', 'Русский', "Меч")
newOrk.speak()