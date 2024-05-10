import type { SVGProps } from 'react';

const CancelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1'
      viewBox='0 0 24 24'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M10 10l4 4m0-4-4 4' />
    </svg>
  );
};

export default CancelIcon;
