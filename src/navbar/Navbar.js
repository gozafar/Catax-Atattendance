import React from 'react';
import { Button, Nav, Container, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserLogout } from '../redux/action/Action';

const NavBar = () => {
  const { users, token } = useSelector((state) => state?.login);
  const userId = users?._id;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(userId, 'users>>>>>>>>>>>>>>>>>>>>>>>>>>.....');
  console.log(token, 'token>>>>>>>>>>>>>>>>>>>>>>>>>>.....');

  const handleLogout = () => {
    const logout = dispatch(UserLogout({ users: null, token: null }));
    console.log(logout, 'logout>>>>>>>>>>>>>>>>>>');
    localStorage.clear('');
    if (logout) navigate('/');
  };

  return (
    <>
      {token && userId ? (
        <>
          <Navbar bg='light' expand='lg'>
            <Container fluid>
              <Nav.Link>
                <NavLink to='/'>Catax Attendance</NavLink>
              </Nav.Link>
              <Navbar.Toggle aria-controls='navbarScroll' />
              <Navbar.Collapse id='navbarScroll'>
                <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                  <NavLink to={`/dashboard/${userId}`}>Dashboard</NavLink>
                </Nav>
                <Nav className='me-auto my-2 mx-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                  <Button onClick={handleLogout} variant='outline-success' className='mx-2 my-2'>
                    Logout
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg='light' expand='lg'>
            <Container fluid>
              <Nav.Link>
                <NavLink to='/'>Catax Attendance</NavLink>
              </Nav.Link>
              <Navbar.Toggle aria-controls='navbarScroll' />
              <Navbar.Collapse id='navbarScroll'>
                {/* <Form className='d-flex'>
              <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search' />
              <Button variant='outline-success'>Search</Button>
            </Form> */}

                <Nav className='me-auto my-2 mx-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                  <NavLink to='/login' className='mx-2 my-2'>
                    <Button variant='outline-success'>Login</Button>
                  </NavLink>
                  <NavLink to='/signup' className='mx-2 my-2'>
                    <Button variant='outline-success'>Signup</Button>
                  </NavLink>
                  {/* <Button onClick={handleLogout} variant='outline-success' className='mx-2 my-2'>
                    Logout
                  </Button> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}

      {/* <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Nav.Link>
            <NavLink to='/'>Catax Attendance</NavLink>
          </Nav.Link>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
              <NavLink to='/'>Dashboard</NavLink>
            </Nav> */}

      {/* <Form className='d-flex'>
              <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search' />
              <Button variant='outline-success'>Search</Button>
            </Form> */}

      {/* <Nav className='me-auto my-2 mx-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
              <NavLink to='/login' className='mx-2 my-2'>
                <Button variant='outline-success'>Login</Button>
              </NavLink>
              <NavLink to='/signup' className='mx-2 my-2'>
                <Button variant='outline-success'>Signup</Button>
              </NavLink>
              <Button onClick={handleLogout} variant='outline-success' className='mx-2 my-2'>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default NavBar;
