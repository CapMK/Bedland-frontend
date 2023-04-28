import { renderWithProviders } from 'utils/test.utils';
import { cleanup } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderWithProviders(<ErrorMessage>Error message</ErrorMessage>, {});
    expect(snapshot).toMatchSnapshot();
  });
});
