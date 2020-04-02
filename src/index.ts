import { parseOptions, createImageData } from './utils';

export function render(opts, canvas) {
  opts = parseOptions(opts || {});
  let imageData = createImageData(opts.size);
  let width = Math.sqrt(imageData.length);

  canvas.width = canvas.height = opts.size * opts.scale;

  let cc = canvas.getContext('2d');
  cc.fillStyle = opts.bgcolor;
  cc.fillRect(0, 0, canvas.width, canvas.height);
  cc.fillStyle = opts.color;

  for (let i = 0; i < imageData.length; i++) {
    // if data is 0, leave the background
    if (imageData[i]) {
      let row = Math.floor(i / width);
      let col = i % width;

      // if data is 2, choose spot color, if 1 choose foreground
      cc.fillStyle = imageData[i] === 1 ? opts.color : opts.spotcolor;

      cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
    }
  }
  return canvas;
}

export function create(opts) {
  let canvas = document.createElement('canvas');

  render(opts, canvas);

  return canvas;
}

export default {
  create,
  render,
};
