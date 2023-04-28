import Avatar from 'assets/img/Avatar.svg';
import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import MessageItem from './MessageItem';

describe('MessageItem', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const messageItem = renderWithProviders(
      <MessageItem name='Jessie Burton' image={Avatar} />,
      {},
    );

    expect(messageItem).toMatchSnapshot();
  });
});
