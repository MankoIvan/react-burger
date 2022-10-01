import {
  INGREDIENT_DETAILS_SET,
  INGREDIENT_DETAILS_TOGGLE_MODAL
} from '../actions/ingredient-details'

const initialState = {
  ingredient: {},
  showDetails: false
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_DETAILS_SET: {
      return {
        ...state,
        ingredient: action.ingredient
      };
    }
    case INGREDIENT_DETAILS_TOGGLE_MODAL: {
      return {
        ...state,
        showDetails: !state.showDetails
      };
    }
    default: {
      return state;
    }
  }
}