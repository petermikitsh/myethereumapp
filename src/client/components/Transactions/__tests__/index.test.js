import React from 'react';
import TestRenderer from 'react-test-renderer';
import Component from '../index';
import ContextProvider from '../../../__tests__/ContextProvider';

describe('src/client/components/Balances/BalanceListItem', () => {
  test('Transactions should render without error', () => {
    const props = {
      address: '0x291baf17c1d0e763188b24058c877d1a8d04bc03',
      transactions: [{
        id: '0x46157fd20f8deeb96708b148b3e3ba77e3736041af72c8a08151ff90879d915f',
        block: '5787731',
        from: '0x291baf17c1d0e763188b24058c877d1a8d04bc03',
        to: '0x3b0bf18ac4bfe9d6c81c186bc835757577f4c1aa',
        value: '3800000000000000',
      }],
    };
    const component = TestRenderer.create(
      <ContextProvider>
        <Component {...props} />
      </ContextProvider>,
    );
    expect(component).toBeTruthy();
  });
});
