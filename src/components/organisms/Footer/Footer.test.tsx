import { renderWithProviders } from 'utils/test.utils';
import { cleanup } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  const item = () => renderWithProviders(<Footer />, {});

  afterEach(cleanup);
  it('renders correctly', () => {
    expect(item).toMatchSnapshot();
  });
});
