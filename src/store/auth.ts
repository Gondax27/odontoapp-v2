import { create } from 'zustand';

import { AuthStore } from '@/types/auth';

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: '',
  isAuth: false,
  loginUser: ({ token, user }) => {
    localStorage.setItem('token', token);
    const newUser = structuredClone({ ...user, lastName: user?.last_name || '' });
    set({ token, user: newUser, isAuth: true });
  },
  logoutUser: () => {
    localStorage.removeItem('token');
    set({ token: '', user: null, isAuth: false });
  },
  updateUserData: (user) => {
    const newUser = structuredClone({ ...user, lastName: user?.last_name || '' });
    set({ user: newUser });
  }
}));
