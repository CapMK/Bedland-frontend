import { cleanup, screen, within, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import { loggedInManagerUser } from 'utils/mockUser';
import BuildingsPage from './BuildingsPage';

describe('BuildingsPage', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const page = renderWithProviders(<BuildingsPage />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    expect(page).toMatchSnapshot();
  });

  it('renders with buildings sorted by name', () => {
    renderWithProviders(<BuildingsPage />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    const buildingsList = screen.getByRole('list');
    const { getAllByRole } = within(buildingsList);
    const items = getAllByRole('listitem');
    expect(items[0]).toHaveTextContent('Opole, Poland');
  });

  it('buildings get sorted by city', () => {
    renderWithProviders(<BuildingsPage />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    fireEvent.click(sortButton);
    const sortOption = screen.getByText(/city/i);
    fireEvent.click(sortOption);
    const buildingsList = screen.getByRole('list');
    const { getAllByRole } = within(buildingsList);
    const items = getAllByRole('listitem');
    expect(items[0]).toHaveTextContent('Kraków, Poland');
  });

  it('buildings get sorted by date added', () => {
    renderWithProviders(<BuildingsPage />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    fireEvent.click(sortButton);
    const sortOption = screen.getByText(/date added/i);
    fireEvent.click(sortOption);
    const buildingsList = screen.getByRole('list');
    const { getAllByRole } = within(buildingsList);
    const items = getAllByRole('listitem');
    expect(items[0]).toHaveTextContent('Kraków, Poland');
  });
});
