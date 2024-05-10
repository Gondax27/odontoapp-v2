const Spinner = ({ className }: { className?: string }) => (
  <div role='status'>
    <svg
      aria-hidden='true'
      className={`w-8 h-8 text-gray-200 fill-purple-900 animate-spin ${className || ''}`}
      viewBox='0 0 100 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50m-90.919 0c0 22.6 18.32 40.92 40.919 40.92s40.919-18.32 40.919-40.92c0-22.598-18.32-40.918-40.919-40.918S9.081 27.992 9.081 50.591'
        fill='currentColor'
      />
      <path
        d='M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0 0 41.735 1.279c-2.474.414-3.922 2.919-3.285 5.344s3.12 3.849 5.6 3.484a40.916 40.916 0 0 1 44.131 25.769c.902 2.34 3.361 3.802 5.787 3.165'
        fill='currentFill'
      />
    </svg>
    <span className='sr-only'>Loading...</span>
  </div>
);

export default Spinner;
