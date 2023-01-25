import { TIngredientsStore } from "../../types/generalTypes";
import { TIngredientsActons } from "../actions/ingredients";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from "../constants/ingredients";

export const initialState: TIngredientsStore = {
  items: [],
  itemsRequest: false,
  itemsFailed: false
};

export const ingredientsReducer = (state = initialState, action: TIngredientsActons) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        itemsRequest: true
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        items: action.data,
        itemsFailed: false,
        itemsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        items: initialState.items,
        itemsFailed: true,
        itemsRequest: false
      };
    }
    default: {
      return state;
    }
  }
}