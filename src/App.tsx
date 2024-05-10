import { useEffect, useState } from 'react';

import RouterSetup from './routes';

import { AuthService } from './services/auth';
import { useAuthStore } from './store/auth';
import Spinner from './components/spinners';

const App = () => {
  const [loadingData, setLoadingData] = useState(false);
  const loginUser = useAuthStore((state) => state.loginUser);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setLoadingData(true);
      AuthService.verifyToken(token)
        .then((result) => loginUser({ token, user: result }))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoadingData(false));
    }
  }, []); // eslint-disable-line

  return (
    loadingData
      ? (
        <main className='flex items-center justify-center w-full min-h-dvh'>
          <Spinner />
        </main>
      )
      : <RouterSetup />
  );
};

export default App;
