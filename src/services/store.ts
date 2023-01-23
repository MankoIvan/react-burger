import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { WS_ALL_ORDERS_URL, WS_MY_ORDERS_URL } from "../constants/api";
import { wsFeedActions } from "./actions/ws-feed";
import { wsFeedAllActions } from "./actions/ws-feed-all";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { rootReducer } from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(
    socketMiddleware({ wsUrl: WS_ALL_ORDERS_URL, actions: wsFeedAllActions })
  ),
  applyMiddleware(
    socketMiddleware({
      wsUrl: WS_MY_ORDERS_URL,
      isSecured: true,
      actions: wsFeedActions,
    })
  )
);
export const store = createStore(rootReducer, enhancer);
