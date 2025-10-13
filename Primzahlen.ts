
export function primzahlen(limit: number): number[] {
  if (!Number.isInteger(limit) || limit < 2) return [];
  const sieve = new Array(limit + 1).fill(true);
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
  for (let i = 2; i <= limit; i++) if (sieve[i]) primes.push(i);
  return primes;
}

export function primzahlenMitWurzel(limit: number): Array<{ primzahl: number; wurzel: number }> {
  const primes = primzahlen(limit);
  return primes.map(p => ({ primzahl: p, wurzel: Math.sqrt(p) }));
}
