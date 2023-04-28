import { renderWithProviders } from 'utils/test.utils';
import BuildingDetailsPage from './BuildingDetailsPage';

describe('BuildingDetailsPage', () => {
  it('renders correctly', () => {
    const page = renderWithProviders(<BuildingDetailsPage />, {});
    expect(page).toMatchSnapshot();
  });
});
