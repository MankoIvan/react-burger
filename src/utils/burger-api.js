import { INGREDIENTS_URL, ORDER_URL, AUTH_URL, PASSWORD_URL, USER_URL } from "../constants/api";
import { checkReponse } from "./checkResponse";
import { getCookie } from "./cookie";

export const getIngredientsRequest = () => {
  return fetch(INGREDIENTS_URL)
    .then(checkReponse)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err))
}
export const makeOrderRequest = (ingredients) => {
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

export const registerUserRequest = ({ email, password, name }) => {
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

export const loginUserRequest = ({ email, password }) => {
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

export function logoutUserRequest() {
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

export function forgotPasswordRequest({ email }) {
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

export function resetPasswordRequest({ password, token }) {
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

export function getUserRequest() {
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

export function updateUserRequest({ email, name }) {
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

export function updateTokenRequest() {
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