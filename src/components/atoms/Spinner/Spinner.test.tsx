import { renderWithProviders } from 'utils/test.utils';
import Spinner from './Spinner';
import { SpinnerProps } from './Spinner.types';

describe('Scroll', () => {
  const item = ({ size }: SpinnerProps) => renderWithProviders(<Spinner size={size} />, {});
  it('should renders correctly Spinner', () => {
    expect(
      item({
        size: 24,
      }),
    ).toMatchSnapshot();
  });
});
