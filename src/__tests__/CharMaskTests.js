import React from 'react';
import {shallow, configure} from 'enzyme';
import {CharMask} from '../lib';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('CharMask masks characters correctly', () => {
  // Render a checkbox with label in the document
  const mask = shallow(
    <CharMask />
  );

  mask.find('input').simulate('change', {target: {value: "123abc"}});
  expect(mask.props().value).toEqual("abc");

});