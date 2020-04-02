// The random number is a js implementation of the Xorshift PRNG
export const randArr = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

export function seedRandomness(seed: string) {
  let i: number;
  for (i = 0; i < randArr.length; i++) {
    randArr[i] = 0;
  }
  for (i = 0; i < seed.length; i++) {
    randArr[i % 4] =
      (randArr[i % 4] << 5) - randArr[i % 4] + seed.charCodeAt(i);
  }
}

export function random() {
  // based on Java's String.hashCode(), expanded to 4 32bit values
  let t = randArr[0] ^ (randArr[0] << 11);

  randArr[0] = randArr[1];
  randArr[1] = randArr[2];
  randArr[2] = randArr[3];
  randArr[3] = randArr[3] ^ (randArr[3] >> 19) ^ t ^ (t >> 8);

  return (randArr[3] >>> 0) / ((1 << 31) >>> 0);
}
