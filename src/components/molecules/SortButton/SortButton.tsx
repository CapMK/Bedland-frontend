import { useState, useEffect, useRef, useContext } from 'react';
import Button from 'components/atoms/Button/Button';
import { ThemeContext } from 'theme/ThemeContext';
import Typography from 'components/atoms/Typography/Typography';
import * as Styled from './SortButton.styled';
import { SortButtonProps, sortOptions, sortType } from './SortButton.types';

const SortButton = ({ text, changeSortOption }: SortButtonProps) => {
  const { palette } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSortOption, setActiveSortOption] = useState<sortType>('name');
  const ref = useRef<HTMLDivElement | null>(null);

  const handleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const onClickOutside = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const handleSortClick = (sortIndex: sortType): void => {
    setActiveSortOption(sortIndex);
    changeSortOption(sortIndex);
    onClickOutside();
  };

  return (
    <Styled.DropdownBox ref={ref}>
      <Button
        variant='primary'
        color='white'
        hover='text'
        icon='arrowDown'
        iconSize={12}
        onClick={handleDropdown}
      >
        {text}
      </Button>

      {isOpen ? (
        <Styled.SortDropdown palette={palette}>
          {sortOptions.map((item) => (
            <Styled.SortItem
              palette={palette}
              active={item === activeSortOption}
              onClick={() => handleSortClick(item)}
              key={item}
            >
              <Typography variant='header5' color={item === activeSortOption ? 'white' : 'text'}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Typography>
            </Styled.SortItem>
          ))}
        </Styled.SortDropdown>
      ) : null}
    </Styled.DropdownBox>
  );
};

export default SortButton;
