import { parseOptions, createImageData } from './utils';
import { BlockiesOptions } from './types';

export function render(
  providedOpts: Partial<BlockiesOptions>,
  canvas: HTMLCanvasElement
) {
  const opts = parseOptions(providedOpts || {});
  let imageData = createImageData(opts.size);
  let width = Math.sqrt(imageData.length);

  canvas.width = canvas.height = opts.size * opts.scale;

  let context = canvas.getContext('2d');
  // @ts-ignore
  context?.fillStyle = opts.bgcolor;
  context?.fillRect(0, 0, canvas.width, canvas.height);
  // @ts-ignore
  context?.fillStyle = opts.color;

  for (let i = 0; i < imageData.length; i++) {
    // if data is 0, leave the background
    if (imageData[i]) {
      let row = Math.floor(i / width);
      let column = i % width;

      // if data is 2, choose spot color, if 1 choose foreground
      // @ts-ignore
      context?.fillStyle = imageData[i] === 1 ? opts.color : opts.spotcolor;

      context?.fillRect(
        column * opts.scale,
        row * opts.scale,
        opts.scale,
        opts.scale
      );
    }
  }
  return canvas;
}

export function create(opts: Partial<BlockiesOptions>) {
  let canvas = document.createElement('canvas');
  render(opts, canvas);
  return canvas;
}

export * from './types';
export * from './utils';
export * from './constants';

export default {
  create,
  render,
};
