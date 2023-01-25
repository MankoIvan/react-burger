import { TOrderStore } from "../../types/generalTypes";
import { TOrderActions } from "../actions/order";
import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_TOGGLE_MODAL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../constants/order";

export const initialState: TOrderStore = {
  order: null,
  orderRequest: false,
  orderFailed: false,
  showDetails: false,
  explicitOrder: undefined,
  explicitOrderRequest: false,
  explicitOrderFailed: false,
};

export const orderReducer = (state = initialState, action: TOrderActions) => {
  switch (action.type) {
    case MAKE_ORDER_TOGGLE_MODAL: {
      return {
        ...state,
        showDetails: !state.showDetails,
      };
    }

    case MAKE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case MAKE_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.data.order,
        orderFailed: false,
        orderRequest: false,
      };
    }
    case MAKE_ORDER_FAILED: {
      return {
        ...state,
        order: initialState.order,
        orderFailed: true,
        orderRequest: false,
      };
    }

    case GET_ORDER_REQUEST: {
      return {
        ...state,
        explicitOrderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        explicitOrder: action.order,
        explicitOrderFailed: false,
        explicitOrderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        order: initialState.order,
        explicitOrderFailed: true,
        explicitOrderRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
