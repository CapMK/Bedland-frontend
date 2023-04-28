import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import FilterButton from './FilterButton';
import { whichButton, possibleButtons } from './FilterButton.utils';

describe('Filter Button', () => {
  afterEach(cleanup);
  const filterButton = () => renderWithProviders(<FilterButton />, {});

  it('filterButton renders correctly', () => {
    expect(filterButton()).toMatchSnapshot();
  });

  it('whichButton function should return primaryButton', () => {
    expect(whichButton(false)).toEqual(possibleButtons.primary);
  });

  it('whichButton function should return primaryBordersButton', () => {
    expect(whichButton(true)).toEqual(possibleButtons.primaryBorders);
  });
});
