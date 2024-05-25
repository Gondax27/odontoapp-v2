import React, { type FC, type LazyExoticComponent, Suspense } from 'react';

import Spinner from '@/components/spinners';

const lazyLoadElement = ({ Element }: { Element: LazyExoticComponent<FC> }) => (
  <Suspense fallback={<Spinner className='mx-auto' />}>
    <Element />
  </Suspense>
);

const LazyElement = React.memo(lazyLoadElement);

export default LazyElement;
