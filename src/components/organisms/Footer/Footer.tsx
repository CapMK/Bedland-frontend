import Typography from 'components/atoms/Typography/Typography';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './Footer.styled';

const Footer = () => {
  const { palette } = useContext(ThemeContext);
  return (
    <Styled.FooterBox palette={palette}>
      <Typography variant='paragraph' color='light' style={{ fontWeight: 600 }}>
        ©BedLand 2023
      </Typography>
    </Styled.FooterBox>
  );
};

export default Footer;
