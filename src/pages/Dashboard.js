import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const users = useSelector((state) => state?.login.users);
  // console.log(users.doj, 'users data is comeing>>>>>>>>>>>>>>>>>>>>');
  // console.log(users, 'users data is comeing>>>>>>>>>>>>>>>>>>>>');

  return (
    <>
      <div style={{ margin: '15px' }}>
        <h2 style={{ textAlign: 'center' }}>Employee Details</h2>

        <div className='card'>
          <img
            src='https://cdn1.vectorstock.com/i/1000x1000/05/85/salesman-vector-60585.jpg'
            alt='John'
            style={{ width: '100' }}
          />
          <h1>{users.name}</h1>
          <p className='title'>{users.email}</p>

          <p className='title'>Gender:{users.gender}</p>
          <p className='title'>Pan Number:{users.pancard}</p>
          <p className='title'>Aadhaar:{users.aadhaar}</p>
          <p className='title'>Data of Birth:{users.dob}</p>
          <p className='title'>Bank Account:{users.bankAccount}</p>
          <p className='title'>IFSC code:{users.IFSC}</p>
          <p className='title'>Data of Joing:{users.doj}</p>
          <p className='title'>Designation:{users.position}</p>
          <p>Catax</p>
          <p>
            <button>Contact:{users.mobileNo}</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
