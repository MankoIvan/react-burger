import { INGREDIENTS_URL, ORDER_URL } from "../constants/api";
import { checkReponse } from "./checkResponse";

export const getIngredientsRequest = () => {
  return fetch(INGREDIENTS_URL)
    .then(checkReponse)
    .then(({ data }) =>
      data.reduce((acc, item) => {
        acc[item.type] = acc[item.type] || [];
        acc[item.type].push(item);
        return acc
      }, {})
    )
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
      ingredients: ingredients
    })
  })
    .then(checkReponse)
    .catch((err) => Promise.reject(err))
}