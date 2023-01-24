import { AppDispatch } from "../../types";
import { TUser } from "../../types/generalTypes";
import {
  forgotPasswordRequest,
  getUserRequest,
  loginUserRequest,
  logoutUserRequest,
  registerUserRequest,
  resetPasswordRequest,
  updateTokenRequest,
  updateUserRequest,
} from "../../utils/api/burger-api";
import {
  TForgotPasswordRequest as TForgotPasswordRequestParams,
  TLoginUserRequest as TLoginUserRequestParams,
  TRegisterUserRequest as TRegisterUserRequestParams,
  TResetPasswordRequest as TResetPasswordRequestParams,
  TUpdateUserRequest as TUpdateUserRequestParams,
} from "../../utils/api/burger-api.types";
import { deleteCookie, setCookie } from "../../utils/cookie";

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,
} from "../constants/auth";

type TRegisterUserRequest = {
  readonly type: typeof REGISTER_REQUEST;
};

type TRegisterUserSuccess = {
  readonly type: typeof REGISTER_SUCCESS;
  user: TUser;
};

type TRegisterUserFailed = {
  readonly type: typeof REGISTER_FAILED;
};

type TLoginUserRequest = {
  readonly type: typeof LOGIN_REQUEST;
};

type TLoginUserSuccess = {
  readonly type: typeof LOGIN_SUCCESS;
  user: TUser;
};

type TLoginUserFailed = {
  readonly type: typeof LOGIN_FAILED;
};

type TLogoutUserRequest = {
  readonly type: typeof LOGOUT_REQUEST;
};

type TLogoutUserSuccess = {
  readonly type: typeof LOGOUT_SUCCESS;
};

type TLogoutUserFailed = {
  readonly type: typeof LOGOUT_FAILED;
};

type TForgotPasswordRequest = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
};

type TForgotPasswordSuccess = {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
};

type TForgotPasswordFailed = {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
};

type TResetPasswordRequest = {
  readonly type: typeof RESET_PASSWORD_REQUEST;
};

type TResetPasswordSuccess = {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
};

type TResetPasswordFailed = {
  readonly type: typeof RESET_PASSWORD_FAILED;
};

type TGetUserRequest = {
  readonly type: typeof GET_USER_REQUEST;
};

type TGetUserSuccess = {
  readonly type: typeof GET_USER_SUCCESS;
  user: TUser;
};

type TGetUserFailed = {
  readonly type: typeof GET_USER_FAILED;
};

type TUpdateUserRequest = {
  readonly type: typeof UPDATE_USER_REQUEST;
};

type TUpdateUserSuccess = {
  readonly type: typeof UPDATE_USER_SUCCESS;
  user: TUser;
};

type TUpdateUserFailed = {
  readonly type: typeof UPDATE_USER_FAILED;
};

type TUpdateTokenRequest = {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
};

type TUpdateTokenSuccess = {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
};

type TUpdateTokenFailed = {
  readonly type: typeof UPDATE_TOKEN_FAILED;
};

export type TAuthActions =
  | TRegisterUserRequest
  | TRegisterUserSuccess
  | TRegisterUserFailed
  | TLoginUserRequest
  | TLoginUserSuccess
  | TLoginUserFailed
  | TLogoutUserRequest
  | TLogoutUserSuccess
  | TLogoutUserFailed
  | TForgotPasswordRequest
  | TForgotPasswordSuccess
  | TForgotPasswordFailed
  | TResetPasswordRequest
  | TResetPasswordSuccess
  | TResetPasswordFailed
  | TGetUserRequest
  | TGetUserSuccess
  | TGetUserFailed
  | TUpdateUserRequest
  | TUpdateUserSuccess
  | TUpdateUserFailed
  | TUpdateTokenRequest
  | TUpdateTokenSuccess
  | TUpdateTokenFailed;

export const registerUser = (values: TRegisterUserRequestParams) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    registerUserRequest(values)
      .then((data) => {
        setCookie("token", data.accessToken.split("Bearer ")[1]);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch({
          type: REGISTER_SUCCESS,
          user: data.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILED,
          err,
        });
      });
  };
};

export const loginUser = (values: TLoginUserRequestParams) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    loginUserRequest(values)
      .then((data) => {
        setCookie("token", data.accessToken.split("Bearer ")[1]);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch({
          type: LOGIN_SUCCESS,
          user: data.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
          err,
        });
      });
  };
};

export const logoutUser = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    logoutUserRequest()
      .then(() => {
        deleteCookie("token");
        localStorage.removeItem("refreshToken");
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAILED,
          err,
        });
      });
  };
};

export const forgotPassword = (values: TForgotPasswordRequestParams) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    forgotPasswordRequest(values)
      .then(() => {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
          err,
        });
      });
  };
};

export const resetPassword = (values: TResetPasswordRequestParams) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    resetPasswordRequest(values)
      .then(() => {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
          err,
        });
      });
  };
};

export const getUser = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getUserRequest()
      .then((user) => {
        dispatch({
          type: GET_USER_SUCCESS,
          user,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
          err,
        });
      });
  };
};

export const updateUser = (values: TUpdateUserRequestParams) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    updateUserRequest(values)
      .then((user) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          user,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_USER_FAILED,
          err,
        });
      });
  };
};

export const updateToken = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_TOKEN_REQUEST,
    });
    updateTokenRequest()
      .then((data) => {
        setCookie("token", data.accessToken.split("Bearer ")[1]);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch({
          type: UPDATE_TOKEN_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_TOKEN_FAILED,
          err,
        });
      });
  };
};
