import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TransactionsByAddressRoute } from '../TransactionsByAddress';
import ContextProvider from '../../__tests__/ContextProvider';

describe('src/client/routes/TransactionsByAddress', () => {
  test('TransactionsByAddressRoute should render without error', () => {
    const find = jest.fn();
    const component = TestRenderer.create(
      <ContextProvider>
        <TransactionsByAddressRoute
          transactions={[]}
          find={find}
          match={{
            params: {
              id: '0x7658ef9aa7817e1ba390c5ba3c526115d25452b3',
            },
          }}
        />
      </ContextProvider>,
    );
    expect(component).toBeTruthy();
    expect(find.mock.calls.length).toBe(1);
    component.root.findByType(TransactionsByAddressRoute).instance.onSubmit();
    expect(find.mock.calls.length).toBe(2);
  });
});
