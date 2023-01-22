import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "../../types";
import { TIngredient, TConstructorIngredient } from "../../types/generalTypes";
import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  SWITCH_INGREDIENTS_IN_CONSTRUCTOR,
} from "../constants/burger-constructor";

type TAddIngredient = {
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
  ingredient: TConstructorIngredient;
};

type TRemoveIngredient = {
  readonly type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
  uuid: string;
};

type TSwitchIngredients = {
  readonly type: typeof SWITCH_INGREDIENTS_IN_CONSTRUCTOR;
  id_1: number;
  id_2: number;
};

export type TBurgerConstructorActions =
  | TAddIngredient
  | TRemoveIngredient
  | TSwitchIngredients;

export const addIngredient = (ingredient: TIngredient) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: ADD_INGREDIENT_TO_CONSTRUCTOR,
      ingredient: {
        ...ingredient,
        _uuid: uuidv4(),
      },
    });
  };
};
export const removeIngredient = (uuid: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
      uuid,
    });
  };
};
export const switchIngredients = (id_1: number, id_2: number) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: SWITCH_INGREDIENTS_IN_CONSTRUCTOR,
      id_1,
      id_2,
    });
  };
};
