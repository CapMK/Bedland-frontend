import { renderWithProviders } from 'utils/test.utils';
import { fireEvent, screen } from '@testing-library/react';
import routes from 'App/routing/routes';
import { vi } from 'vitest';
import { loggedInManagerUser, loggedInResidentUser } from 'utils/mockUser';
import PaymentWidget from './PaymentWidget';

const mockUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => ({
  ...((await vi.importActual('react-router-dom')) as any),
  useNavigate: () => mockUseNavigate,
}));

describe('Payment Widget ', () => {
  it('should render correctly for manager', () => {
    const widget = renderWithProviders(<PaymentWidget />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    expect(widget).toMatchSnapshot();
  });

  it('should render correctly for resident', () => {
    const widget = renderWithProviders(<PaymentWidget />, {
      preloadedState: {
        user: loggedInResidentUser,
      },
    });
    expect(widget).toMatchSnapshot();
  });

  it('should navigate to paymentPage', async () => {
    renderWithProviders(<PaymentWidget />, {});
    const paymentWidget = await screen.findByRole('button');
    fireEvent.click(paymentWidget);

    expect(mockUseNavigate).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledWith(routes.payments);
  });
});
