import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { burgerConstructorReducer } from "./burger-constructor";
import { authReducer } from "./auth";
import { wsFeedAllReducer } from "./ws-feed-all";
import { wsFeedReducer } from "./ws-feed";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  burgerConstructor: burgerConstructorReducer,
  auth: authReducer,
  feedALL: wsFeedAllReducer,
  feed: wsFeedReducer,
});
