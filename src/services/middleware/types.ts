import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SEND_MESSAGE,
} from "../constants/ws-feed";
import {
  WS_FEED_ALL_CONNECTION_START,
  WS_FEED_ALL_CONNECTION_SUCCESS,
  WS_FEED_ALL_CONNECTION_ERROR,
  WS_FEED_ALL_CONNECTION_CLOSED,
  WS_FEED_ALL_GET_MESSAGE,
  WS_FEED_ALL_SEND_MESSAGE,
} from "../constants/ws-feed-all";

type TSocketMiddlewareActions = {
  wsConnect:
    | typeof WS_FEED_ALL_CONNECTION_START
    | typeof WS_FEED_CONNECTION_START;
  wsSuccess:
    | typeof WS_FEED_ALL_CONNECTION_SUCCESS
    | typeof WS_FEED_CONNECTION_SUCCESS;
  wsError:
    | typeof WS_FEED_ALL_CONNECTION_ERROR
    | typeof WS_FEED_CONNECTION_ERROR;
  wsClosed:
    | typeof WS_FEED_ALL_CONNECTION_CLOSED
    | typeof WS_FEED_CONNECTION_CLOSED;
  wsGetMessage: typeof WS_FEED_ALL_GET_MESSAGE | typeof WS_FEED_GET_MESSAGE;
  wsSendMessage: typeof WS_FEED_ALL_SEND_MESSAGE | typeof WS_FEED_SEND_MESSAGE;
};

export type TSocketMiddlewareProps = {
  wsUrl: string;
  isSecured?: boolean;
  actions: TSocketMiddlewareActions;
};
