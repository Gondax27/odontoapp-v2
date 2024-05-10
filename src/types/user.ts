import type { UserType } from './user_types';

export interface User {
  _id: string;
  email: string;
  lastName: string;
  name: string;
  phone: string;
  type: UserType | null;
}

export interface UserRequest {
  _id: string;
  email: string;
  last_name: string;
  name: string;
  phone: string;
  type: UserType | null;
}

export interface UserBody {
  email: string;
  last_name: string;
  name: string;
  phone: string;
  type: string;
}
