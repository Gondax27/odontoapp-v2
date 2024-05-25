import { NavLink } from 'react-router-dom';
import Tooltip from 'rc-tooltip';

import Spinner from '@/components/spinners';

import useLogin from './hooks/useLogin';

import { APP_PUBLIC_ROUTES } from '../../routes/utils/constants';

import ArrowIcon from '../../assets/svg/ArrowIcon';
import LogoApp from '../../assets/logo.png';

const LoginPage = () => {
  const { isPending, handleSubmitLogin } = useLogin();

  return (
    <section className='content-center min-w-full min-h-screen !overflow-hidden [background-image:url("/src/assets/login_background.jpg")]'>
      <div className='max-w-sm mx-auto sm:max-w-md md:max-w-lg'>
        <form className='w-full h-auto p-6 rounded-md bg-black/70' onSubmit={handleSubmitLogin}>
          <img src={LogoApp} alt='Logo OndontoApp' className='m-auto size-28' />
          <h1 className='text-3xl text-center text-white'>Inicio de Sesión</h1>

          <fieldset className='mt-5'>
            <label htmlFor='login-email-input' className='block text-lg text-white w-fit'>
              Email
            </label>

            <input
              id='login-email-input'
              name='email'
              className='w-full h-8 p-2 rounded-sm outline-none appearance-none focus:border-purple-900 focus:border-2'
              type='text'
              placeholder='Escribe tu email...'
              disabled={isPending}
            />
          </fieldset>

          <fieldset className='mt-5'>
            <label htmlFor='login-password-input' className='block text-lg text-white w-fit'>
              Contraseña
            </label>

            <input
              id='login-password-input'
              name='password'
              className='w-full h-8 p-2 rounded-sm outline-none appearance-none focus:border-purple-900 focus:border-2'
              type='password'
              placeholder='Escribe tu contraseña...'
              disabled={isPending}
            />
          </fieldset>

          <section className='flex items-center justify-between mt-6'>
            <Tooltip overlay='Regresar al inicio'>
              <NavLink
                to={APP_PUBLIC_ROUTES.HOME}
                className={`py-2 px-2 text-white rounded-md bg-green-700/90 hover:bg-green-600 transition-[background] ${isPending ? 'pointer-events-none' : ''}`}
              >
                <ArrowIcon className='size-6' />
              </NavLink>
            </Tooltip>

            {isPending
              ? <Spinner />

              : (
                <button
                  disabled={isPending}
                  className='px-6 py-2 text-white bg-purple-900 rounded-md hover:bg-purple-600 transition-[background]'
                >
                  Iniciar Sesión
                </button>
              )
            }
          </section>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
