import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TransactionsRoute } from '../Transactions';
import ContextProvider from '../../__tests__/ContextProvider';

describe('src/client/routes/Transactions', () => {
  test('TransactionsRoute should render without error', () => {
    const find = jest.fn();
    const component = TestRenderer.create(
      <ContextProvider>
        <TransactionsRoute
          transactions={[]}
          find={find}
        />
      </ContextProvider>,
    );
    expect(component).toBeTruthy();
    expect(find.mock.calls.length).toBe(1);
    component.root.findByType(TransactionsRoute).instance.onSubmit();
    expect(find.mock.calls.length).toBe(2);
  });
});
