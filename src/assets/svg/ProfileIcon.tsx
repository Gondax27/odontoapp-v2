import type { SVGProps } from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0' />
      <path d='M9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-2.832 8.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855' />
    </svg>
  );
};

export default ProfileIcon;
