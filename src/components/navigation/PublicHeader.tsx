import { NavLink } from 'react-router-dom';

import logoApp from '../../assets/logo.png';

import { APP_PUBLIC_ROUTES } from '../../routes/utils/constants';

const PublicHeader = () => (
  <nav className='flex items-center justify-between h-20 px-6 shadow-xl bg-purple-950'>
    <section className='flex items-center h-full gap-8'>
      <NavLink to={APP_PUBLIC_ROUTES.HOME} className='hover:saturate-200'>
        <img src={logoApp} className='rounded-full size-14' alt='Logo OdontoApp' />
      </NavLink>

      <ul className='flex items-center gap-4'>
        <li>
          <NavLink
            className={({ isActive }) =>
              `text-white transition-[background] appearance-none p-3 rounded-lg ${
                isActive ? 'bg-green-700/90 font-semibold' : 'hover:bg-black/15'
              }`
            }
            to={APP_PUBLIC_ROUTES.DENTALHEALTH}
          >
            Salud Dental
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `text-white transition-[background] appearance-none p-3 rounded-lg ${
                isActive ? 'bg-green-700/90 font-semibold' : 'hover:bg-black/15'
              }`
            }
            to={APP_PUBLIC_ROUTES.FAQ}
          >
            Preguntas Frecuentes
          </NavLink>
        </li>
      </ul>
    </section>

    <section>
      <NavLink
        className='inline-flex py-3 px-6 font-semibold transition-[background,transform] text-white bg-sky-600 rounded-lg hover:bg-sky-400 hover:scale-105'
        to={APP_PUBLIC_ROUTES.LOGIN}
      >
        Iniciar Sesión
      </NavLink>
    </section>
  </nav>
);

export default PublicHeader;
