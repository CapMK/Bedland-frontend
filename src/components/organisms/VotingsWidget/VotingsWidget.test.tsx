import { renderWithProviders } from 'utils/test.utils';
import VotingsWidget from './VotingsWidget';

describe('VotingsWidget', () => {
  it('renders correctly VotingsWidget', () => {
    const votingsWidget = renderWithProviders(<VotingsWidget />, {});
    expect(votingsWidget).toMatchSnapshot();
  });
});
