import { random, seededRandom } from './random';

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

export function createImageData(size) {
  let width = size; // Only support square icons for now
  let height = size;

  let dataWidth = Math.ceil(width / 2);
  let mirrorWidth = width - dataWidth;

  let data: any[] = [];
  for (let y = 0; y < height; y++) {
    let row: any[] = [];
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

export function parseOptions(opts) {
  let newOpts: any = {};

  newOpts.seed =
    opts.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);

  seededRandom(newOpts.seed);

  newOpts.size = opts.size || 8;
  newOpts.scale = opts.scale || 4;
  newOpts.color = opts.color || createColor();
  newOpts.bgcolor = opts.bgcolor || createColor();
  newOpts.spotcolor = opts.spotcolor || createColor();

  return newOpts;
}
