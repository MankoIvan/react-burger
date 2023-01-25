import {
  TOrder,
  TWSOrdersResponse,
  TWSStatus,
} from "../../../types/generalTypes";
import { TWSFeedAllActions } from "../../actions/ws-feed-all";
import {
  WS_FEED_ALL_CONNECTION_START,
  WS_FEED_ALL_CONNECTION_SUCCESS,
  WS_FEED_ALL_CONNECTION_ERROR,
  WS_FEED_ALL_CONNECTION_CLOSED,
  WS_FEED_ALL_GET_MESSAGE,
} from "../../constants/ws-feed-all";
import { initialState, wsFeedAllReducer } from "../ws-feed-all";

describe("ws feed all reducer", () => {
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
    expect(wsFeedAllReducer(undefined, {} as TWSFeedAllActions)).toEqual(
      initialState
    );
  });

  it("should handle WS_FEED_ALL_CONNECTION_START", () => {
    expect(
      wsFeedAllReducer(initialState, {
        type: WS_FEED_ALL_CONNECTION_START,
      })
    ).toEqual({ ...initialState, status: TWSStatus.CONNECTING });
  });

  it("should handle WS_FEED_ALL_CONNECTION_SUCCESS", () => {
    expect(
      wsFeedAllReducer(initialState, {
        type: WS_FEED_ALL_CONNECTION_SUCCESS,
      })
    ).toEqual({ ...initialState, status: TWSStatus.ONLINE });
  });

  it("should handle WS_FEED_ALL_CONNECTION_ERROR", () => {
    expect(
      wsFeedAllReducer(initialState, {
        type: WS_FEED_ALL_CONNECTION_ERROR,
        payload: FAKE_ERROR,
      })
    ).toEqual({ ...initialState, error: FAKE_ERROR });
  });

  it("should handle WS_FEED_ALL_CONNECTION_CLOSED", () => {
    expect(
      wsFeedAllReducer(initialState, {
        type: WS_FEED_ALL_CONNECTION_CLOSED,
      })
    ).toEqual({ ...initialState, status: TWSStatus.OFFLINE });
  });

  it("should handle WS_FEED_ALL_GET_MESSAGE", () => {
    expect(
      wsFeedAllReducer(initialState, {
        type: WS_FEED_ALL_GET_MESSAGE,
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
