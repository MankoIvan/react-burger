import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from '../actions/burger-constructor'

const initialState = {
  bun: {},
  filling: []
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_CONSTRUCTOR: {
      if (action.ingredient.type === 'bun') {
        return {
          ...state,
          bun: action.ingredient
        }
      } else {
        return {
          ...state,
          filling: [
            ...state.filling,
            action.ingredient
          ]
        };
      }
    }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      return {
        ...state,
        filling: state.filling.filter(ingredient => ingredient._uuid !== action.uuid)
      }
    }

    default: {
      return state;
    }
  }
}