import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Page from 'components/templates/Page/Page';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import GenericTable from 'components/organisms/GenericTable/GenericTable';
// import SortButton from 'components/molecules/SortButton/SortButton';
import ViewSwitch from 'components/molecules/ViewSwitch/ViewSwitch';
import Typography from 'components/atoms/Typography/Typography';
import { buildingDetailsNodes } from 'utils/mock/mockGenericTable';
import { TABLE_NAMES } from 'components/organisms/GenericTable/GenericTable.types';
import routes from 'App/routing/routes';
import * as Styled from './BuildingDetailsPage.styled';

const viewSwitchLabel = 'Change view';

const BuildingDetailsPage = () => {
  const location = useLocation();
  const buildingId = parseInt(location.pathname.slice(11), 10);
  const [buildingDetailsList, setBuildingDetailsList] = useState(buildingDetailsNodes);

  const title = `Building # ${buildingId || 0}`;
  return (
    <Page title={title} goBack={routes.buildings}>
      <Styled.BuildingDetailsPageContent>
        <Styled.UpperBar>
          <Styled.SortSearchContainer>
            {/* <SortButton text='Sort flats' changeSortOption={handleSortChange} /> */}
            <div>Here goes sort button after PR for BL-204</div>
            <SearchBar placeholder='Search flat...' />
          </Styled.SortSearchContainer>
          <Styled.ViewSwitchContainer>
            <Typography variant='header4' color='text'>
              {viewSwitchLabel}
            </Typography>
            <ViewSwitch />
          </Styled.ViewSwitchContainer>
        </Styled.UpperBar>

        <GenericTable nodes={buildingDetailsList} isSelect tableName={TABLE_NAMES.buildingsTable} />
      </Styled.BuildingDetailsPageContent>
    </Page>
  );
};

export default BuildingDetailsPage;
