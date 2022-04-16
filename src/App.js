import React from 'react';
import { useRoutes } from 'react-router-dom';
import Router from './Router';
import Navbar from './navbar/Navbar';
function App() {
  const element = useRoutes(Router);

  return (
    <>
      <Navbar />
      {element}
    </>
  );
}

export default App;
