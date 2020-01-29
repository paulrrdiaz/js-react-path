class Triangle {
  constructor(...args) {
    this.measures = Array.from(args).sort((a, b) => a - b);
  }

  kind() {
    const { measures } = this;

    const values = new Set(measures);

    if (measures[0] + measures[1] <= measures[2]) throw new Error("illegal");

    for (let value of values) {
      if (value <= 0) throw new Error("illegal");
    }

    switch (values.size) {
      case 3:
        return "scalene";
      case 2:
        return "isosceles";
      case 1:
        return "equilateral";
      default:
        return "Weird...";
    }
  }
}

const t1 = new Triangle(3, 4, 5);
t1.kind();
