export class Bruch {
  zaehler: number;
  nenner: number;

  constructor(zaehler: number, nenner: number) {
    if (!Number.isInteger(zaehler) || !Number.isInteger(nenner)) {
      throw new TypeError("Zähler und Nenner müssen ganze Zahlen sein");
    }
    if (nenner === 0) {
      throw new Error("Nenner darf nicht 0 sein");
    }

    // Vorzeichen in den Zähler bringen
    if (nenner < 0) {
      zaehler = -zaehler;
      nenner = -nenner;
    }

    // Normieren: 0/* => 0/1
    if (zaehler === 0) {
      this.zaehler = 0;
      this.nenner = 1;
      return;
    }

    const g = Bruch.ggt(Math.abs(zaehler), Math.abs(nenner));
    this.zaehler = zaehler / g;
    this.nenner = nenner / g;
  }

  private static ggt(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a === 0 ? 1 : a;
  }

  toString(): string {
    return `${this.zaehler}/${this.nenner}`;
  }

  add(other: Bruch): Bruch {
    const z = this.zaehler * other.nenner + other.zaehler * this.nenner;
    const n = this.nenner * other.nenner;
    return new Bruch(z, n);
  }

  sub(other: Bruch): Bruch {
    const z = this.zaehler * other.nenner - other.zaehler * this.nenner;
    const n = this.nenner * other.nenner;
    return new Bruch(z, n);
  }

  mul(other: Bruch): Bruch {
    return new Bruch(this.zaehler * other.zaehler, this.nenner * other.nenner);
  }

  div(other: Bruch): Bruch {
    if (other.zaehler === 0) {
      throw new Error("Division durch 0");
    }
    return new Bruch(this.zaehler * other.nenner, this.nenner * other.zaehler);
  }

  equals(other: Bruch): boolean {
    return this.zaehler === other.zaehler && this.nenner === other.nenner;
  }
}