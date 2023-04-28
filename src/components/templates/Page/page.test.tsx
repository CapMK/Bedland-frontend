import { renderWithProviders } from 'utils/test.utils';
import { cleanup } from '@testing-library/react';
import Page from './Page';

describe('MainBody', () => {
  afterEach(cleanup);
  it('should renders correctly Page', () => {
    const item = () => renderWithProviders(<Page />, {});

    expect(item()).toMatchSnapshot();
  });
});
