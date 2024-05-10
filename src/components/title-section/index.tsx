const TitleSection = ({ title }: { title: string }) => (
  <header>
    <h1 className='text-4xl font-bold text-purple-900'>{title}</h1>
    <hr className='mt-2 mb-3 border-gray-300' />
  </header>
);

export default TitleSection;
