import Button from 'components/atoms/Button/Button';
import Typography from 'components/atoms/Typography/Typography';
import { useAppSelector } from 'store/hooks';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import routes from 'App/routing/routes';
import { NavLink } from 'react-router-dom';

import * as Styled from './Tile.styled';
import { TileProps, tileDefaultProps } from './Tiles.types';

const Tile = ({ title, subtitle, img, id }: TileProps) => {
  const { palette } = useContext(ThemeContext);
  const userRole = useAppSelector((state) => state.user.role);

  return (
    <Styled.TileWrapper palette={palette} role='listitem'>
      <Styled.BuildingImage src={img} alt={userRole === 'manager' ? 'building' : 'flat'} />
      <Styled.CardContent>
        <Typography variant='header3' color='inputGrey'>
          {title}
        </Typography>
        <Typography variant='paragraph' color='inputGrey'>
          {subtitle}
        </Typography>
        <Button wrapper marginTop={1}>
          <NavLink to={routes.buildingDetails.replace(':id', id)}>
            <Button variant='primary' color='blue'>
              Open details
            </Button>
          </NavLink>
        </Button>
      </Styled.CardContent>
    </Styled.TileWrapper>
  );
};

Tile.defaultProps = tileDefaultProps;

export default Tile;
