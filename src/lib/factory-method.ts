abstract class AnimalFactory {
  abstract step: number;
  abstract run(): void;
}

class Fish extends AnimalFactory {
  step = 0;

  run() {
    this.step += 1;
  }
}

class Cat extends AnimalFactory {
  step = 0;

  run() {
    this.step += 2;
  }
}

class Dog extends AnimalFactory {
  step = 0;
  private ancestor: unknown;

  run() {
    this.step += 4;
  }

  protected createAncestor(type: 'cat' | 'fish') {
    if (type === 'cat') this.ancestor = new Cat();
    if (type === 'fish') this.ancestor = new Fish();
    return this.ancestor;
  }

  getAncestor(type: 'cat' | 'fish') {
    if (this.ancestor) return this.ancestor;
    else return this.createAncestor(type);
  }
}

const dog = new Dog();
dog.getAncestor('cat');

export {};
