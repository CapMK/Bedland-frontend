import type { Resident } from 'store/reducers/resident/resident_slice';
import type { User } from 'store/reducers/user/user_slice';

export type Manager = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type LoginRequest = {
  login: string;
  password: string;
};

export type ResponseRoles = 'ROLE_MANAGER' | 'ROLE_USER';

export type UserRequest = {
  userId: string;
  role: ResponseRoles;
};

export type LogoutRequest = Pick<User, 'role'>;

export type LoginResponse = {
  status: string;
  data: { message: string };
  token: string;
  userId: string;
  role: ResponseRoles;
};

export type LogoutResponse = {
  status: string;
  data: { message: string };
};

export type UserResponse = (Manager & User) | (Resident & User);
