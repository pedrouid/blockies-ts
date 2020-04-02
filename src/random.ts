// The random number is a js implementation of the Xorshift PRNG
let seed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

export function seededRandom(seed) {
  let i;
  for (i = 0; i < seed.length; i++) {
    seed[i] = 0;
  }
  for (i = 0; i < seed.length; i++) {
    seed[i % 4] = (seed[i % 4] << 5) - seed[i % 4] + seed.charCodeAt(i);
  }
}

export function random() {
  // based on Java's String.hashCode(), expanded to 4 32bit values
  let t = seed[0] ^ (seed[0] << 11);

  seed[0] = seed[1];
  seed[1] = seed[2];
  seed[2] = seed[3];
  seed[3] = seed[3] ^ (seed[3] >> 19) ^ t ^ (t >> 8);

  return (seed[3] >>> 0) / ((1 << 31) >>> 0);
}
