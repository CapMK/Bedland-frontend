import Avatar from 'assets/img/Avatar.svg';
import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import ProfileImage from './ProfileImage';

describe('ProfileImage', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const messageItem = renderWithProviders(<ProfileImage src={Avatar} size={1.5} />, {});
    expect(messageItem).toMatchSnapshot();
  });
});
