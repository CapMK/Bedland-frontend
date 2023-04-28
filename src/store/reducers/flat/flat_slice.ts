import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { flatApi } from 'services/flat/flatApi';
import { userApi } from 'services/user/userApi';
import type { RootState } from 'store/store';
import Flat from './flat_slice.types';

export const flatAdapter = createEntityAdapter<Flat>({
  selectId: (flat) => flat.id,
  sortComparer: (a, b) => a.number.localeCompare(b.number),
});

export const FlatSlice = createSlice({
  name: 'flat',
  initialState: flatAdapter.getInitialState(),
  reducers: {
    removeAllFlats: flatAdapter.removeAll,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      flatApi.endpoints.getAllFlatsForBuilding.matchFulfilled,
      (state, { payload }) => {
        flatAdapter.setAll(
          state,
          payload.map((inputFlat: Flat) => {
            const flat: Flat = {
              id: inputFlat.id,
              version: inputFlat.version,
              buildingId: inputFlat.buildingId,
              number: inputFlat.number,
              floor: inputFlat.floor,
              shapePath: inputFlat.shapePath,
            };
            return flat;
          }),
        );
      },
    );
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, flatAdapter.removeAll);
  },
});

export const { removeAllFlats } = FlatSlice.actions;

export const flatReducer = FlatSlice.reducer;

export const selectFlatsList = (state: RootState) => state.flat;
