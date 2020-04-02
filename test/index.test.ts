import * as blockies from '../src';

describe('blockies', () => {
  it('should generate from ethereum address', () => {
    const address = '0x8B7B2b4F7A391b6f14A81221AE0920a9735B67Fc';
    const imgSrc = blockies.create({ seed: address }).toDataURL();
    expect(imgSrc).toBeTruthy();
  });
});

describe('utils', () => {
  it('should create image data successfully', () => {
    const imgData = blockies.createImageData(blockies.DEFAULT_SIZE);
    expect(imgData).toBeTruthy();
  });
});
