import * as actionTypes from "../actionTypes";
import {
  fetchUser as fetchUserData, signOut,
  updateUser as updateUserData,
} from '../../services/user.api'

export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START
  }
};

export const fetchUserFail = (err) => {
  return {
    type: actionTypes.FETCH_USER_FAIL,
    error: err
  }
};

export const fetchUserSuccess = (user) => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    user,
  }
};

export const fetchUser = (username) => {
  return (dispatch) => {
    dispatch(fetchUserStart());
    fetchUserData(username).then(value => {
      dispatch(fetchUserSuccess(value || {}))
    }).catch(err => {
      dispatch(fetchUserFail(err));
    });
  }
};

export const updateUserStart = () => {
  return {
    type: actionTypes.UPDATE_USER_START
  }
};

export const updateUserFail = (err) => {
  return {
    type: actionTypes.UPDATE_USER_FAIL,
    error: err
  }
};

export const updateUserSuccess = (user) => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    user,
  }
};

export const updateUser = (username, values) => {
  return (dispatch) => {
    dispatch(updateUserStart());
    updateUserData(username, values).then(value => {
      dispatch(fetchUserSuccess(value || {}))
    }).catch(err => {
      dispatch(updateUserFail(err));
    });
  }
};


export const signoutUser = () => {
  return () => {
    signOut().catch(err => {
      console.log("Err signing out: ", err)
    });
  }
};
