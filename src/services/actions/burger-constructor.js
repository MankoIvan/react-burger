import { v4 as uuidv4 } from 'uuid';
export const ADD_INGREDIENT_TO_CONSTRUCTOR = 'ADD_INGREDIENT_TO_CONSTRUCTOR'
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR'

export function addIngredient(ingredient) {
  return function (dispatch) {
    dispatch({
      type: ADD_INGREDIENT_TO_CONSTRUCTOR,
      ingredient: {
        ...ingredient,
        _uuid: uuidv4()
      }
    });
  }
}
export function removeIngredient(uuid) {
  return function (dispatch) {
    dispatch({
      type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
      uuid
    });
  }
}
