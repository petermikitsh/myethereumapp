import React from 'react';
import { shallow } from 'enzyme';
import Component from '../index';

describe('src/client/components/Tabs', () => {
  test('should render Tabs', () => {
    const component = shallow(<Component location={{ pathname: '/' }} />);
    expect(component).toBeTruthy();
  });
});
