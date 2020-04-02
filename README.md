# blockies-ts

Typescript version of Ethereum blockies by [alexvansande](https://github.com/ethereum/blockies)

## Usage

```typescript
import * as blockies from 'blockies-ts';

const address = "0x0000000000000000000000000000000000000000
const imgSrc = blockies.create({ seed: address }).toDataUrl();

// assign imgSrc to an img tag
```
