import * as React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

import Link from '@mui/material/Link';
// import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useMutation } from '@apollo/client';
import { USER_CREATE } from '../apollo/user/userMutation';
import { UserSignup, UserToken } from '../redux/action/Action';

const theme = createTheme();

const SignObj = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  mobileNo: '',
  gender: '',
  age: '',
  dob: '',
  doj: '',
  pancard: '',
  aadhaar: '',
  position: '',
  bankAccount: '',
  IFSC: '',
  city: '',
  state: '',
  country: '',
};

export default function SignUp() {
  const { users } = useSelector((state) => state?.login);
  const userId = users?._id;
  const [inputField, setInputField] = useState(SignObj);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [CreateUser] = useMutation(USER_CREATE, {
    onError: (error) => {
      toast.error(error.message);
    },
    onCompleted: ({ userRegister }) => {
      if (userRegister?.status === 201) {
        toast.success(userRegister?.message);
        dispatch(UserSignup(userRegister?.payload));
        dispatch(UserToken(userRegister?.token));
        navigate(`/dashboard/${userId}`);
      }
    },
  });

  // const [CreateUsers] = useMutation(USER_CREATE, {
  //   onError: (error) => {
  //     toast.error(error?.message);
  //   },
  //   onCompleted: ({ userCreate }) => {
  //     if (userCreate?.status === 201) {
  //       console.log(userCreate?.message);
  //       dispatch(UserLogin(userCreate?.payload));
  //       dispatch(UserToken(userCreate?.token));
  //       navigate('/');
  //     }
  //   },
  // });

  const handleSubmit = (event) => {
    event.preventDefault();

    CreateUser({
      variables: {
        input: {
          name: inputField?.name,
          email: inputField?.email,
          password: inputField?.password,
          confirmPassword: inputField?.confirmPassword,
          mobileNo: inputField?.mobileNo,
          gender: inputField?.gender.toUpperCase(),
          dob: inputField?.dob,
          doj: inputField?.doj,
          pancard: inputField?.pancard,
          aadhaar: inputField?.aadhaar,
          position: inputField?.position,
          bankAccount: inputField?.bankAccount,
          IFSC: inputField?.IFSC,
        },
      },
    });

    // CreateUsers({
    //   variables: {
    //     input: {
    //       name: inputField?.name,
    //       email: inputField?.email,
    //       password: inputField?.password,
    //       confirmPassword: inputField?.confirmPassword,
    //       phone: inputField?.phone,
    //       gender: inputField?.gender.toUpperCase(),
    //       age: parseInt(inputField?.age),
    //     },
    //   },
    // });

    console.log(inputField, 'data is puting');
  };
  const handleEvent = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: event.target.value,
    });
  };

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
            Sign up
          </Typography>
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='name'
                  label='Name'
                  type='text'
                  value={inputField.name}
                  id='name'
                  autoComplete='new-Name'
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={inputField.email}
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='mobileNo'
                  label='Mobile Number'
                  type='text'
                  value={inputField.mobileNo}
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='date'
                  label='Enter D.O.B'
                  name='dob'
                  value={inputField.dob}
                  autoComplete='family-name'
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='date'
                  label='Enter D.O.J'
                  name='doj'
                  value={inputField.doj}
                  autoComplete='family-name'
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Gender</InputLabel>

                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label='Age'
                    type='text'
                    name='gender'
                    onChange={handleEvent}
                    value={inputField.gender}
                  >
                    <MenuItem value='MALE'>Male</MenuItem>
                    <MenuItem value='FEMALE'>Female</MenuItem>
                    <MenuItem value='OTHERS'>Others</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  label='Enter Pan Number'
                  name='pancard'
                  value={inputField.pancard}
                  autoComplete='family-name'
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Position</InputLabel>

                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label='Age'
                    type='text'
                    name='position'
                    onChange={handleEvent}
                    value={inputField.position}
                  >
                    <MenuItem value='MALE'>Male</MenuItem>
                    <MenuItem value='FEMALE'>Female</MenuItem>
                    <MenuItem value='OTHERS'>Others</MenuItem>
                  </Select>
                </FormControl> */}

                <TextField
                  required
                  fullWidth
                  type='text'
                  label='Enter Position'
                  name='position'
                  value={inputField.position}
                  autoComplete='family-name'
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  label='Enter Adhar Number'
                  name='aadhaar'
                  value={inputField.aadhaar}
                  autoComplete='family-name'
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  label='Bank Accoun No'
                  name='bankAccount'
                  value={inputField.bankAccount}
                  autoComplete='family-name'
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  label='Enter IFSC code'
                  name='IFSC'
                  value={inputField.IFSC}
                  autoComplete='family-name'
                  onChange={handleEvent}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  value={inputField.password}
                  id='password'
                  autoComplete='new-password'
                  onChange={handleEvent}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='confirmPassword'
                  label='Confirm Password'
                  type='password'
                  value={inputField.confirmPassword}
                  id='confirmPassword'
                  autoComplete='new-password'
                  onChange={handleEvent}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value='allowExtraEmails' color='primary' />}
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid> */}
            </Grid>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/login' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
