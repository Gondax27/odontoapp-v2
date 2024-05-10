import sloganImage from '../../../assets/home/odontoapp_slogan.jpg';

const SloganSection = () => (
  <div className='mb-3'>
    <img
      src={sloganImage}
      alt='Slogan de OdontoApp'
      className='w-full h-auto rounded-md aspect-[2604/997] min-h-[20rem]'
      loading='eager'
    />
  </div>
);

export default SloganSection;
