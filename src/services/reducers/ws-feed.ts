import { TWSFeedStore, TWSStatus } from "../../types/generalTypes";
import { TWSFeedActions } from "../actions/ws-feed";
import {
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE,
} from "../constants/ws-feed";

export const initialState: TWSFeedStore = {
  status: TWSStatus.OFFLINE,
  orders: [],
  total: null,
  totalToday: null,
  error: "",
};

export const wsFeedReducer = (state = initialState, action: TWSFeedActions) => {
  switch (action.type) {
    case WS_FEED_CONNECTION_START: {
      return {
        ...state,
        status: TWSStatus.CONNECTING,
      };
    }
    case WS_FEED_CONNECTION_SUCCESS: {
      return {
        ...state,
        status: TWSStatus.ONLINE,
        error: "",
      };
    }
    case WS_FEED_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case WS_FEED_CONNECTION_CLOSED: {
      return {
        ...state,
        status: TWSStatus.OFFLINE,
      };
    }
    case WS_FEED_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    }
    default: {
      return state;
    }
  }
};
