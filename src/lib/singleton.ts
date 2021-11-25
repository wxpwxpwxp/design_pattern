class Cat {
  static instance: Cat;

  private step = 0;

  constructor() {
    //
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Cat();
    }
    return this.instance;
  }

  public go() {
    this.step++;
    console.log(this.step);
  }
}


const instance = Cat.getInstance();
instance.go();
instance.go();
instance.go();

const instance2 = Cat.getInstance();
instance2.go();
instance2.go();
instance2.go();
