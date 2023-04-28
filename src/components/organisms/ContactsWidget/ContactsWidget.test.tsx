import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import ContactsWidget from './ContactsWidget';

describe('ContactsWidget', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const contactsWidget = renderWithProviders(<ContactsWidget />, {});
    expect(contactsWidget).toMatchSnapshot();
  });
});
