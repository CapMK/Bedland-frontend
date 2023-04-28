import { renderWithProviders } from 'utils/test.utils';
import { act, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { User } from 'store/reducers/user/user_slice';

import routes from 'App/routing/routes';
import Sidebar from './Sidebar';

const defaultUser = {
  loggedIn: true,
  status: 'success',
  error: undefined,
  userId: '122',
  login: 'abcdefghij',
  token: undefined,
  role: 'resident',
} as User;

const managerUser = { ...defaultUser, role: 'manager' } as User;

describe('Sidebar for manager', () => {
  afterEach(cleanup);
  const item = () =>
    renderWithProviders(<Sidebar />, {
      preloadedState: {
        user: managerUser,
      },
    });

  it('should renders correctly sidebar', () => {
    expect(item()).toMatchSnapshot();
  });

  it('should redirect to Buildings Route when click on item with Buildings label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/buildings/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.buildings);
  });

  it('should redirect to Dashboard Route when click on item with Dashboard label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/dashboard/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.homeForLoggedIn);
  });

  it('should redirect to Reports Route when click on item with Reports label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/reports/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.reports);
  });

  it('should redirect to Messages Route when click on item with Messages label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/messages/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.messages);
  });

  it('should redirect to Wall Route when click on item with Wall label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/wall/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.wall);
  });

  it('should redirect to Payments Route when click on item with Payments label', async () => {
    item();
    await act(() => userEvent.click(screen.getByText(/payments/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.payments);
  });

  it('should redirect to Voting Route when click on item with Voting label', async () => {
    item();

    await act(async () => userEvent.click(screen.getByText(/voting/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.voting);
  });

  it('should redirect to Residents Route when click on item with Residents label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/residents/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.residents);
  });
});

describe('Sidebar for resident', () => {
  const item = () =>
    renderWithProviders(<Sidebar />, {
      preloadedState: {
        user: defaultUser,
      },
    });

  it('should renders correctly sidebar', () => {
    expect(item()).toMatchSnapshot();
  });

  it('should redirect to Flats Route when click on item with Flats label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/flats/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.flats);
  });

  it('should redirect to Dashboard Route when click on item with Dashboard label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/dashboard/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.homeForLoggedIn);
  });

  it('should redirect to Reports Route when click on item with Reports label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/reports/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.reports);
  });

  it('should redirect to Messages Route when click on item with Messages label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/messages/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.messages);
  });

  it('should redirect to Wall Route when click on item with Wall label', async () => {
    item();
    await act(async () => userEvent.click(screen.getByText(/wall/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.wall);
  });

  it('should redirect to Payments Route when click on item with Payments label', async () => {
    item();
    await act(() => userEvent.click(screen.getByText(/payments/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.payments);
  });

  it('should redirect to Voting Route when click on item with Voting label', async () => {
    item();

    await act(async () => userEvent.click(screen.getByText(/voting/i)));
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.voting);
  });
});
