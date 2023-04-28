import { combineReducers, configureStore, type PreloadedState } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import loggerMiddleware from 'redux-logger';
import { userApi } from 'services/user/userApi';
import { votingApi } from 'services/voting/votingApi';
import { buildingsApi } from 'services/buildings/buildingsApi';
import { residentApi } from 'services/resident/residentApi';
import { paymentsApi } from 'services/payments/paymentsApi';
import { flatApi } from 'services/flat/flatApi';
import { managerApi } from 'services/manager/managerApi';

import {
  residentReducer,
  buildingReducer,
  userReducer,
  flatReducer,
  paymentReducer,
  votingsReducer,
} from './reducers/index';

import { managerReducer } from './reducers/manager/manager_slice';

export const rootReducer = combineReducers({
  user: userReducer,
  resident: residentReducer,
  manager: managerReducer,
  building: buildingReducer,
  flat: flatReducer,
  payment: paymentReducer,
  voting: votingsReducer,
  [userApi.reducerPath]: userApi.reducer,
  [votingApi.reducerPath]: votingApi.reducer,
  [votingApi.reducerPath]: votingApi.reducer,
  [flatApi.reducerPath]: flatApi.reducer,
  [managerApi.reducerPath]: managerApi.reducer,
  [residentApi.reducerPath]: residentApi.reducer,
  [buildingsApi.reducerPath]: buildingsApi.reducer,
  [paymentsApi.reducerPath]: paymentsApi.reducer,
});

// Adding the api middleware enables caching, invalidation, polling,
// and other useful features of `rtk-query`.
export const rootMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    loggerMiddleware,
    userApi.middleware,
    buildingsApi.middleware,
    flatApi.middleware,
    managerApi.middleware,
    votingApi.middleware,
    votingApi.middleware,
    residentApi.middleware,
    buildingsApi.middleware,
    paymentsApi.middleware,
  );

export type RootState = ReturnType<typeof rootReducer>;

const storeInit = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: rootMiddleware,
    preloadedState,
  });

export const reduxStore = storeInit();

export type AppStore = ReturnType<typeof storeInit>;
export type AppDispatch = AppStore['dispatch'];
