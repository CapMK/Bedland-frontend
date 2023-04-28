import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import { loggedInManagerUser, loggedInResidentUser } from 'utils/mockUser';
import mockBuildingsList from 'utils/mock/mockBuildingsList';
import mockResidentFlats from 'utils/mock/mockResidentsFlats';
import DisplayList from './DisplayList';
import getCity from './DisplayList.utils';

describe('DisplayList', () => {
  afterEach(cleanup);
  it('buildings list renders correctly', () => {
    const buildingsList = renderWithProviders(<DisplayList displayList={mockBuildingsList} />, {
      preloadedState: {
        user: loggedInManagerUser,
      },
    });
    expect(buildingsList).toMatchSnapshot();
  });

  it('flats list renders correctly', () => {
    const flatsList = renderWithProviders(<DisplayList displayList={mockResidentFlats} />, {
      preloadedState: {
        user: loggedInResidentUser,
      },
    });
    expect(flatsList).toMatchSnapshot();
  });

  it('getCity gets city from address with zip code', () => {
    const city = getCity('ulica Kruczkowskiego 001, 10-029 Opole');
    expect(city).toBe('Opole');
  });

  it('getCity gets city from address without zip code', () => {
    const city = getCity('ulica Kruczkowskiego 001, Opole');
    expect(city).toBe('Opole');
  });
});
