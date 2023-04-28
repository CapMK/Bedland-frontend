import Icon from 'components/atoms/Icon/Icon';
import { useState } from 'react';
import * as Styled from './ViewSwitch.styled';

const ViewSwitch = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Styled.Switcher data-testid='view-switch'>
      <Styled.CustomInput type='checkbox' onClick={() => setChecked(!checked)} />
      <Styled.Slider checked={checked} data-testid='view-switch-slider'>
        <Icon name='listbox' size={16} color={checked ? 'greyDark' : 'blueDark'} isActive={false} />
        <Icon
          name='buildingPlan'
          size={16}
          color={checked ? 'blueDark' : 'greyDark'}
          isActive={false}
        />
      </Styled.Slider>
    </Styled.Switcher>
  );
};

export default ViewSwitch;
