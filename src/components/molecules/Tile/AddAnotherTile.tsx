import Typography from 'components/atoms/Typography/Typography';
import { useAppSelector } from 'store/hooks';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';

import * as Styled from './Tile.styled';
import { AddAnotherTileProps, anotherTileDefaultProps } from './Tiles.types';

const AddAnotherTile = ({ img }: AddAnotherTileProps) => {
  const { palette } = useContext(ThemeContext);
  const userRole = useAppSelector((state) => state.user.role);

  return (
    <Styled.AddAnotherTileWrapper palette={palette}>
      <Styled.BuildingImage src={img} alt={userRole === 'manager' ? 'building' : 'flat'} />
      <Styled.CardContent>
        <Typography variant='header3' color='inputGrey'>
          Add a new {userRole === 'manager' ? 'Building' : 'Flat'}
        </Typography>
      </Styled.CardContent>
    </Styled.AddAnotherTileWrapper>
  );
};

AddAnotherTile.defaultProps = anotherTileDefaultProps;

export default AddAnotherTile;
