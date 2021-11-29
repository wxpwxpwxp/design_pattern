abstract class CatAnimalImp {
  abstract bark():void;
}

class CatImp extends CatAnimalImp {
  override bark() {
    console.log('喵喵');
  }
}

class TigerImp extends CatAnimalImp {
  override bark() {
    console.log('嗷呜');
  }
}

const env = 2 as number;

class AnimalFactory {
  private static instance: CatAnimalImp;

  static getInstance() {
    if (this.instance) return this.instance;

    if (env === 1) {
      this.instance = new CatImp();
    } else {
      this.instance = new TigerImp();
    }

    return this.instance;
  }
}

class CatAnimal {
  private imp: CatAnimalImp;

  constructor() {
    this.imp = AnimalFactory.getInstance();
  }

  bark() {
    this.imp.bark();
  }
}

const catSubject = new CatAnimal();

catSubject.bark();

export {};
