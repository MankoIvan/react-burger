import { TWSOrdersResponse } from "../../types/generalTypes";
import {
  WS_FEED_ALL_CONNECTION_START,
  WS_FEED_ALL_CONNECTION_SUCCESS,
  WS_FEED_ALL_CONNECTION_ERROR,
  WS_FEED_ALL_CONNECTION_CLOSED,
  WS_FEED_ALL_GET_MESSAGE,
  WS_FEED_ALL_SEND_MESSAGE,
} from "../constants/ws-feed-all";

type TWSFeedAllConnectionStart = {
  readonly type: typeof WS_FEED_ALL_CONNECTION_START;
};

type TWSFeedAllConnectionSeccess = {
  readonly type: typeof WS_FEED_ALL_CONNECTION_SUCCESS;
};

type TWSFeedAllConnectionError = {
  readonly type: typeof WS_FEED_ALL_CONNECTION_ERROR;
  payload: string;
};

type TWSFeedAllConnectionClose = {
  readonly type: typeof WS_FEED_ALL_CONNECTION_CLOSED;
};

type TWSFeedAllGetMessage = {
  readonly type: typeof WS_FEED_ALL_GET_MESSAGE;
  payload: TWSOrdersResponse;
};

type TWSFeedAllSendMessage = {
  readonly type: typeof WS_FEED_ALL_SEND_MESSAGE;
};

export type TWSFeedAllActions =
  | TWSFeedAllConnectionStart
  | TWSFeedAllConnectionSeccess
  | TWSFeedAllConnectionError
  | TWSFeedAllConnectionClose
  | TWSFeedAllGetMessage
  | TWSFeedAllSendMessage;

export const wsFeedAllActions = {
  wsConnect: WS_FEED_ALL_CONNECTION_START,
  wsSuccess: WS_FEED_ALL_CONNECTION_SUCCESS,
  wsError: WS_FEED_ALL_CONNECTION_ERROR,
  wsClosed: WS_FEED_ALL_CONNECTION_CLOSED,
  wsGetMessage: WS_FEED_ALL_GET_MESSAGE,
  wsSendMessage: WS_FEED_ALL_SEND_MESSAGE,
};
