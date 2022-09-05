import * as actionTypes from '../actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null
};

const fetchUserStart = (state) => {
  return {
    ...state,
    loading: true,
    error: null
  }
};

const fetchUserSuccess = (state, { user }) => {
  return {
    ...state,
    user: user,
    loading: false,
    error: null
  };
};

const fetchUserFail = (state, { error }) => {
  return {
    ...state,
    loading: false,
    error,
  };
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_USER_START:
      return fetchUserStart(state, action);
    case actionTypes.FETCH_USER_SUCCESS:
      return fetchUserSuccess(state, action);
    case actionTypes.FETCH_USER_FAIL:
      return fetchUserFail(state, action);
    default:
      return state;
  }
};

export default userReducer;
