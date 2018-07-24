import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BalancesRoute } from '../Balances';
import ContextProvider from '../../__tests__/ContextProvider';

describe('src/client/routes/Balances', () => {
  test('BalancesRoute should render without error', () => {
    const get = jest.fn(() => Promise.resolve());
    const find = jest.fn();
    const component = TestRenderer.create(
      <ContextProvider>
        <BalancesRoute
          balances={[]}
          get={get}
          find={find}
        />
      </ContextProvider>,
    );
    expect(component).toBeTruthy();
    expect(find.mock.calls.length).toBe(1);
    component.root.findByType(BalancesRoute).instance.onSubmit('0x7658ef9aa7817e1ba390c5ba3c526115d25452b3');
    expect(get.mock.calls.length).toBe(1);
  });
});
