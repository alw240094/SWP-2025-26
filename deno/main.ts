export class Bruch {
  constructor(
    public zaehler: number,
    public nenner: number
  ) {
    if (nenner === 0) {
      throw new Error("Nenner darf nicht 0 sein!");
    }
    this.kuerzen();
  }

  // Kürzt den Bruch
  private kuerzen() {
    const g = this.ggt(Math.abs(this.zaehler), Math.abs(this.nenner));
    this.zaehler /= g;
    this.nenner /= g;
    if (this.nenner < 0) { // negatives Vorzeichen immer im Zähler
      this.zaehler *= -1;
      this.nenner *= -1;
    }
  }

  private ggt(a: number, b: number): number {
    return b === 0 ? a : this.ggt(b, a % b);
  }

  add(b: Bruch): Bruch {
    const z = this.zaehler * b.nenner + b.zaehler * this.nenner;
    const n = this.nenner * b.nenner;
    return new Bruch(z, n);
  }

  sub(b: Bruch): Bruch {
    const z = this.zaehler * b.nenner - b.zaehler * this.nenner;
    const n = this.nenner * b.nenner;
    return new Bruch(z, n);
  }

  mul(b: Bruch): Bruch {
    return new Bruch(this.zaehler * b.zaehler, this.nenner * b.nenner);
  }

  div(b: Bruch): Bruch {
    if (b.zaehler === 0) throw new Error("Division durch 0!");
    return new Bruch(this.zaehler * b.nenner, this.nenner * b.zaehler);
  }

  toString(): string {
    return `${this.zaehler}/${this.nenner}`;
  }

  equals(b: Bruch): boolean {
    return this.zaehler === b.zaehler && this.nenner === b.nenner;
  }
}
