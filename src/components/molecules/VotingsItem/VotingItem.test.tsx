import { renderWithProviders } from 'utils/test.utils';
import Badge from 'components/atoms/Badge/Badge';
import { fireEvent, screen, cleanup } from '@testing-library/react';
import VotingsItem, { VotingsItemProps } from './VotingsItem';
import { addLeadingZero, dateDiffinDays, switchVariant } from './VotingsItem.utils';

describe('VotingsItem', () => {
  afterEach(cleanup);
  const item = ({ deadlineDate }: VotingsItemProps) =>
    renderWithProviders(<VotingsItem deadlineDate={deadlineDate} />, {});

  it('should renders correctly VotingsItem', () => {
    expect(
      item({
        deadlineDate: new Date(2023, 4, 19),
      }),
    ).toMatchSnapshot();
  });
  it('dateDiffinDays should calculate correctly positive difference between two dates', () => {
    const result = dateDiffinDays(new Date(2023, 3, 19), new Date(2023, 3, 21));
    expect(result).toEqual(2);
  });
  it('dateDiffinDays should calculate correctly negative difference between two dates', () => {
    const result = dateDiffinDays(new Date(2023, 3, 21), new Date(2023, 3, 19));
    expect(result).toEqual(-2);
  });

  it('addLeadingZero should add 0 at the beginning when result is less than 10 ', () => {
    const result = addLeadingZero(new Date(2023, 3, 5).getMonth() + 1);
    expect(result).toEqual('04');
  });
  it('addLeadingZero shouldnt add 0 at the beginning when result is bigger than 10 ', () => {
    const result = addLeadingZero(new Date(2023, 10, 5).getMonth() + 1);
    expect(result).toEqual('11');
  });
  it('switch variant switches correctly variants', () => {
    const result = switchVariant(new Date(2023, 10, 5), new Date(2023, 10, 6));
    expect(result).toEqual(
      <Badge variant='danger'>
        {dateDiffinDays(new Date(2023, 10, 5), new Date(2023, 10, 6))} days left
      </Badge>,
    );
  });
  it('votings item with voting successfuly unfolds and arrow icon rotates', async () => {
    item({
      deadlineDate: new Date(2023, 5, 20),
    });
    const unfold = screen.getByTestId('votings-item');
    const votingsItemIcon = screen.getByTestId('votings-item-icon');
    const unfoldedContainer = screen.getByTestId('unfolded-container');
    expect(unfoldedContainer).toHaveStyle('height: 0');
    expect(votingsItemIcon).toHaveStyle('transform: rotate(90deg)');
    await fireEvent.click(unfold);
    expect(unfoldedContainer).toHaveStyle('height: 10rem');
    expect(votingsItemIcon).toHaveStyle('transform: rotate(270deg)');
  });
  it('votings item with chart successfuly unfolds and arrow icon rotates', async () => {
    item({
      deadlineDate: new Date(1995, 11, 17),
    });
    const unfold = screen.getByTestId('votings-item');
    const votingsItemIcon = screen.getByTestId('votings-item-icon');
    const unfoldedContainer = screen.getByTestId('unfolded-container');
    expect(unfoldedContainer).toHaveStyle('height: 0');
    expect(votingsItemIcon).toHaveStyle('transform: rotate(90deg)');
    await fireEvent.click(unfold);
    expect(unfoldedContainer).toHaveStyle('height: 20rem');
    expect(votingsItemIcon).toHaveStyle('transform: rotate(270deg)');
  });
});
