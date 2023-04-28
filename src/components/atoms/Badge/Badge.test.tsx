import { renderWithProviders } from 'utils/test.utils';
import { BadgeProps } from './Badge.types';
import Badge from './Badge';

describe('Badge', () => {
  const item = ({ variant }: BadgeProps) => renderWithProviders(<Badge variant={variant} />, {});

  it('should renders correctly primary badge', () => {
    expect(
      item({
        variant: 'primary',
      }),
    ).toMatchSnapshot();
  });
  it('should renders correctly secondary badge', () => {
    expect(
      item({
        variant: 'secondary',
      }),
    ).toMatchSnapshot();
  });
  it('should renders correctly danger Badge', () => {
    expect(
      item({
        variant: 'danger',
      }),
    ).toMatchSnapshot();
  });
  it('should renders correctly warning Badge', () => {
    expect(
      item({
        variant: 'warning',
      }),
    ).toMatchSnapshot();
  });
});
