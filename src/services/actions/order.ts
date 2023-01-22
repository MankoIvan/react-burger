import { AppDispatch } from "../../types";
import { TIngredient, TOrder } from "../../types/generalTypes";
import { getOrderRequest, makeOrderRequest } from "../../utils/api/burger-api";
import { TMakeOrderResponse } from "../../utils/api/burger-api.types";
import {
  MAKE_ORDER_FAILED,
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_TOGGLE_MODAL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
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

type TGetOrderRequest = {
  readonly type: typeof GET_ORDER_REQUEST;
};

type TGetOrderSuccess = {
  readonly type: typeof GET_ORDER_SUCCESS;
  order: TOrder | undefined;
};

type TGetOrderFailed = {
  readonly type: typeof GET_ORDER_FAILED;
};

type TMakeOrderToggleModal = {
  readonly type: typeof MAKE_ORDER_TOGGLE_MODAL;
};

export type TOrderActions =
  | TMakeOrderRequest
  | TMakeOrderSuccess
  | TMakeOrderFailed
  | TMakeOrderToggleModal
  | TGetOrderRequest
  | TGetOrderSuccess
  | TGetOrderFailed;

export const makeOrder = (ingredients: TIngredient[]) => {
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

export const getOrder = (number: number) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    getOrderRequest(number)
      .then((order) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          err,
        });
      });
  };
};

export const toggleModal = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: MAKE_ORDER_TOGGLE_MODAL,
    });
  };
};
