import React from 'react';
import {shallow, configure} from 'enzyme';
import {IsoDateMask} from '../lib';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('IsoDateMask masks iso standard dates correctly', () => {
  const mask = shallow(
    <IsoDateMask separator="-" />
  );

  mask.find('input').simulate('change', {target: {value: "20171210"}, 
  preventDefault: function(){ return; }});

  /*we have a timeout on the actual component so 
  the change will only take effect after a certain time*/
  setTimeout(() => {
      expect(mask.props().value).toEqual("2017-12-10");
  }, 500);

});
