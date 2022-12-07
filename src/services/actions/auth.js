import { forgotPasswordRequest, getUserRequest, loginUserRequest, logoutUserRequest, registerUserRequest, resetPasswordRequest, updateTokenRequest, updateUserRequest } from "../../utils/burger-api";
import { deleteCookie, setCookie } from "../../utils/cookie";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS';
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED';

export function registerUser(values) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST
    });
    registerUserRequest(values)
      .then(data => {
        setCookie("token", data.accessToken.split("Bearer ")[1]);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch({
          type: REGISTER_SUCCESS,
          user: data.user
        });
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAILED,
          err
        });
      })
  };
}

export function loginUser(values) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST
    });
    loginUserRequest(values)
      .then(data => {
        setCookie("token", data.accessToken.split("Bearer ")[1]);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch({
          type: LOGIN_SUCCESS,
          user: data.user
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILED,
          err
        });
      })
  };
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST
    });
    logoutUserRequest()
      .then(() => {
        deleteCookie("token")
        localStorage.removeItem("refreshToken");
        dispatch({
          type: LOGOUT_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: LOGOUT_FAILED,
          err
        });
      })
  }
}

export function forgotPassword(values) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST
    });
    forgotPasswordRequest(values)
      .then(() => {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
          err
        });
      })
  }
}

export function resetPassword(values) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    });
    resetPasswordRequest(values)
      .then(() => {
        dispatch({
          type: RESET_PASSWORD_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
          err
        });
      })
  }
}

export function getUser() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST
    });
    getUserRequest()
      .then(user => {
        dispatch({
          type: GET_USER_SUCCESS,
          user
        });
      })
      .catch(err => {
        dispatch({
          type: GET_USER_FAILED,
          err
        });
      })
  };
}

export function updateUser(values) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST
    });
    updateUserRequest(values)
      .then(user => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          user
        });
      })
      .catch(err => {
        dispatch({
          type: UPDATE_USER_FAILED,
          err
        });
      })
  };
}

export function updateToken(values) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_TOKEN_REQUEST
    });
    updateTokenRequest(values)
      .then(data => {
        setCookie("token", data.accessToken.split("Bearer ")[1]);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch({
          type: UPDATE_TOKEN_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: UPDATE_TOKEN_FAILED,
          err
        });
      })
  };
}