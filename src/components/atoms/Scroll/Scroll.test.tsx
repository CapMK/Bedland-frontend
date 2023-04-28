import { renderWithProviders } from 'utils/test.utils';
import Scroll, { ScrollProps } from './Scroll';

describe('Scroll', () => {
  const item = ({ contentSize }: ScrollProps) =>
    renderWithProviders(<Scroll contentSize={contentSize} />, {});
  it('should renders correctly Scroll', () => {
    expect(
      item({
        contentSize: 2,
      }),
    ).toMatchSnapshot();
  });
});
