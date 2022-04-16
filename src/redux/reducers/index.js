const initialState = {
  users: null,
  token: null,
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        users: action.payload,
      };
    case 'USER_SIGNUP':
      return {
        ...state,
        users: action.payload,
      };
    case 'USER_TOKEN':
      return {
        ...state,
        token: action.payload,
      };

    case 'USER_LOGOUT':
      return {
        [state.users]: action.payload.users,
        [state.token]: action.payload.token,
      };

    default:
      return state;
  }
};
export default loginReducers;
