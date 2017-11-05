# react-mask-essentials

A many purpose input mask toolkit, currently includes number masks, character masks, date masks and credit to jsillitoe and contributors for the currency masks.

## Integration

You can create a mask like the following, it can accept all of the properties that an input element can accept

```javascript
const App = () => (
  <div>
    <NumberMask placeholder="0" type="integer" />
    <CharMask className="foo" mode="alphabet" />
    <IsoDateMask id="bar" separator="-" />
    <CurrencyMask prefix="£" />
  </div>
);

export default App;
```

For more on currency masks see jsillitoe's library <a href="https://github.com/jsillitoe/react-currency-input/">here</a>
