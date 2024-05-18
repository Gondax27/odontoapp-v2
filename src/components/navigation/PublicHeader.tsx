import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useBreakpoint from '@/hooks/useBreakpoint';

import logoApp from '@/assets/logo.png';
import MenuIcon from '@/assets/svg/MenuIcon';

import { APP_PUBLIC_ROUTES } from '../../routes/utils/constants';

const PublicHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const breakpoint = useBreakpoint();

  const isSmallDisplay = useMemo(() => ['xs', 'sm'].includes(breakpoint || ''), [breakpoint]);

  useEffect(() => {
    if (!isSmallDisplay && showMenu) setShowMenu(false);
  }, [isSmallDisplay]); // eslint-disable-line

  return (
    <nav className='flex flex-wrap items-center justify-between px-6 shadow-xl min-h-20 bg-purple-950'>
      <section className='flex items-center h-full gap-8'>
        <NavLink to={APP_PUBLIC_ROUTES.HOME} className='hover:saturate-200'>
          <img src={logoApp} className='rounded-full size-14' alt='Logo OdontoApp' />
        </NavLink>

        {!isSmallDisplay && (
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
        )}
      </section>

      {!isSmallDisplay
        ? (
          <NavLink
            className='inline-flex py-3 px-6 font-semibold transition-[background,transform] text-white bg-sky-600 rounded-lg hover:bg-sky-400 hover:scale-105'
            to={APP_PUBLIC_ROUTES.LOGIN}
          >
            Iniciar Sesión
          </NavLink>
        )

        : (
          <>
            <button
              className='p-2 text-gray-200 transition-colors border border-gray-400 rounded-md hover:bg-green-700/80'
              onClick={() => setShowMenu(prevState => !prevState)}
            >
              <MenuIcon className='stroke-2 size-6' />
            </button>

            {showMenu && (
              <ul className='flex items-center w-full gap-4 my-3'>
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

                <li>
                  <NavLink
                    className='inline-flex py-2 px-3 font-semibold transition-[background,transform] text-white bg-sky-600 rounded-lg hover:bg-sky-400 hover:scale-105'
                    to={APP_PUBLIC_ROUTES.LOGIN}
                  >
                    Iniciar Sesión
                  </NavLink>
                </li>
              </ul>
            )}
          </>
        )
      }
    </nav>
  )
};

export default PublicHeader;
