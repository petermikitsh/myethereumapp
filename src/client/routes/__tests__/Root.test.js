import React from 'react';
import { shallow } from 'enzyme';
import Route from '../Root';
import configureStore from '../../store';

describe('src/client/routes/Root', () => {
  test('Root should render without error', () => {
    const component = shallow(<Route store={configureStore()} />);
    expect(component).toBeTruthy();
  });
});
