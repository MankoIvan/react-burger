import { INGREDIENTS_URL } from "../constants/api";
import { checkReponse } from "./checkResponse";

export const getIngredientsData = () => {
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