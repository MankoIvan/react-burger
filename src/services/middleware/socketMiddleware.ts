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
        // объект класса WebSocket
        if (isSecured) {
          socket = new WebSocket(`${wsUrl}?token=${getCookie("token")}`);
        } else {
          socket = new WebSocket(wsUrl);
        }
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = () => {
          dispatch({ type: actions.wsSuccess });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = () => {
          dispatch({ type: actions.wsError, payload: "error" });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({
            type: actions.wsGetMessage,
            payload: JSON.parse(data),
          });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = () => {
          dispatch({ type: actions.wsClosed });
        };

        if (type === actions.wsSendMessage) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
