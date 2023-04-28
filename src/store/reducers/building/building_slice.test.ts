import mockBuildingsList from 'utils/mock/mockBuildingsList';
import { Building } from 'types/shared.types';
import { BuildingSlice, buildingAdapter } from './building_slice';

describe('buildingSlice', () => {
  it('should set building list when setBuildingList is called', () => {
    const initialState = buildingAdapter.getInitialState();
    const action = BuildingSlice.actions.setBuildingList(mockBuildingsList);
    const newState = BuildingSlice.reducer(initialState, action);
    expect(newState.ids).toEqual(['4', '2', '5', '1', '3']);
    expect((newState.entities['1'] as Building).name).toEqual(mockBuildingsList[0].name);
    expect((newState.entities['2'] as Building).name).toEqual(mockBuildingsList[1].name);
  });

  it('should remove building list when removeBuildingList is called', () => {
    const initialState = buildingAdapter.setAll(
      buildingAdapter.getInitialState(),
      mockBuildingsList,
    );
    const newState = BuildingSlice.reducer(
      initialState,
      BuildingSlice.actions.removeBuildingList(),
    );
    expect(newState.ids.length).toEqual(0);
  });
});
