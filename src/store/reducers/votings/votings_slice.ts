import { createSlice } from '@reduxjs/toolkit';
import { Voting, VotingDetail, votingApi } from 'services/voting/votingApi';

type VotingState = {
  votingsForResident: Voting[];
  votingsSummaryForManager: Voting[];
  votingDetails: VotingDetail[];
};

const votingsInitialState: VotingState = {
  votingsForResident: [],
  votingsSummaryForManager: [],
  votingDetails: [],
};

export const VotingsSlice = createSlice({
  name: 'votings',
  initialState: votingsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      votingApi.endpoints.getVotingsForResident.matchFulfilled,
      (state, { payload }) => {
        state.votingsForResident.push(...payload);
      },
    );

    builder.addMatcher(
      votingApi.endpoints.getVotingsSummaryForManager.matchFulfilled,
      (state: VotingState, { payload }) => {
        state.votingsSummaryForManager.push(...payload);
      },
    );

    builder.addMatcher(
      votingApi.endpoints.getVotingDetails.matchFulfilled,
      (state, { payload }) => {
        state.votingDetails.push(...payload);
      },
    );
  },
});

export const votingsReducer = VotingsSlice.reducer;
