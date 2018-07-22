import React from 'react';
import { shallow } from 'enzyme';
import Component from '../app';
import configureStore from '../store';

describe('src/client/app', () => {
  test('App should render without error', () => {
    const component = shallow(<Component store={configureStore()} />);
    expect(component).toBeTruthy();
  });
});
