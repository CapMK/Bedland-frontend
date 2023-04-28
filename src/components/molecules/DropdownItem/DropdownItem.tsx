import Icon from 'components/atoms/Icon/Icon';
import Typography from 'components/atoms/Typography/Typography';
import * as Styled from './DropdownItem.styled';
import DropdownItemProps from './DropdownItem.types';

const DropdownItem = ({ linkRoute, iconName, label, color, onClick }: DropdownItemProps) => (
  <Styled.DropdownItem to={linkRoute} onClick={onClick} data-testid='dropdown-item'>
    <Icon name={iconName} size={20} color={color} isActive={false} activeColor='inputGrey' />
    <Typography color={color} variant={iconName === 'logout' ? 'header4' : 'paragraph'}>
      {label}
    </Typography>
  </Styled.DropdownItem>
);

export default DropdownItem;
