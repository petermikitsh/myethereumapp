import React from 'react';
import TestRenderer from 'react-test-renderer';
import AppBar from '../AppBar';

describe('src/client/components/AppBar', () => {
  test('AppBar should render without error', () => {
    const component = TestRenderer.create(<AppBar />);
    expect(component).toBeTruthy();
  });
});
