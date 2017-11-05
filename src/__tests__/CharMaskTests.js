import React from 'react';
import {shallow, configure} from 'enzyme';
import {CharMask} from '../lib';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('CharMask masks alphabet characters correctly', () => {
  const mask = shallow(
    <CharMask />
  );

  mask.find('input').simulate('change', {target: {value: "123abc"}});
  expect(mask.props().value).toEqual("abc");

});

test('CharMask masks specials correctly', () => {
    const mask = shallow(
      <CharMask mode="special" />
    );
  
    mask.find('input').simulate('change', {target: {value: "123@abc|>"}});
    expect(mask.props().value).toEqual("@|>");
  
});

test('CharMask masks both alphabet and specials correctly', () => {
    const mask = shallow(
      <CharMask mode="both" />
    );
  
    mask.find('input').simulate('change', {target: {value: "123@abc|>"}});
    expect(mask.props().value).toEqual("@abc|>");
  
});

test('CharMask masks emails correctly', () => {
    const mask = shallow(
      <CharMask mode="email" />
    );
  
    mask.find('input').simulate('change', {target: {value: "test-example@gmail.co.uk"}});
    expect(mask.props().value).toEqual("test-example@gmail.co.uk");
  
});