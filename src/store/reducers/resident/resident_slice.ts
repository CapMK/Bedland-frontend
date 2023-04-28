import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { residentApi } from 'services/resident/residentApi';
import { userApi } from 'services/user/userApi';
import type { RootState } from 'store/store';

export type Resident = {
  id: string;
  name: string;
  lastName: string;
  flatId: string;
  isOwner: boolean;
};

export const residentAdapter = createEntityAdapter<Resident>({
  selectId: (resident) => resident.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const ResidentSlice = createSlice({
  name: 'resident',
  initialState: residentAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      residentApi.endpoints.getAllResidents.matchFulfilled,
      (state, { payload }) => {
        residentAdapter.setAll(
          state,
          payload.map((item) => {
            const resident: Resident = {
              id: item.id,
              name: item.name,
              lastName: item.lastName,
              flatId: item.flatId,
              isOwner: item.owner,
            };
            return resident;
          }),
        );
      },
    );
    // builder.addMatcher(userApi.endpoints.getAllResidentListByBuildingId.matchFulfilled, (residentAdapter.setAll);
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, residentAdapter.removeAll);
  },
});

export const residentReducer = ResidentSlice.reducer;

export const selectResidentList = (state: RootState) => state.resident;
