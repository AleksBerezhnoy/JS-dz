const Character = function (species, name, language) {
  this.species = species;
  this.name = name;
  this.language = language;
};
Character.prototype.speak = function (){
  console.log(this.name, this,this.language);
}


const Ork = function (species, name, language, weapon) {
  Character.call(this, species, name, language); /
  this.weapon = weapon;
};


Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;


Ork.prototype.break = function () {
  console.log(`Удар нанесен ${this.weapon}`);
};


const Elf = function (species, name, language, incantations) {
  Character.call(this, species, name, language); /
  this.incantations = incantations;
};


Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;


Elf.prototype.createIncantations = function () {
  console.log(`Создалось заклинание под названием ${this.incantations}`);
};


const ork = new Ork('orks', 'ork', 'ru', 'Мечом');
const elf = new Elf('elfs', 'elf', 'en', 'Лечебное зелье');

elf.createIncantations(); 
ork.break(); 
