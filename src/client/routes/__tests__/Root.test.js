import React from 'react';
import TestRenderer from 'react-test-renderer';
import Route from '../Root';
import configureStore from '../../store';

describe('src/client/routes/Root', () => {
  test('Root should render without error', () => {
    const component = TestRenderer.create(<Route store={configureStore()} />);
    expect(component).toBeTruthy();
  });
});
