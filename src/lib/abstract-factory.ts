abstract class AnimalFactory {
  abstract step: number;
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

type AnimalCtr = typeof Dog | typeof Cat | typeof Tiger

class Animals {
  instance: AnimalFactory[];

  constructor(factorys: AnimalCtr[]) {
    this.instance = factorys.map(ctr => new ctr());
  }
}

const animals = new Animals([Dog, Cat, Tiger]);


animals.instance.forEach(animal => animal.run());

animals.instance.forEach(animal => console.log(animal.step));

export {};
