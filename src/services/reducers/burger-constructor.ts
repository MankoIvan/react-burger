import { TBurgerConstructorStore } from '../../types/generalTypes';
import { TBurgerConstructorActions } from '../actions/burger-constructor';
import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  SWITCH_INGREDIENTS_IN_CONSTRUCTOR
} from '../constants/burger-constructor'

const initialState: TBurgerConstructorStore = {
  bun: undefined,
  filling: []
};

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions) => {
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
    case SWITCH_INGREDIENTS_IN_CONSTRUCTOR: {
      if (action.id_1 !== action.id_2) {
        const newFilling = [...state.filling]
        newFilling[action.id_1] = state.filling[action.id_2]
        newFilling[action.id_2] = state.filling[action.id_1]
        return {
          ...state,
          filling: newFilling
        }
      }
      return state;
    }

    default: {
      return state;
    }
  }
}