import { WidgetSize } from './Widget.types';

const variantToSize: WidgetSize = {
  notifications: {
    minWidth: '31.375rem',
    minHeight: '22.125rem',
  },
  payments: {
    minWidth: '30.875rem',
    minHeight: '22.125rem',
  },
  contacts: {
    minWidth: '24.875rem',
    minHeight: '25rem',
  },
  votings: {
    minWidth: '37.5rem',
    minHeight: '25rem',
  },
} as const;

export default variantToSize;
