import { cleanup, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  afterEach(cleanup);
  describe('SearchBar component', () => {
    const placeholderText = 'Search...';

    const searchBarRender = () =>
      renderWithProviders(
        <div>
          <div data-testid='testDiv'>SomeTest</div>
          <SearchBar placeholder={placeholderText} />, {}
        </div>,
      );
    it('should render correctly', () => {
      const searchBar = searchBarRender();
      expect(searchBar).toMatchSnapshot();
    });

    it('should show the dropdown and the remove button when the search input is focused', () => {
      const { getByTestId } = searchBarRender();
      const inputField = getByTestId('SearchBarInput');
      fireEvent.focus(inputField);
      fireEvent.change(inputField, { target: { value: 'a' } });
      const dropdown = getByTestId('dropdownList');
      expect(dropdown).toBeTruthy();
      const removeIcon = getByTestId('remove-icon');
      expect(removeIcon).toBeTruthy();
    });

    it('should clear input, unfocus input and close dropdown after remove button click ', () => {
      const { getByTestId, queryByTestId } = searchBarRender();
      const inputField = getByTestId('SearchBarInput');
      fireEvent.focus(inputField);
      fireEvent.change(inputField, { target: { value: 'a' } });
      const removeIcon = getByTestId('remove-icon');
      fireEvent.click(removeIcon);

      const dropdown = queryByTestId('dropdownList');
      const removeIconAfterClick = queryByTestId('remove-icon');
      expect(dropdown).toBeFalsy();
      expect(removeIconAfterClick).toBeFalsy();
      expect(inputField).not.toHaveFocus();

      expect(inputField).toHaveValue('');
    });

    it('should hide the dropdown on the outside component click', () => {
      const { getByTestId, queryByTestId } = searchBarRender();
      const inputField = getByTestId('SearchBarInput');
      const testDiv = getByTestId('testDiv');
      fireEvent.focus(inputField);
      fireEvent.click(testDiv);

      const dropdown = queryByTestId('dropdownList');
      expect(dropdown).toBeFalsy();
    });

    it('should show dropdown when focused on the search field with text', () => {
      const { getByTestId, queryByTestId } = searchBarRender();
      const inputField = getByTestId('SearchBarInput');
      const testDiv = getByTestId('testDiv');
      fireEvent.change(inputField, { target: { value: 'bar' } });
      fireEvent.click(testDiv);
      fireEvent.focus(inputField);

      const dropdown = queryByTestId('dropdownList');
      expect(dropdown).toBeTruthy();
    });

    it('should show filtered list items in the dropdown when user types in the search field', () => {
      const { getByTestId } = searchBarRender();
      const inputField = getByTestId('SearchBarInput');
      fireEvent.change(inputField, { target: { value: 'a' } });

      const listItemContainers = getByTestId('dropdownList').querySelectorAll('li');
      expect(listItemContainers.length > 0).toBe(true);
    });

    it('should show no results message when user types wrong value in the search field', () => {
      const { getByTestId } = searchBarRender();
      const inputField = getByTestId('SearchBarInput');
      fireEvent.change(inputField, { target: { value: 'xas' } });
      expect(screen.getByText('No results'));
    });

    it('should select a list item when it is clicked on and update the search value', () => {
      const { getByTestId } = searchBarRender();
      const inputField = getByTestId('SearchBarInput');
      fireEvent.focus(inputField);
      fireEvent.change(inputField, { target: { value: 'a' } });
      const listItemContainers = getByTestId('dropdownList').querySelectorAll('li');
      const firstListItemContainer = listItemContainers[0];
      fireEvent.click(firstListItemContainer);

      expect((inputField as HTMLInputElement).value).toBe('Bartek');
    });
  });
});
