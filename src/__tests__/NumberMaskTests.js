import React from 'react';
import {shallow, configure} from 'enzyme';
import {NumberMask} from '../lib';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('NumberMask masks integers correctly', () => {
  const mask = shallow(
    <NumberMask type="integer" />
  );

  mask.find('input').simulate('change', {target: {value: "abc10000abc1000"}});
  expect(mask.props().value).toEqual(100001000);

});

test('NumberMask masks floats correctly', () => {
    const mask = shallow(
      <NumberMask type="float" />
    );
  
    mask.find('input').simulate('change', {target: {value: "123abc123.000"}});
    expect(mask.props().value).toEqual("123123.000");
  
});