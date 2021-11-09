abstract class AnimalFactory {
  abstract run(): void;
}

class Cat extends AnimalFactory {
  step = 0;

  run() {
    this.step += 2;
  }
}

class Dog extends AnimalFactory {
  step = 0;

  run() {
    this.step += 4;
  }
}

class Tiger extends Cat {
  override run() {
    this.step += 6;
  }

  bark() {
    return 'aowu';
  }
}

const animals = [new Cat(), new Dog(), new Tiger()];

const cats: Cat[] = [new Cat(), new Tiger()];
cats;

animals.forEach(animal => animal.run());

animals.forEach(animal => console.log(animal.step));
