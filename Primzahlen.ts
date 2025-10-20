// ...existing code...
/**
 * Typ für Rückgabe von primzahlenMitWurzel
 */
export type PrimWurzel = { primzahl: number; wurzel: number };

/**
 * Liefert alle Primzahlen <= limit (Sieb des Eratosthenes).
 * Gibt ein leeres Array zurück für limit < 2 oder nicht-endliche Werte.
 * @param limit obere Grenze (inklusive)
 */
export function primzahlen(limit: number): number[] {
  if (!Number.isFinite(limit)) throw new TypeError("limit must be a finite number");
  limit = Math.floor(limit);
  if (limit < 2) return [];

  const sieve = new Array<boolean>(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  const max = Math.floor(Math.sqrt(limit));
  for (let p = 2; p <= max; p++) {
    if (sieve[p]) {
      for (let multiple = p * p; multiple <= limit; multiple += p) {
        sieve[multiple] = false;
      }
    }
  }

  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) primes.push(i);
  }
  return primes;
}

/**
 * Liefert für jede Primzahl <= limit die Primzahl und ihre Quadratwurzel.
 * @param limit obere Grenze (inklusive)
 */
export function primzahlenMitWurzel(limit: number): PrimWurzel[] {
  const primes = primzahlen(limit);
  return primes.map((p) => ({ primzahl: p, wurzel: Math.sqrt(p) }));
}
// ...existing code...