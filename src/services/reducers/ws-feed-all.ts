import { TWSFeedStore, TWSStatus } from "../../types/generalTypes";
import { TWSFeedAllActions } from "../actions/ws-feed-all";
import {
  WS_FEED_ALL_CONNECTION_START,
  WS_FEED_ALL_CONNECTION_SUCCESS,
  WS_FEED_ALL_CONNECTION_ERROR,
  WS_FEED_ALL_CONNECTION_CLOSED,
  WS_FEED_ALL_GET_MESSAGE,
} from "../constants/ws-feed-all";

export const initialState: TWSFeedStore = {
  status: TWSStatus.OFFLINE,
  orders: [],
  total: null,
  totalToday: null,
  error: "",
};

export const wsFeedAllReducer = (
  state = initialState,
  action: TWSFeedAllActions
) => {
  switch (action.type) {
    case WS_FEED_ALL_CONNECTION_START: {
      return {
        ...state,
        status: TWSStatus.CONNECTING,
      };
    }
    case WS_FEED_ALL_CONNECTION_SUCCESS: {
      return {
        ...state,
        status: TWSStatus.ONLINE,
        error: "",
      };
    }
    case WS_FEED_ALL_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case WS_FEED_ALL_CONNECTION_CLOSED: {
      return {
        ...state,
        status: TWSStatus.OFFLINE,
      };
    }
    case WS_FEED_ALL_GET_MESSAGE: {
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
