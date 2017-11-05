import React from 'react';
import NumberMask from '../lib';
import { CharMask } from '../lib';
import { IsoDateMask } from '../lib';
import { CurrencyMask } from '../lib';

const App = () => (
  <div>
    <NumberMask />
    <CharMask />
    <IsoDateMask />
    <CurrencyMask prefix="£" />
  </div>
);

export default App;
