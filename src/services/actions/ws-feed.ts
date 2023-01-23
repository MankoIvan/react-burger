import { TWSOrdersResponse } from "../../types/generalTypes";
import {
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SEND_MESSAGE,
} from "../constants/ws-feed";

type TWSFeedConnectionStart = {
  readonly type: typeof WS_FEED_CONNECTION_START;
};

type TWSFeedConnectionSeccess = {
  readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
};

type TWSFeedConnectionError = {
  readonly type: typeof WS_FEED_CONNECTION_ERROR;
  payload: string;
};

type TWSFeedConnectionClose = {
  readonly type: typeof WS_FEED_CONNECTION_CLOSED;
};

type TWSFeedGetMessage = {
  readonly type: typeof WS_FEED_GET_MESSAGE;
  payload: TWSOrdersResponse;
};

type TWSFeedSendMessage = {
  readonly type: typeof WS_FEED_SEND_MESSAGE;
};

export type TWSFeedActions =
  | TWSFeedConnectionStart
  | TWSFeedConnectionSeccess
  | TWSFeedConnectionError
  | TWSFeedConnectionClose
  | TWSFeedGetMessage
  | TWSFeedSendMessage;

export const wsFeedActions = {
  wsConnect: WS_FEED_CONNECTION_START,
  wsSuccess: WS_FEED_CONNECTION_SUCCESS,
  wsError: WS_FEED_CONNECTION_ERROR,
  wsClosed: WS_FEED_CONNECTION_CLOSED,
  wsGetMessage: WS_FEED_GET_MESSAGE,
  wsSendMessage: WS_FEED_SEND_MESSAGE,
};
