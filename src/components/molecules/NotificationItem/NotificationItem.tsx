import Button from 'components/atoms/Button/Button';
import { ThemeContext } from 'theme/ThemeContext';
import { useContext, useState } from 'react';
import Typography from 'components/atoms/Typography/Typography';
import Icon from 'components/atoms/Icon/Icon';
import { IconName } from 'components/atoms/Icon/icon.types';
import * as Styled from './NotificationItem.styled';

export type NotificationItemProps = {
  icon: IconName;
  date: string;
  text: string;
};

const NotificationItem = ({ icon, date, text }: NotificationItemProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  const { palette } = useContext(ThemeContext);
  return (
    <Styled.NotificationItemContainer palette={palette}>
      <Icon name={icon} size={18} color='inputGrey' isActive={false} />

      <Typography variant='header5' style={{ fontWeight: isClicked ? '400' : '600' }}>
        {date}
      </Typography>
      <Typography variant='header5' style={{ fontWeight: isClicked ? '400' : '600' }}>
        <Styled.NotificationItemText>{text}</Styled.NotificationItemText>
      </Typography>
      <Button wrapper width={4.69} height={2}>
        <Button type='submit' variant='notificationItem' onClick={handleClick}>
          Details
        </Button>
      </Button>
    </Styled.NotificationItemContainer>
  );
};

export default NotificationItem;
