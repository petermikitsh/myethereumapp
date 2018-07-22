import React from 'react';
import TestRenderer from 'react-test-renderer';
import Component from '../BalanceListItem';

describe('src/client/components/Balances/BalanceListItem', () => {
  test('BalanceListItem should render without error', () => {
    const props = {
      balance: '10000000000',
      id: '0x7658ef9aa7817e1ba390c5ba3c526115d25452b3',
      updatedAt: '2018-07-22T01:22:08.245Z',
    };
    const component = TestRenderer.create(<Component {...props} />);
    component.getInstance().tick();
    expect(component).toBeTruthy();
  });
});
