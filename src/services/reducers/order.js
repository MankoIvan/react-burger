import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_TOGGLE_MODAL
} from "../actions/order";

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
  showDetails: false
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER_TOGGLE_MODAL: {
      return {
        ...state,
        showDetails: !state.showDetails
      };
    }
    case MAKE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case MAKE_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.data.order,
        orderFailed: false,
        orderRequest: false
      };
    }
    case MAKE_ORDER_FAILED: {
      return {
        ...state,
        order: initialState.order,
        orderFailed: true,
        orderRequest: false
      };
    }
    default: {
      return state;
    }
  }
}