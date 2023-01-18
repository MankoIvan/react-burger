import { TIngredient } from "../../types/generalTypes";
import { getIngredientsRequest } from "../../utils/api/burger-api";
import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../constants/ingredients";
import { AppDispatch, AppThunk } from "../../types";

type TGetIngredientsRequest = {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};

type TGetIngredientsSuccess = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  data: TIngredient[];
};

type TGetIngredientsFailed = {
  readonly type: typeof GET_INGREDIENTS_FAILED;
};

export type TIngredientsActons =
  | TGetIngredientsRequest
  | TGetIngredientsSuccess
  | TGetIngredientsFailed;

export const getIngredients = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredientsRequest()
      .then((data) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
          err,
        });
      });
  };
};
