import { userReducer } from './user/user_slice';
import { residentReducer } from './resident/resident_slice';
import { buildingReducer } from './building/building_slice';
import { flatReducer } from './flat/flat_slice';
import { votingsReducer } from './votings/votings_slice';
import { paymentReducer } from './payments/payments_slice';

export {
  buildingReducer,
  residentReducer,
  userReducer,
  flatReducer,
  votingsReducer,
  paymentReducer,
};
