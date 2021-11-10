
interface Cat {
  step: number;
  run(): void;
  getCatStatus():string;
}

interface Dog {
  step: number;
  language: string;
  run(): void;
  // eslint-disable-next-line no-unused-vars
  bark(language: string): void;
  getDogStatus():string;
}

class Builder implements Cat, Dog {
  step = 0;
  language = 'wangwang';
  run() {
    this.step++;
  }

  bark(language: string) {
    this.language = language;
  }
  getCatStatus() {
    return `step=${this.step}`;
  }

  getDogStatus() {
    return `step=${this.step}&language=${this.language}`;
  }
}

class Director {
  builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }

  process(type: 'run' | 'bark') {
    switch (type) {
    case 'bark':
      this.builder.bark('dddd');
      break;

    case 'run':
      this.builder.run();
      break;

    default: return;
    }
  }
}

const director = new Director(new Builder());

director.process('run');

export {};
