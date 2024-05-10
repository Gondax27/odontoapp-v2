import { LazyExoticComponent, Suspense } from 'react';

import Spinner from '@/components/spinners';

const LazyRoute = ({ Route }: { Route: LazyExoticComponent<() => JSX.Element> }) => (
  <Suspense fallback={<Spinner className='mx-auto' />}>
    <Route />
  </Suspense>
);

export default LazyRoute;
