import Button from 'components/atoms/Button/Button';
import { useState } from 'react';
import { whichButton } from './FilterButton.utils';

const FilterButton = () => {
  const [ifActive, setIfActive] = useState<boolean>(false);
  const { buttonType, text } = whichButton(ifActive);
  const handleFilterButton = () => setIfActive(!ifActive);

  return (
    <Button wrapper>
      <Button
        variant={buttonType}
        color='white'
        hover='text'
        icon='filterButton'
        onClick={handleFilterButton}
      >
        {text}
      </Button>
    </Button>
  );
};

export default FilterButton;
