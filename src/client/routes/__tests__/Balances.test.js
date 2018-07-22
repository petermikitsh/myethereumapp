import React from 'react';
import { shallow } from 'enzyme';
import Route from '../Balances';
import configureStore from '../../store';

describe('src/client/routes/Balances', () => {
  test('Balances should render without error', () => {
    const component = shallow(<Route store={configureStore()} />);
    expect(component).toBeTruthy();
  });
});
