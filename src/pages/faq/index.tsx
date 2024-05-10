import PlusIcon from '../../assets/svg/PlusIcon';

const FAQPage = () => (
  <>
    <h1 className='text-3xl font-bold text-purple-900'>Preguntas Frecuentes</h1>

    <section className='mt-6'>
      <h3 className='text-2xl font-semibold text-green-700'>Servicios</h3>

      <details
        name='collapse-services'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Con cuántos servicios cuenta la Odontología?
          <PlusIcon className=' size-6' />
        </summary>

        <p className='px-4 pb-4 text-md'>
          La odontología cuenta con 9 servicios, los cuales son: Implantes Dentales, Ortodoncia Especializada,
          Diseño de Sonrisa, Blanqueamiento Dental, Endodoncia, Protesis Implanto-Soportadas, Protesis
          Dentales, Coronas Dentales y limpieza Estándar.
        </p>
      </details>

      <details
        name='collapse-services'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Cuánto tiempo dura un tratamiento?
          <PlusIcon className=' size-6' />
        </summary>

        <p className='px-4 pb-4'>
          La duración varía deacuerdo al tratamiento, lo común es que un tratamiento dure entre 1 a 2 años.
        </p>
      </details>

      <details
        name='collapse-services'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Se pueden generar sobrecostos durante un tratamiento?
          <PlusIcon className=' size-6' />
        </summary>
        <p className='px-4 pb-4'>
          Los sobrecostos se pueden generar
          <span className='mx-2 font-semibold'>
            Si el paciente no cumple con los cuidados básicos recomendados
          </span>
          por el odontologo especializado encargado.
        </p>
      </details>
    </section>

    <section className='mt-5'>
      <h3 className='text-2xl font-semibold text-green-700'>Citas</h3>

      <details
        name='collapse-appointments'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Cómo puedo pedir una cita?
          <PlusIcon className=' size-6' />
        </summary>
        <div className='px-4 pb-4'>
          <span>Puedes pedir una cita de 2 formas:</span>

          <span className='block'>
            <span className='mx-2 font-semibold'>1.</span>
            LLendo a nuestro centro odontológico y hablar con nuestro personal encargado.
          </span>

          <span className='block'>
            <span className='mx-2 font-semibold'>2.</span>
            Desde nuestra página web iniciando sesión en la plataforma.
          </span>
        </div>
      </details>

      <details
        name='collapse-appointments'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Puedo cancelar alguna cita?
          <PlusIcon className=' size-6' />
        </summary>

        <p className='px-4 pb-4'>
          Claro que puedes cancelar tus citas, dichas citas las puedes cancelar asistiendo al centro
          odontológico o desde nuestra página web iniciando sesión en la plataforma.
        </p>
      </details>

      <details
        name='collapse-appointments'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Cuánto cuesta una cita y cuáles son los medios para pagar dicha cita?
        </summary>

        <p className='px-4 pb-4'>
          El precio de las citas varía dependiendo del tratamiento elegido por el paciente. Puedes pagar en
          efectivo o con tu tarjeta Débito.
        </p>
      </details>
    </section>

    <section className='mt-5'>
      <h3 className='text-2xl font-semibold text-green-700'>Inicio de Sesión</h3>

      <details
        name='collapse-login'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Cómo puedo iniciar sesión en la plataforma?
          <PlusIcon className=' size-6' />
        </summary>

        <p className='px-4 pb-4'>
          Desde nuestra página web en la esquina superior derecha puedes encontrar el botón para iniciar
          sesión en nuestra plataforma, además debes digitar tu usuario y contraseña que te fueron asignados
          en la primera cita de tu tratamiento.
        </p>
      </details>

      <details
        name='collapse-login'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Es necesario iniciar sesión con mi usuario para pedir alguna cita?
          <PlusIcon className=' size-6' />
        </summary>

        <p className='px-4 pb-4'>
          No es necesario, si quieres pedir alguna cita para un tratamiento determinado, acercate a nuestro
          centro odontológico.
        </p>
      </details>

      <details
        name='collapse-login'
        className='my-2 text-lg border border-purple-900 rounded-md cursor-pointer'
      >
        <summary className='flex items-center justify-between p-4 text-xl text-purple-900 select-none marker:content-none'>
          ¿Puedo realizar el pago de una factura a través de mi usuario al iniciar sesión?
          <PlusIcon className=' size-6' />
        </summary>

        <p className='px-4 pb-4'>
          No, los pagos tienen que hacerse directamente en nuestro centro odontológico ya sea pagando en
          efectivo o pagando con tarjeta Débito.
        </p>
      </details>
    </section>
  </>
);

export default FAQPage;
