import { combineReducers } from 'redux';

import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { burgerConstructorReducer } from './burger-constructor';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  burgerConstructor: burgerConstructorReducer,
  auth: authReducer
});