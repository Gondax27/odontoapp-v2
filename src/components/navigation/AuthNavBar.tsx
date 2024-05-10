import { NavLink } from 'react-router-dom';
import Tooltip from 'rc-tooltip';

import { APP_PRIVATE_ROUTES } from '@/routes/utils/constants';

import CalendarClockIcon from '@/assets/svg/CalendarClockIcon';
import LogoApp from '@/assets/logo.png';
import ProfileIcon from '@/assets/svg/ProfileIcon';
import ToothIcon from '@/assets/svg/ToothIcon';
import TreatmentIcon from '@/assets/svg/TreatmentIcon';
import UserIcon from '@/assets/svg/UserIcon';

const AuthNavbar = () => (
  <nav className='relative flex flex-col items-center w-24 min-h-dvh bg-purple-950'>
    <div className='sticky top-0'>
      <NavLink to={APP_PRIVATE_ROUTES.HOME} className='hover:saturate-200'>
        <img src={LogoApp} alt='Logo OdontoApp' className='mt-6 size-14' />
      </NavLink>

      <hr className='mt-5 mb-3 border-white' />

      <section className='flex flex-col gap-2'>
        <Tooltip overlay='Perfil'>
          <NavLink
            to={APP_PRIVATE_ROUTES.PROFILE}
            className={({ isActive }) => `block p-2 rounded-md transition-[background] ${isActive ? 'bg-green-700/90' : 'hover:bg-black/20'}`}
          >
            <ProfileIcon className='m-auto text-white size-9' />
          </NavLink>
        </Tooltip>

        <Tooltip overlay='Usuarios'>
          <NavLink
            to={APP_PRIVATE_ROUTES.USERS}
            className={({ isActive }) => `block p-2 rounded-md transition-[background] ${isActive ? 'bg-green-700/90' : 'hover:bg-black/20'}`}
          >
            <UserIcon className='m-auto text-white size-9' />
          </NavLink>
        </Tooltip>

        <Tooltip overlay='Citas'>
          <NavLink
            to={APP_PRIVATE_ROUTES.APPOINTMENTS}
            className={({ isActive }) => `block p-2 rounded-md transition-[background] ${isActive ? 'bg-green-700/90' : 'hover:bg-black/20'}`}
          >
            <CalendarClockIcon className='m-auto text-white size-9' />
          </NavLink>
        </Tooltip>

        <Tooltip overlay='Tratamientos'>
          <NavLink
            to={APP_PRIVATE_ROUTES.TREATMENT}
            className={({ isActive }) => `block p-2 rounded-md transition-[background] ${isActive ? 'bg-green-700/90' : 'hover:bg-black/20'}`}
          >
            <TreatmentIcon className='m-auto text-white size-9' />
          </NavLink>
        </Tooltip>

        <Tooltip overlay='Servicios'>
          <NavLink
            to={APP_PRIVATE_ROUTES.SERVICES}
            className={({ isActive }) => `block p-2 rounded-md transition-[background] ${isActive ? 'bg-green-700/90' : 'hover:bg-black/20'}`}
          >
            <ToothIcon className='m-auto text-white size-9' />
          </NavLink>
        </Tooltip>
      </section>
    </div>
  </nav>
);

export default AuthNavbar;
