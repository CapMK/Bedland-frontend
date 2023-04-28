import { renderWithProviders } from 'utils/test.utils';
import { fireEvent, screen, cleanup } from '@testing-library/react';
import initialTheme from 'theme/initialTheme';
import { vi } from 'vitest';
import SortButton from './SortButton';
import {
  flatsListSortedByCity,
  flatsListSortedByDateAdded,
  flatsListSortedByName,
  flatsListToSort,
  listSortedByCity,
  listSortedByDateAdded,
  listSortedByName,
  listToSort,
  sortList,
} from './SortButton.utils';
import { sortOptions } from './SortButton.types';

const mockSort = vi.fn();

describe('SortButton', () => {
  afterEach(cleanup);

  const componentSortButton = () =>
    renderWithProviders(<SortButton text='Sort Buildings' changeSortOption={mockSort} />, {});

  it('renders correctly', () => {
    const snapshot = renderWithProviders(
      <SortButton text='Sort Buildings' changeSortOption={mockSort} />,
      {},
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('dropdown opens and closes when button is clicked', () => {
    componentSortButton();
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    fireEvent.click(sortButton);
    const dropdownOpen = screen.getByText(/date added/i);
    expect(dropdownOpen).toBeTruthy();
    fireEvent.click(sortButton);
    const dropdownClosed = screen.queryByText(/date added/i);
    expect(dropdownClosed).toBeFalsy();
  });

  it('dropdown closes when sorting option is clicked', () => {
    componentSortButton();
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    fireEvent.click(sortButton);
    const sortOption = screen.getByText(/date added/i);
    fireEvent.click(sortOption);
    const dropdownClosed = screen.queryByText(/date added/i);
    expect(dropdownClosed).toBeFalsy();
  });

  it('sorting option is active after selecting it and opening dropdown again', () => {
    componentSortButton();
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    fireEvent.click(sortButton);
    const sortOption = screen.getByText(/date added/i);
    fireEvent.click(sortOption);
    fireEvent.click(sortButton);
    const activeSortOption = screen.getByText(/date added/i).parentElement;
    expect(activeSortOption).toHaveStyle(`background: ${initialTheme.palette.blueDark}`);
  });

  it('dropdown closes when a click occurs anywhere on the site', () => {
    renderWithProviders(
      <>
        <SortButton text='Sort Buildings' changeSortOption={mockSort} />
        <p data-testid='click-anywhere'>click anywhere</p>
      </>,
      {},
    );
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    const clickAnywhere = screen.getByTestId('click-anywhere');
    fireEvent.click(sortButton);
    fireEvent.click(clickAnywhere);
    const dropdownClosed = screen.queryByText(/date added/i);
    expect(dropdownClosed).toBeFalsy();
  });

  it.each([
    [sortOptions[0], listSortedByName],
    [sortOptions[1], listSortedByCity],
    [sortOptions[2], listSortedByDateAdded],
  ])('sortList correctly sorts buildings list by %s', (sortOption, expected) => {
    expect(sortList(listToSort, sortOption)).toEqual(expected);
  });

  it.each([
    [sortOptions[0], flatsListSortedByName],
    [sortOptions[1], flatsListSortedByCity],
    [sortOptions[2], flatsListSortedByDateAdded],
  ])('sortList correctly sorts flats list by %s', (sortOption, expected) => {
    expect(sortList(flatsListToSort, sortOption)).toEqual(expected);
  });
});
