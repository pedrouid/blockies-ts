# blockies-ts

Typescript version of Ethereum blockies by [alexvansande](https://github.com/ethereum/blockies)

## Usage

```typescript
import * as blockies from 'blockies-ts';

const address = '0x8B7B2b4F7A391b6f14A81221AE0920a9735B67Fc';
const imgSrc = blockies.create({ seed: address }).toDataURL();

// assign imgSrc to an img tag
```
