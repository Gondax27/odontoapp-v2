import { Link } from 'react-router-dom';

import SingleCard from '../../../components/cards/SingleCard';

import { APP_PUBLIC_ROUTES } from '../../../routes/utils/constants';

import CalendarIcon from '../../../assets/svg/CalendarIcon';
import QuestionIcon from '../../../assets/svg/QuestionIcon';
import ToothIcon from '../../../assets/svg/ToothIcon';

const sectionCards = [
  {
    header: ToothIcon,
    body: (
      <>
        <h5 className='text-2xl font-bold text-purple-900'>Salud Dental</h5>
        <p className='mt-2 text-lg leading-tight text-pretty'>
          Mira terminologías y consejos básicos para que tu boca siempre sonria
        </p>
      </>
    ),
    footer: (
      <Link
        className='text-white font-semibold p-2 block text-center bg-green-700/90 w-full hover:bg-green-600 hover:scale-105 transition-[background,transform] rounded-md'
        to={APP_PUBLIC_ROUTES.DENTALHEALTH}
      >
        Ver Información
      </Link>
    )
  },
  {
    header: QuestionIcon,
    body: (
      <>
        <h5 className='text-2xl font-bold text-purple-900'>Preguntas</h5>
        <p className='mt-2 text-lg leading-tight text-pretty'>
          ¿Tienes alguna duda con respecto a nuestro servicio?
        </p>
      </>
    ),
    footer: (
      <Link
        className='text-white font-semibold p-2 block text-center bg-green-700/90 w-full hover:bg-green-600 hover:scale-105 transition-[background,transform] rounded-md'
        to={APP_PUBLIC_ROUTES.FAQ}
      >
        Ver Preguntas
      </Link>
    )
  },
  {
    header: CalendarIcon,
    body: (
      <>
        <h5 className='text-2xl font-bold text-purple-900'>Citas</h5>
        <p className='mt-2 text-lg leading-tight text-pretty'>
          Si estás registrado en nuestra plataforma, ¡Que esperas para pedir tu cita!
        </p>
      </>
    ),
    footer: (
      <Link
        className='text-white font-semibold p-2 block text-center bg-green-700/90 w-full hover:bg-green-600 hover:scale-105 transition-[background,transform] rounded-md'
        to={APP_PUBLIC_ROUTES.LOGIN}
      >
        Pedir Cita
      </Link>
    )
  }
];

const CardsSection = () => (
  <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
    {sectionCards.map((card, key) => (
      <SingleCard key={key} className='flex flex-col items-center justify-between'>
        <card.header className='text-purple-900 size-32' />
        <section className='my-3 text-center'>{card.body}</section>
        <footer className='w-full mt-2'>{card.footer}</footer>
      </SingleCard>
    ))}
  </div>
);

export default CardsSection;
