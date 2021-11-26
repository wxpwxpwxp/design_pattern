abstract class Animal {
  abstract bark(): void;
}

class Cat extends Animal {
  override bark() {
    console.log('喵喵喵');
  }
}

class Dog extends Animal {
  override bark() {
    console.log('汪汪汪');
  }
}

interface Friend {
  say(): void;
}

class Person implements Friend {
  say() {
    console.log('你好');
  }

  speckTo(friend: Friend) {
    console.log('打招呼');
    friend.say();
  }
}

class AnimalPersonAdaper implements Friend {
  animal: Animal;

  constructor(animal: Cat | Dog) {
    this.animal = animal;
  }

  say() {
    this.animal.bark();
  }
}

const person = new Person();
const dog = new Dog();
const cat = new Cat();

person.speckTo(new Person());
person.speckTo(new AnimalPersonAdaper(dog));
person.speckTo(new AnimalPersonAdaper(cat));


export {};
