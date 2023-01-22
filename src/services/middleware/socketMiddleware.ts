import type { AnyAction, Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState } from "../../types";
import { getCookie } from "../../utils/cookie";
import { TSocketMiddlewareProps } from "./types";

export const socketMiddleware = ({
  wsUrl,
  isSecured = false,
  actions,
}: TSocketMiddlewareProps): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: AnyAction) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === actions.wsConnect) {
        if (isSecured) {
          socket = new WebSocket(`${wsUrl}?token=${getCookie("token")}`);
        } else {
          socket = new WebSocket(wsUrl);
        }
      }
      if (socket) {
        socket.onopen = () => {
          dispatch({ type: actions.wsSuccess });
        };

        socket.onerror = () => {
          dispatch({ type: actions.wsError, payload: "error" });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({
            type: actions.wsGetMessage,
            payload: JSON.parse(data),
          });
        };
        socket.onclose = () => {
          dispatch({ type: actions.wsClosed });
        };

        if (type === actions.wsSendMessage) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
