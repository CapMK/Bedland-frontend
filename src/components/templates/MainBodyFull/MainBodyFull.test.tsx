import { render } from 'utils/test.utils';
import { cleanup } from '@testing-library/react';
import MainBodyFull from './MainBodyFull';

describe('Login Page Template', () => {
  const item = () => render(<MainBodyFull />, {});
  afterEach(cleanup);
  it('renders correctly', () => {
    expect(item).toMatchSnapshot();
  });
});
