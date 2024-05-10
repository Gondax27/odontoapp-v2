import type { User, UserRequest } from './user';

export type LoginData = {
  user: UserRequest;
  token: string;
};

export interface AuthStore {
  user: User | null;
  token: string;
  isAuth: boolean;
  loginUser: (data: LoginData) => void;
  logoutUser: () => void;
  updateUserData: (userData: UserRequest) => void;
}
