import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './assets/components/Nav';

const App = () => {
  return (
    <div>
      {/* header  */}
      <Nav></Nav>
      
      <Outlet></Outlet>

      {/* footer  */}
    </div>
  );
};

export default App;