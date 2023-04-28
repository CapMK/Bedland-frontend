import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import { loggedInManagerUser, loggedInResidentUser } from 'utils/mockUser';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  afterEach(cleanup);
  it('renders correctly for resident', () => {
    const page = renderWithProviders(<DashboardPage />, {
      preloadedState: {
        user: loggedInResidentUser,
      },
    });
    expect(page).toMatchSnapshot();
  });

  it('renders correctly for manager', () => {
    const page = renderWithProviders(<DashboardPage />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    expect(page).toMatchSnapshot();
  });
});
