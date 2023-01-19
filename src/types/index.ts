import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TAuthActions } from "../services/actions/auth";
import { TBurgerConstructorActions } from "../services/actions/burger-constructor";
import { TIngredientsActons } from "../services/actions/ingredients";
import { TOrderActions } from "../services/actions/order";
import { TWSFeedActions } from "../services/actions/ws-feed";
import { TWSFeedAllActions } from "../services/actions/ws-feed-all";
import { rootReducer } from "../services/reducers";

export type RootState = ReturnType<typeof rootReducer>;

export type TApplicationActions =
  | TIngredientsActons
  | TOrderActions
  | TBurgerConstructorActions
  | TAuthActions
  | TWSFeedAllActions
  | TWSFeedActions;

export type AppThunk<TReturn = void> = ThunkAction<
  TReturn,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = Dispatch<TApplicationActions>;
