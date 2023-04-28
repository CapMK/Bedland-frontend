import { enhancer as withReduxEnhancer } from 'addon-redux';
import { combineReducers, configureStore, type PreloadedState } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import loggerMiddleware from 'redux-logger';
import { userApi } from '../src/services/user/userApi';
import { residentReducer, buildingReducer, userReducer } from '../src/store/reducers/index';

export const rootReducer = combineReducers({
  user: userReducer,
  resident: residentReducer,
  building: buildingReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const rootMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware().concat(loggerMiddleware, userApi.middleware);

const createEnhancer = () => {
  const enhancers = [];
  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(withReduxEnhancer);
  }
  return enhancers;
};

export type RootState = ReturnType<typeof rootReducer>;

const storeInit = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: rootMiddleware,
    preloadedState,
    enhancers: (defaultEnhancers) => [...createEnhancer(), ...defaultEnhancers],
  });

export const reduxStore = storeInit();
