import React from 'react';
import NumberMask from '../lib';
import { CharMask } from '../lib';
import { IsoDateMask } from '../lib';

const App = () => (
  <div>
    <NumberMask />
    <CharMask />
    <IsoDateMask />
  </div>
);

export default App;
