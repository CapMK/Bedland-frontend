import Page from 'components/templates/Page/Page';
// eslint-disable-next-line import/no-named-default
import { default as FlatsList } from 'components/organisms/DisplayList/DisplayList';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import mockResidentFlats from 'utils/mock/mockResidentsFlats';
import * as Styled from './FlatsPage.styled';

const FlatsPage = () => (
  <Page title='Flats'>
    <Styled.FlatsPageContent>
      <Styled.SearchInputContainer>
        <SearchBar placeholder='Search flats...' />
      </Styled.SearchInputContainer>
      <FlatsList displayList={mockResidentFlats} />
    </Styled.FlatsPageContent>
  </Page>
);

export default FlatsPage;
