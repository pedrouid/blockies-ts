import { random, seedRandomness } from './random';
import { BlockiesOptions } from './types';
import { DEFAULT_SIZE, DEFAULT_SCALE } from './constants';

export function createColor() {
  //saturation is the whole color spectrum
  let h = Math.floor(random() * 360);
  //saturation goes from 40 to 100, it avoids greyish colors
  let s = random() * 60 + 40 + '%';
  //lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
  let l = (random() + random() + random() + random()) * 25 + '%';

  let color = 'hsl(' + h + ',' + s + ',' + l + ')';
  return color;
}

export function createImageData(size: number) {
  let width = size; // Only support square icons for now
  let height = size;

  let dataWidth = Math.ceil(width / 2);
  let mirrorWidth = width - dataWidth;

  let data: number[] = [];
  for (let y = 0; y < height; y++) {
    let row: number[] = [];
    for (let x = 0; x < dataWidth; x++) {
      // this makes foreground and background color to have a 43% (1/2.3) probability
      // spot color has 13% chance
      row[x] = Math.floor(random() * 2.3);
    }
    let r = row.slice(0, mirrorWidth);
    r.reverse();
    row = row.concat(r);

    for (let i = 0; i < row.length; i++) {
      data.push(row[i]);
    }
  }

  return data;
}

export function parseOptions(opts: Partial<BlockiesOptions>): BlockiesOptions {
  const seed =
    opts.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);

  seedRandomness(seed);

  return {
    seed,
    size: opts.size || DEFAULT_SIZE,
    scale: opts.scale || DEFAULT_SCALE,
    color: opts.color || createColor(),
    bgcolor: opts.bgcolor || createColor(),
    spotcolor: opts.spotcolor || createColor(),
  };
}
