import { makeOrderRequest } from "../../utils/burger-api";
export const MAKE_ORDER_REQUEST = 'MAKE_ORDER_REQUEST';
export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS';
export const MAKE_ORDER_FAILED = 'MAKE_ORDER_FAILED';
export const MAKE_ORDER_TOGGLE_MODAL = 'MAKE_ORDER_TOGGLE_MODAL';

export function makeOrder(ingredients) {
  return function (dispatch) {
    dispatch({
      type: MAKE_ORDER_REQUEST
    });
    dispatch({
      type: MAKE_ORDER_TOGGLE_MODAL
    });
    makeOrderRequest(ingredients)
      .then(data => {
        dispatch({
          type: MAKE_ORDER_SUCCESS,
          data
        });
      })
      .catch(err => {
        dispatch({
          type: MAKE_ORDER_FAILED,
          err
        });
      })

  };
}

export function toggleModal() {
  return function (dispatch) {
    dispatch({
      type: MAKE_ORDER_TOGGLE_MODAL
    })
  }
}