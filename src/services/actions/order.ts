import { AppDispatch, AppThunk } from "../../types";
import { TIngredient } from "../../types/generalTypes";
import { makeOrderRequest } from "../../utils/api/burger-api";
import { TMakeOrderResponse } from "../../utils/api/burger-api.types";
import {
  MAKE_ORDER_FAILED,
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_TOGGLE_MODAL,
} from "../constants/order";

type TMakeOrderRequest = {
  readonly type: typeof MAKE_ORDER_REQUEST;
};

type TMakeOrderSuccess = {
  readonly type: typeof MAKE_ORDER_SUCCESS;
  data: TMakeOrderResponse;
};

type TMakeOrderFailed = {
  readonly type: typeof MAKE_ORDER_FAILED;
};

type TMakeOrderToggleModal = {
  readonly type: typeof MAKE_ORDER_TOGGLE_MODAL;
};

export type TOrderActions =
  | TMakeOrderRequest
  | TMakeOrderSuccess
  | TMakeOrderFailed
  | TMakeOrderToggleModal;

export const makeOrder = (ingredients: TIngredient[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: MAKE_ORDER_REQUEST,
    });
    dispatch({
      type: MAKE_ORDER_TOGGLE_MODAL,
    });
    makeOrderRequest(ingredients)
      .then((data) => {
        dispatch({
          type: MAKE_ORDER_SUCCESS,
          data,
        });
      })
      .catch((err) => {
        dispatch({
          type: MAKE_ORDER_FAILED,
          err,
        });
      });
  };
};

export const toggleModal = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: MAKE_ORDER_TOGGLE_MODAL,
    });
  };
};
