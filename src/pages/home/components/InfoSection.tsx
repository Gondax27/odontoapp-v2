import SingleCard from '../../../components/cards/SingleCard';

import imageSection from '../../../assets/home/odontoapp_home_service.jpg';

const InfoSection = () => (
  <section className='pb-4 mt-6'>
    <SingleCard>
      <section className='grid w-full h-full grid-cols-1 lg:grid-cols-2'>
        <img
          src={imageSection}
          alt='Imagén relacionada a tratamientos odontológicos'
          className='w-full h-[25rem] aspect-[3/2] rounded-md mb-3 lg:mb-0'
          loading='lazy'
        />

        <div className='content-center lg:ml-6'>
          <h5 className='mb-3 text-2xl font-bold text-purple-900'>¡Ven a Nuestro Centro Odontológico!</h5>

          <p className='text-lg text-pretty'>
            Animate a que tu sonrisa sea cada día más brillante, ven a nuestro centro odontológico en donde
            encontrarás tratamientos especializados en salud oral enfocados en el diseño de Sonrisa,
            Ortodoncias e Implantología. Además contamos con varios profesionales especializados los cuales
            siempre buscan estar a la altura de tu necesidad. De igual manera Contamos con moderna tecnología
            y productos cuidadosamente seleccionados, que logren siempre garantizar una experiencia única y
            relajante a nuestros pacientes. ¡Te esperamos!.
          </p>
        </div>
      </section>
    </SingleCard>
  </section>
);

export default InfoSection;
