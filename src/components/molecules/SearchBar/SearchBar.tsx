import { ChangeEvent, FC, useState, useEffect, useRef } from 'react';
import Icon from 'components/atoms/Icon/Icon';
import Typography from 'components/atoms/Typography/Typography';
import Button from 'components/atoms/Button/Button';
import * as Styled from './SearchBar.styled';
import { STATIC_VALUES, exeList, searchFilter } from './SearchBar.utils';
import { ExeListItemType, SearchBarProps } from './SearchBar.types';

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');
  const [ifDropdownVisible, setIfDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const matches = searchFilter(searchValue, exeList);

  const handleFocus = () => {
    setIsFocused(true);
    // eslint-disable-next-line no-unused-expressions
    searchValue.split('').length > 0 && setIfDropdownVisible(true);
  };
  const handleOnClickOutside = () => {
    setIsFocused(false);
    setIfDropdownVisible(false);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (!ifDropdownVisible) {
      setIfDropdownVisible(true);
    }
    if (e.target.value === '') setIfDropdownVisible(false);
  };
  const handleSelectItem = (item: ExeListItemType) => {
    setSearchValue(item.name);
    setIfDropdownVisible(false);
    setIsFocused(false);
  };
  const handleRemoveButton = async () => {
    setIfDropdownVisible(false);
    setSearchValue('');
    setIsFocused(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleOnClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <Styled.SearchBarContainer ifInputFocused={isFocused} ifDropdownVisible={ifDropdownVisible}>
        <Styled.SearchBarContent>
          <Icon
            name='search'
            isActive={false}
            size={STATIC_VALUES.iconSize}
            color={isFocused ? 'blueDark' : 'inputGrey'}
          />
          <Styled.Input
            data-testid='SearchBarInput'
            onFocus={handleFocus}
            value={searchValue}
            onChange={(e) => handleChange(e)}
            placeholder={isFocused ? '' : placeholder}
          />
        </Styled.SearchBarContent>
        {ifDropdownVisible ? (
          <Button wrapper style={{ marginRight: '0.6875rem' }}>
            <Button
              variant='icon'
              icon='remove'
              iconColor='greyDark'
              onClick={handleRemoveButton}
            />
          </Button>
        ) : null}
      </Styled.SearchBarContainer>
      <Styled.DropdownContainer>
        {ifDropdownVisible && (
          <Styled.DropdownList ifDropdownVisible={ifDropdownVisible} data-testid='dropdownList'>
            {exeList && matches.length > 0 ? (
              matches.map((listItem: ExeListItemType) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <Styled.DropdownTextContainer
                  key={listItem.id}
                  onClick={() => handleSelectItem(listItem)}
                >
                  {listItem.name.split('').map((letter, index) =>
                    searchValue
                      .toLowerCase()
                      .split('')
                      .find((searchLetter) => searchLetter === letter.toLowerCase()) ? (
                      <Typography variant='dataInputsAndTooltips' key={`${letter + index}`}>
                        <Styled.BoldedLetter>{letter}</Styled.BoldedLetter>
                      </Typography>
                    ) : (
                      <Typography variant='dataInputsAndTooltips' key={`${letter + index}`}>
                        {letter}
                      </Typography>
                    ),
                  )}
                </Styled.DropdownTextContainer>
              ))
            ) : (
              <Styled.DropdownTextContainer>No results</Styled.DropdownTextContainer>
            )}
          </Styled.DropdownList>
        )}
      </Styled.DropdownContainer>
    </div>
  );
};

export default SearchBar;
