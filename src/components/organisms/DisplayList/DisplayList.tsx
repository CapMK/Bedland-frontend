import { useAppSelector } from 'store/hooks';
import Tile from 'components/molecules/Tile/Tile';
import AddAnotherTile from 'components/molecules/Tile/AddAnotherTile';
import { DisplayListProps } from './DisplayList.types';
import * as Styled from './DisplayList.styled';
import getCity from './DisplayList.utils';

const DisplayList = ({ displayList }: DisplayListProps) => {
  const userRole = useAppSelector((state) => state.user.role);
  const isManager = userRole === 'manager';
  const keyAttribute = isManager ? 'building' : 'flat';

  return (
    <Styled.DisplayContainer role='list' aria-labelledby='displaylist'>
      {displayList &&
        displayList.map((listItem) => (
          <Tile
            key={`${keyAttribute}-${'id' in listItem ? listItem.id : listItem.flatId}`}
            title={'name' in listItem ? listItem.name : `Flat #${listItem.flatNumber}`}
            subtitle={
              'address' in listItem ? `${getCity(listItem.address)}, Poland` : listItem.flatAddress
            }
            id={'id' in listItem ? listItem.id : listItem.flatId}
          />
        ))}
      {displayList.length < 5 && <AddAnotherTile />}
    </Styled.DisplayContainer>
  );
};
export default DisplayList;
