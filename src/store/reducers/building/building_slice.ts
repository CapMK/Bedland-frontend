import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { buildingsApi } from 'services/buildings/buildingsApi';
import { userApi } from 'services/user/userApi';
import type { RootState } from 'store/store';
import { Building } from 'types/shared.types';

export const buildingAdapter = createEntityAdapter<Building>({
  selectId: (building) => building.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const BuildingSlice = createSlice({
  name: 'building',
  initialState: buildingAdapter.getInitialState(),
  reducers: {
    setBuildingList: buildingAdapter.setAll,
    removeBuildingList: buildingAdapter.removeAll,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      buildingsApi.endpoints.getAllBuildingsByManager.matchFulfilled,
      (state, { payload }) => {
        buildingAdapter.setAll(
          state,
          payload.map((inputBuilding) => {
            const building = {
              id: inputBuilding.id,
              managerId: inputBuilding.managerId,
              name: inputBuilding.name,
              address: inputBuilding.address,
              floors: inputBuilding.floors,
              version: inputBuilding.version,
              createDate: inputBuilding.createDate,
              updateDate: inputBuilding.createDate,
            };
            return building;
          }),
        );
      },
    );
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, buildingAdapter.removeAll);
  },
});

export const { setBuildingList, removeBuildingList } = BuildingSlice.actions;
export const buildingReducer = BuildingSlice.reducer;

export const selectBuildingList = (state: RootState) => state.building.entities;
