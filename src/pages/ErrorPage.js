import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../404.png';

const ErrorPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 3000);
  return (
    <div style={{ flex: 1, backgroundColor: 'rgba(154, 82, 120, .1)', height: '100vh' }}>
      <div style={{ display: 'flex-col', textAlign: 'center', color: '#9a5278' }}>
        <img src={error} alt='employe' />
        <h1 style={{ textAlign: 'center' }}>Oops! Something went wrong</h1>
        <p>Brace yourself till we get the error fixed</p>
        <p>Yoy may also refresh the page or try again later.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
