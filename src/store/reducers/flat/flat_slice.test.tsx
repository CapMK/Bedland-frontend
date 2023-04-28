import { flatReducer, removeAllFlats, flatAdapter } from './flat_slice';
import Flat from './flat_slice.types';

const fakeFlat: Flat = {
  id: 1,
  version: 1,
  buildingId: 1,
  number: 'fakeFlatNumber',
  floor: 1,
  shapePath: 'fakeShapePath',
};

describe('flatSlice', () => {
  it(`should remove all flats when ${removeAllFlats}`, () => {
    const action = removeAllFlats();
    const state = flatReducer(flatAdapter.getInitialState(fakeFlat), action);

    const newState = flatReducer(state, action);
    expect(newState.entities).toEqual({});
  });
});
