import {
  TOrder,
  TWSOrdersResponse,
  TWSStatus,
} from "../../../types/generalTypes";
import { TWSFeedActions } from "../../actions/ws-feed";
import {
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE,
} from "../../constants/ws-feed";
import { initialState, wsFeedReducer } from "../ws-feed";

describe("ws feed reducer", () => {
  const FAKE_ERROR = "test";
  const FAKE_ORDER: TOrder = {
    ingredients: ["123", "234", "345"],
    _id: "123",
    status: "done",
    number: 123,
    name: "test",
    createdAt: "test",
    updatedAt: "test",
  };
  const ANOTHER_FAKE_ORDER: TOrder = { ...FAKE_ORDER, number: 124 };
  const FAKE_ORDERS_RESPONSE: TWSOrdersResponse = {
    success: true,
    totalToday: 123,
    total: 234,
    orders: [FAKE_ORDER, ANOTHER_FAKE_ORDER],
  };

  it("should return the initial state", () => {
    expect(wsFeedReducer(undefined, {} as TWSFeedActions)).toEqual(
      initialState
    );
  });

  it("should handle WS_FEED_CONNECTION_START", () => {
    expect(
      wsFeedReducer(initialState, {
        type: WS_FEED_CONNECTION_START,
      })
    ).toEqual({ ...initialState, status: TWSStatus.CONNECTING });
  });

  it("should handle WS_FEED_CONNECTION_SUCCESS", () => {
    expect(
      wsFeedReducer(initialState, {
        type: WS_FEED_CONNECTION_SUCCESS,
      })
    ).toEqual({ ...initialState, status: TWSStatus.ONLINE });
  });

  it("should handle WS_FEED_CONNECTION_ERROR", () => {
    expect(
      wsFeedReducer(initialState, {
        type: WS_FEED_CONNECTION_ERROR,
        payload: FAKE_ERROR,
      })
    ).toEqual({ ...initialState, error: FAKE_ERROR });
  });

  it("should handle WS_FEED_CONNECTION_CLOSED", () => {
    expect(
      wsFeedReducer(initialState, {
        type: WS_FEED_CONNECTION_CLOSED,
      })
    ).toEqual({ ...initialState, status: TWSStatus.OFFLINE });
  });

  it("should handle WS_FEED_GET_MESSAGE", () => {
    expect(
      wsFeedReducer(initialState, {
        type: WS_FEED_GET_MESSAGE,
        payload: FAKE_ORDERS_RESPONSE,
      })
    ).toEqual({
      ...initialState,
      orders: FAKE_ORDERS_RESPONSE.orders,
      total: FAKE_ORDERS_RESPONSE.total,
      totalToday: FAKE_ORDERS_RESPONSE.totalToday,
    });
  });
});
