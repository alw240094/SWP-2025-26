"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bruch = void 0;
class Bruch {
    zaehler;
    nenner;
    constructor(zaehler, nenner) {
        this.zaehler = zaehler;
        this.nenner = nenner;
        if (nenner === 0) {
            throw new Error("Nenner darf nicht 0 sein!");
        }
        this.kuerzen();
    }
    // Kürzt den Bruch
    kuerzen() {
        const g = this.ggt(Math.abs(this.zaehler), Math.abs(this.nenner));
        this.zaehler /= g;
        this.nenner /= g;
        if (this.nenner < 0) { // negatives Vorzeichen immer im Zähler
            this.zaehler *= -1;
            this.nenner *= -1;
        }
    }
    ggt(a, b) {
        return b === 0 ? a : this.ggt(b, a % b);
    }
    add(b) {
        const z = this.zaehler * b.nenner + b.zaehler * this.nenner;
        const n = this.nenner * b.nenner;
        return new Bruch(z, n);
    }
    sub(b) {
        const z = this.zaehler * b.nenner - b.zaehler * this.nenner;
        const n = this.nenner * b.nenner;
        return new Bruch(z, n);
    }
    mul(b) {
        return new Bruch(this.zaehler * b.zaehler, this.nenner * b.nenner);
    }
    div(b) {
        if (b.zaehler === 0)
            throw new Error("Division durch 0!");
        return new Bruch(this.zaehler * b.nenner, this.nenner * b.zaehler);
    }
    toString() {
        return `${this.zaehler}/${this.nenner}`;
    }
    equals(b) {
        return this.zaehler === b.zaehler && this.nenner === b.nenner;
    }
}
exports.Bruch = Bruch;
//# sourceMappingURL=main.js.map