import React from 'react';
import TestRenderer from 'react-test-renderer';
import Component from '../app';
import configureStore from '../store';

describe('src/client/app', () => {
  test('App should render without error', () => {
    const component = TestRenderer.create(<Component store={configureStore()} />);
    expect(component).toBeTruthy();
  });
});
