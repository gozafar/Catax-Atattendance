export const UserLogin = (data) => {
  return {
    type: 'USER_LOGIN',
    payload: data,
  };
};

export const UserSignup = (data) => {
  return {
    type: 'USER_SIGNUP',
    payload: data,
  };
};

export const UserLogout = (userLogout) => {
  return {
    type: 'USER_LOGOUT',
    payload: userLogout,
  };
};

export const UserToken = (userToken) => {
  return {
    type: 'USER_TOKEN',
    payload: userToken,
  };
};
