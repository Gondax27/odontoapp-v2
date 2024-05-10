import SingleCard from '../../components/cards/SingleCard';

import dentalImage1 from '../../assets/salud-dental/dental1.jpg';
import dentalImage2 from '../../assets/salud-dental/dental2.jpg';
import dentalImage3 from '../../assets/salud-dental/dental3.jpg';
import hiloDentalImage from '../../assets/salud-dental/hilo-dental.jpg';

const DentalHealthPage = () => (
  <section className='grid grid-cols-1 gap-4 md:grid-cols-3'>
    <picture className='flex'>
      <img
        src={dentalImage1}
        alt='Imagén relacianada a la revisión odontologica'
        className='flex-grow w-full h-auto bg-cover rounded-md min-h-[20rem] aspect-[356/175]'
        loading='eager'
      />
    </picture>

    <SingleCard className='flex flex-col justify-center md:col-span-2'>
      <h5 className='mb-2 text-3xl font-semibold text-purple-900'>¿De que se ocupa la Odontología?</h5>

      <p className='text-md'>
        La odontología es la rama de las ciencias de la salud que se encarga del estudio, diagnóstico,
        prevención y tratamiento de las enfermedades que afectan tanto al aparato estomatognático como a
        cualquier parte de la estructura mandibular (Dientes, encias, periodonto, articulación
        temporomandibular, conjunto del sistema muscular y nervioso vocal).
      </p>

      <p className='text-md'>
        La odontología no se limita a intervenir en las enfermedades de los dientes, sino que también abarca
        todo lo que compone el aparato estomatognático, compuesto por los dientes, la cavidad oral, los
        maxilares, los músculos, la piel, los vasos y los nervios de esa parte del cuerpo.
      </p>
    </SingleCard>

    <SingleCard>
      <h5 className='mb-2 text-xl font-semibold text-purple-900'>Tips para tener dientes más sanos</h5>

      <ol className='list-decimal list-inside'>
        <li>Cepillarse los dientes al menos 2 veces al día</li>
        <li>Cepillarse con cuidado</li>
        <li>Adquirir un cepillo de dientes apropiado</li>
        <li>Utilice productos con fluoruro</li>
        <li>Cepillate la lengua</li>
        <li>Utiliza hilo dental diariamente</li>
        <li>Limita la ingesta de bebidas ácidas</li>
        <li>Limita los alimentos azucarados</li>
        <li>Consume vitaminas y minerales esenciales</li>
        <li>Solo usa tus dientes para masticar alimentos</li>
        <li>Proteje tus dientes de lesiones con protectores bucales</li>
        <li>Ve al dentista cada 6 meses</li>
      </ol>
    </SingleCard>

    <SingleCard>
      <h5 className='mb-2 text-xl font-semibold text-purple-900'>¿Por qué usar la seda dental?</h5>

      <p className='mb-2'>Se recomienda usar la seda dental al menos una vez al día.</p>

      <p>
        Limpiar entre los dientes puede ayudar a prevenir las caries, enfermedades de las encías y ayuda a
        sacar una película pegajosa llamada placa, la cual contiene bacterias que se alimentan de restos de
        comida o azúcar que hay en tu boca, que luego pueden generar caries.
      </p>

      <p className='mt-2'>Lo recomendable es usar seda dental diariamente para mejorar la salud.</p>

      <p className='mt-2'>
        ¡Limpiate los dientes de la mejor manera! Para una mejor higiene emplea siempre el hilo dental.
      </p>
    </SingleCard>

    <SingleCard className='flex flex-col justify-center'>
      <img
        src={dentalImage3}
        className='rounded-md w-full h-auto min-h-40 aspect-[14/5] mb-4 shadow-md'
        loading='eager'
      />

      <img
        src={hiloDentalImage}
        className='w-full h-auto rounded-md shadow-md min-h-60 aspect-[4/3]'
        loading='eager'
      />
    </SingleCard>

    <SingleCard className='flex flex-col justify-center md:col-span-3'>
      <h5 className='mb-2 text-3xl font-semibold text-purple-900'>Especialidades de la Odontología</h5>

      <p className='text-md'>
        Con el paso del tiempo, la Odontología a evolucionado de tal forma lo cual ha logrado que su campo de
        acción y los conocimientos en el área dental se amplien de una manera extraordinario. Por lo cual, han
        surgido numerables especialidades tales como:
      </p>

      <p className='mb-2 text-md'>
        Peridoncia, Ortodoncia, Endodoncia, Cariología, Implantología, Odontopediatría, Orto-odontopediatría,
        Odontogeriatría, Prostodoncia (Protesis Dentales), Maxilofacial (Cirugia Oral), Rehabilitación Oral,
        Odontología Preventiva, Odontología Forense, Odontología Cosmética o Estética, Radiología Oral.
      </p>

      <img
        src={dentalImage2}
        alt='Imagén de una dentadura en fondo azul'
        className='w-full h-auto rounded-md min-h-80 max-h-[30rem] aspect-[1024/707]'
        loading='lazy'
      />
    </SingleCard>
  </section>
);

export default DentalHealthPage;
