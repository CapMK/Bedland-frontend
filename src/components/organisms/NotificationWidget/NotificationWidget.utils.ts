import { IconName } from 'components/atoms/Icon/icon.types';

type Notifications = { icon: IconName; date: string; text: string; id: number };
const notifications: Notifications[] = [
  { icon: 'payments', date: '21/02/23', text: 'New payment from Joe Livingstone', id: 1 },
  { icon: 'payments', date: '22/02/23', text: 'New payment from Joe Livingstone', id: 2 },
  {
    icon: 'messages',
    date: '23/02/23',
    text: 'New message from Joe LivingstoneNew message from Joe LivingstoneNew message from Joe Livingstone',
    id: 3,
  },
  {
    icon: 'reports',
    date: '15/02/23',
    text: 'Spilled substance near the flat 21',
    id: 4,
  },
  { icon: 'payments', date: '14/02/23', text: 'New payment from Gabriela Ferez', id: 5 },
  {
    icon: 'reports',
    date: '27/02/23',
    text: 'Clogged garbage chute on 4th floor',
    id: 6,
  },
  {
    icon: 'reports',
    date: '24/02/23',
    text: 'Clogged garbage chute on 4th floor',
    id: 7,
  },
];
export default notifications;
