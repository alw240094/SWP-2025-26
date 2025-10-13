class Bruch {
  constructor(public zaehler: number, public nenner: number) {}
}
const b1 = new Bruch(1, 2); // Instanz
const b2 = new Bruch(3, 4); // andere Instanz

class Bruch {
  constructor(public zaehler: number, public nenner: number) {
    console.log("Neuer Bruch:", zaehler, "/", nenner);
  }
}

const b = new Bruch(2, 3); // ruft automatisch constructor auf


class Bruch {
  constructor(public zaehler: number, public nenner: number) {}

  toString() {
    return `${this.zaehler}/${this.nenner}`;
  }
}

const b = new Bruch(3, 5);
console.log(b.toString()); // this → b → "3/5"

class Bruch {
  constructor(public zaehler: number, public nenner: number) {}

  static ggt(a: number, b: number): number {
    return b === 0 ? a : Bruch.ggt(b, a % b);
  }

  kuerzen() {
    const g = Bruch.ggt(this.zaehler, this.nenner); // Aufruf über Klassenname
    this.zaehler /= g;
    this.nenner /= g;
  }
}
const b = new Bruch(8, 12);
b.kuerzen();
console.log(b.toString()); // "2/3"