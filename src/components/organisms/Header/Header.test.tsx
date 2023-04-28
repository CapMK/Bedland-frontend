import { cleanup, screen } from '@testing-library/react';
import { loggedInManagerUser, loggedInResidentUser } from 'utils/mockUser';
import { renderWithProviders } from 'utils/test.utils';
import Header from './Header';

describe('Header', () => {
  afterEach(cleanup);
  it('headers renders correctly for logged out user', () => {
    const snapshot = renderWithProviders(<Header />, {});

    expect(snapshot).toMatchSnapshot();
  });
  it('headers renders without dropdown for logged out user', () => {
    renderWithProviders(<Header />, {});
    const dropdown = screen.queryByTestId('dropdown');

    expect(dropdown).toBeFalsy();
  });
  it('header shows dropdown, if a user is logged in ', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    const dropdown = screen.queryByTestId('dropdown');
    expect(dropdown).toBeTruthy();
  });

  it('headers renders correctly for logged in manager', () => {
    const managerHeader = () =>
      renderWithProviders(<Header />, {
        preloadedState: {
          user: loggedInManagerUser,
        },
      });

    expect(managerHeader()).toMatchSnapshot();
  });

  it('headers renders correctly for logged in resident', () => {
    const managerHeader = () =>
      renderWithProviders(<Header />, {
        preloadedState: {
          user: loggedInResidentUser,
        },
      });

    expect(managerHeader()).toMatchSnapshot();
  });
});
