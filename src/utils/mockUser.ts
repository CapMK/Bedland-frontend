import { User } from 'store/reducers/user/user_slice';

export const mockUserCredentials = {
  residentUsername: 'testmember',
  managerUsername: 'testmanager',
  password: '!Test123!',
};

export const loggedInManagerUser = {
  loggedIn: true,
  status: 'success',
  error: undefined,
  userId: '122',
  login: mockUserCredentials.managerUsername,
  token: undefined,
  role: 'manager',
} as User;

export const loggedInResidentUser = {
  loggedIn: true,
  status: 'success',
  error: undefined,
  userId: '122',
  login: mockUserCredentials.residentUsername,
  token: undefined,
  role: 'resident',
} as User;

export const loggedOutManagerUser = {
  loggedIn: false,
  status: 'idle',
  userId: undefined,
  login: undefined,
  token: undefined,
  role: 'manager',
} as User;

export const loggedOutResidentUser = {
  loggedIn: false,
  status: 'idle',
  userId: undefined,
  login: undefined,
  token: undefined,
  role: 'resident',
} as User;
