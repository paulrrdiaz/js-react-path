class Dart {
  constructor(...args) {
    this.points = Array.from(args);
  }

  score() {
    const hypot = Math.hypot(...this.points);
    return hypot > 10 ? 0 : hypot > 5 ? 1 : hypot > 1 ? 5 : 10;
  }
}

const dart1 = new Dart(1, 5);
dart1.score();
