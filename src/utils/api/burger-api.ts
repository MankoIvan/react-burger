import { INGREDIENTS_URL, ORDER_URL, AUTH_URL, PASSWORD_URL, USER_URL } from "../../constants/api";
import { TIngredient, TUser } from "../../types/generalTypes";
import { checkReponse } from "../checkResponse";
import { getCookie } from "../cookie";
import { TForgotPasswordRequest, TForgotPasswordResponse, TLoginUserRequest, TLoginUserResponse, TLogoutUserResponse, TMakeOrderResponse, TRegisterUserRequest, TRegisterUserResponse, TResetPasswordRequest, TResetPasswordResponse, TUpdateTokenResponse, TUpdateUserRequest } from "./burger-api.types";

export const getIngredientsRequest = (): Promise<TIngredient[]> => {
  return fetch(INGREDIENTS_URL)
    .then(checkReponse)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err))
}

export const makeOrderRequest = (ingredients: TIngredient[]): Promise<TMakeOrderResponse> => {
  return fetch(ORDER_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: ingredients.map(item => item._id).filter(item => !!item)
    })
  })
    .then(checkReponse)
    .catch((err) => Promise.reject(err))
}

export const registerUserRequest = ({ email, password, name }: TRegisterUserRequest): Promise<TRegisterUserResponse> => {
  return fetch(`${AUTH_URL}/register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name
    }),
  })
    .then(checkReponse)
    .catch((err) => Promise.reject(err))
}

export const loginUserRequest = ({ email, password }: TLoginUserRequest): Promise<TLoginUserResponse> => {
  return fetch(`${AUTH_URL}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(checkReponse)
    .catch((err) => Promise.reject(err))
}

export const logoutUserRequest = (): Promise<TLogoutUserResponse> => {
  return fetch(`${AUTH_URL}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    }),
  })
    .then(checkReponse)
    .catch((err) => Promise.reject(err))
}

export const forgotPasswordRequest = ({ email }: TForgotPasswordRequest): Promise<TForgotPasswordResponse> => {
  return fetch(PASSWORD_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then(checkReponse)
    .catch((err) => Promise.reject(err))
}

export const resetPasswordRequest = ({ password, token }: TResetPasswordRequest): Promise<TResetPasswordResponse> => {
  return fetch(`${PASSWORD_URL}/reset`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  })
    .then(checkReponse)
    .catch((err) => Promise.reject(err))
}

export const getUserRequest = (): Promise<TUser> => {
  return fetch(USER_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + getCookie('token')
    }
  })
    .then(checkReponse)
    .then(({ user }) => user)
    .catch((err) => Promise.reject(err))
}

export const updateUserRequest = ({ email, name }: TUpdateUserRequest): Promise<TUser> => {
  return fetch(USER_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({
      email: email,
      name: name
    })
  })
    .then(checkReponse)
    .then(({ user }) => user)
    .catch((err) => Promise.reject(err))
}

export const updateTokenRequest = (): Promise<TUpdateTokenResponse> => {
  return fetch(`${AUTH_URL}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    }),
  })
    .then(checkReponse)
    .catch((err) => Promise.reject(err))
}