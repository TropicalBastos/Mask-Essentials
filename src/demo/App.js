import React from 'react';
import NumberMask from '../lib';
import { CharMask } from '../lib';
import { IsoDateMask } from '../lib';
import { CurrencyMask } from '../lib';

const App = () => (
  <div>
    <NumberMask type="integer" />
    <CharMask type="alphabet" />
    <IsoDateMask separator="-" />
    <CurrencyMask prefix="£" />
  </div>
);

export default App;
