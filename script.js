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
  demage() {
    console.log("Орк ударил");
  }
  speak() {
    console.log(`Я персонаж под именем ${this.name} и у меня есть ${this.weapon}`);
  }
}

class Elf extends Character {
  constructor(rasa, name, language, zaclinanie) {
    super(rasa, name, language);
    this.zaclinanie = zaclinanie;
  }

  newZaclinanie() {
    console.log("Наношу заклинание");
  }

  speak() {
    console.log(`Я персонаж под именем ${this.name} и у меня есть способности ${this.zaclinanie}`);
  }
}

const newOrk = new Ork('Орки', 'Супер Орк', 'Русский', "Меч")
newOrk.speak()