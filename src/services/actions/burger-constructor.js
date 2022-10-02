import { v4 as uuidv4 } from 'uuid';
export const ADD_INGREDIENT_TO_CONSTRUCTOR = 'ADD_INGREDIENT_TO_CONSTRUCTOR'
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR'
export const SWITCH_INGREDIENTS_IN_CONSTRUCTOR = 'SWITCH_INGREDIENTS_IN_CONSTRUCTOR'

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
export function switchIngredients(id_1, id_2) {
  return function(dispatch) {
    dispatch({
      type: SWITCH_INGREDIENTS_IN_CONSTRUCTOR,
      id_1,
      id_2
    })
  }
}
