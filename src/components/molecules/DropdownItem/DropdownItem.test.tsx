import routes from 'App/routing/routes';
import { renderWithProviders } from 'utils/test.utils';
import { fireEvent, screen, act } from '@testing-library/react';
import { vi } from 'vitest';
import DropdownItem from './DropdownItem';

const mockUseNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
  Link: vi.fn(),
  MemoryRouter: vi.fn(),
}));

describe('DropdownItem', () => {
  it('renders correctly', () => {
    const snapshot = renderWithProviders(
      <DropdownItem linkRoute={routes.account} iconName='user' label='My Account' color='text' />,
      {},
    );
    expect(snapshot).toMatchSnapshot();
  });
  it.todo('dropdown item redirects correctly', async () => {
    renderWithProviders(
      <DropdownItem linkRoute={routes.account} iconName='user' label='My Account' color='text' />,
      {},
    );
    await act(async () => {
      const dropdownitem = screen.getByTestId('dropdown-item');
      await fireEvent.click(dropdownitem);
    });
    expect(screen.getByTestId('location-display').innerHTML).toEqual(routes.account);
  });
});
