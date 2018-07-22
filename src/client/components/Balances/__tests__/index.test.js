import React from 'react';
import TestRenderer from 'react-test-renderer';
import Balances from '../index';
import ContextProvider from '../../../__tests__/ContextProvider';

describe('src/client/components/Balances', async () => {
  test('should render', () => {
    const props = {
      balances: [
        {
          balance: '10000000000',
          id: '0x7658ef9aa7817e1ba390c5ba3c526115d25452b3',
          updatedAt: '2018-07-22T01:22:08.245Z',
        },
      ],
      onSubmit: () => {},
    };
    const component = TestRenderer.create(
      <ContextProvider>
        <Balances {...props} />
      </ContextProvider>,
    );
    expect(component).toBeTruthy();
    component.unmount();
  });
});
