import React, { lazy, Suspense } from 'react';
import MyComponent2 from './MyComponent2'; // Code splitting

const MyComponent = lazy(() => import('./MyComponent')); // Code splitting

function App() {
  return (
    <>
    {/* <Suspense fallback={<div>Top Loader...</div>}>
      <MyComponent />
    </Suspense> */}
    <MyComponent2 />
    </>
  );
}

export default App;