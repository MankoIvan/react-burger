import { TOrder } from "../../../types/generalTypes";
import { TMakeOrderResponse } from "../../../utils/api/burger-api.types";
import { TOrderActions } from "../../actions/order";
import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_TOGGLE_MODAL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../../constants/order";
import { initialState, orderReducer } from "../order";

describe("order reducer", () => {
  const FAKE_ORDER_RESPONSE: TMakeOrderResponse = {
    success: true,
    name: "test",
    order: {
      number: 123456,
    },
  };
  const FAKE_ORDER: TOrder = {
    ingredients: ["123", "234", "345"],
    _id: "123",
    status: "done",
    number: 123,
    name: "test",
    createdAt: "test",
    updatedAt: "test",
  };
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {} as TOrderActions)).toEqual(initialState);
  });

  it("should handle MAKE_ORDER_REQUEST", () => {
    expect(
      orderReducer(initialState, {
        type: MAKE_ORDER_REQUEST,
      })
    ).toEqual({ ...initialState, orderRequest: true });
  });

  it("should handle MAKE_ORDER_SUCCESS", () => {
    expect(
      orderReducer(initialState, {
        type: MAKE_ORDER_SUCCESS,
        data: FAKE_ORDER_RESPONSE,
      })
    ).toEqual({ ...initialState, order: FAKE_ORDER_RESPONSE.order });
  });

  it("should handle MAKE_ORDER_FAILED", () => {
    expect(
      orderReducer(initialState, {
        type: MAKE_ORDER_FAILED,
      })
    ).toEqual({ ...initialState, orderFailed: true });
  });

  it("should handle GET_ORDER_REQUEST", () => {
    expect(
      orderReducer(initialState, {
        type: GET_ORDER_REQUEST,
      })
    ).toEqual({ ...initialState, explicitOrderRequest: true });
  });

  it("should handle GET_ORDER_SUCCESS", () => {
    expect(
      orderReducer(initialState, {
        type: GET_ORDER_SUCCESS,
        order: FAKE_ORDER,
      })
    ).toEqual({ ...initialState, explicitOrder: FAKE_ORDER });
  });

  it("should handle GET_ORDER_FAILED", () => {
    expect(
      orderReducer(initialState, {
        type: GET_ORDER_FAILED,
      })
    ).toEqual({ ...initialState, explicitOrderFailed: true });
  });

  it("should handle MAKE_ORDER_TOGGLE_MODAL", () => {
    expect(
      orderReducer(initialState, {
        type: MAKE_ORDER_TOGGLE_MODAL,
      })
    ).toEqual({ ...initialState, showDetails: true });
  });
});
