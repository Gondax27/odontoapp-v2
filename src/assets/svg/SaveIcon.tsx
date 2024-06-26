import type { SVGProps } from 'react';

const SaveIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path d='M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2' />
      <path d='M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 4v4H8V4' />
    </svg>
  );
};

export default SaveIcon;
