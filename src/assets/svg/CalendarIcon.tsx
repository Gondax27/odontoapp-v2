import type { SVGProps } from 'react';

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' {...props}>
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M11.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M16 3v4M8 3v4m-4 4h16m-5 8 2 2 4-4' />
    </svg>
  );
};

export default CalendarIcon;
