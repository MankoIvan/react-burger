export const INGREDIENT_DETAILS_SET = 'INGREDIENT_DETAILS_SET';
export const INGREDIENT_DETAILS_TOGGLE_MODAL = 'INGREDIENT_DETAILS_TOGGLE_MODAL';

export function toggleModal() {
  return function (dispatch) {
    dispatch({
      type: INGREDIENT_DETAILS_TOGGLE_MODAL
    });
  }
}
export function showIngredientDetails(ingredient) {
  return function (dispatch) {
    dispatch({
      type: INGREDIENT_DETAILS_SET,
      ingredient
    });
    dispatch({
      type: INGREDIENT_DETAILS_TOGGLE_MODAL
    });
  }
}