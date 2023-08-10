import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './navigation/router';


const App = () => {
  return (
    <div className='h-screen  w-full'>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;