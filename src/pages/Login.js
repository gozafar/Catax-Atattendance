import { useState } from 'react';
import { USER_LOGIN } from '../apollo/user/userMutation';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserLogin, UserToken } from '../redux/action/Action';
import { useSelector } from 'react-redux';
const theme = createTheme();

function Login() {
  const { users } = useSelector((state) => state?.login);
  const userId = users?._id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, setLoginUser] = useState({ email: '', password: '' });

  const handleEvent = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const [userFetch] = useMutation(USER_LOGIN, {
    onError: (error) => {
      toast.error(error?.message);
      // console.log(error?.message)
    },
    onCompleted: ({ userLogin }) => {
      if (userLogin.status === 200) {
        dispatch(UserToken(userLogin?.token));
        dispatch(UserLogin(userLogin?.payload));
        localStorage.getItem(userLogin?.token, 'token');
        navigate(`/dashboard/${userId}`);
      }
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    userFetch({
      variables: {
        email: loginUser?.email,
        password: loginUser?.password,
      },
    });
  };

  //? ############################################################
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Log In
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              onChange={handleEvent}
              value={loginUser.email}
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              onChange={handleEvent}
              value={loginUser.password}
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link id='RouterNavLink' to='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <p>
                  Don't have an account?
                  <Link id='RouterNavLink' to='/signup' variant='body2'>
                    Sign Up
                  </Link>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Login;
