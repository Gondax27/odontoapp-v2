import React, { useCallback, useState } from 'react';

import { AuthService } from '@/services/auth';
import { useAuthStore } from '@/store/auth';

const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');

  const loginUser = useAuthStore(state => state.loginUser);

  /**
   * Function that submit login form
   */
  const handleSubmitLogin = useCallback(
    async (ev: React.FormEvent<HTMLFormElement>) => {
      try {
        ev.preventDefault();
        setIsPending(true);

        const formData = new FormData(ev.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const data = await AuthService.login(email, password);
        loginUser(data);
      } catch (error) {
        setError('User or password incorrects');
        setTimeout(() => setError('User or password incorrects'), 4000);
      } finally {
        setIsPending(false);
      }
    },
    [loginUser]
  );

  return {
    error,
    isPending,
    handleSubmitLogin
  };
};

export default useLogin;
