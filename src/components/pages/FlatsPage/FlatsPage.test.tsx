import { renderWithProviders } from 'utils/test.utils';
import FlatsPage from './FlatsPage';

describe('FlatsPage', () => {
  it('renders correctly', () => {
    const page = renderWithProviders(<FlatsPage />, {});
    expect(page).toMatchSnapshot();
  });
});
