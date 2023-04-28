import { renderWithProviders } from 'utils/test.utils';
import NotificationItem, { NotificationItemProps } from './NotificationItem';

describe('NotificationItem', () => {
  const item = ({ icon, date, text }: NotificationItemProps) =>
    renderWithProviders(<NotificationItem icon={icon} date={date} text={text} />, {});

  it('should renders correctly NotificationItem', () => {
    expect(
      item({
        icon: 'payments',
        date: '21/02/23',
        text: 'New payment from Joe Livingstone',
      }),
    ).toMatchSnapshot();
  });
});
