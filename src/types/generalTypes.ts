import { Location } from "history";

export type TLocation = {
  background: Location
  from?: string;
}

export type TUser = {
  email: string;
  name: string;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TConstructorIngredient = TIngredient & {
  _uuid: string
}

export type TIngredientsStore = {
  items: TIngredient[],
  itemsRequest: boolean,
  itemsFailed: boolean
}

export type TOrderStore = {
  order: {
    number: number
  } | null,
  orderRequest: boolean,
  orderFailed: boolean,
  showDetails: boolean
}

export type TBurgerConstructorStore = {
  bun?: TConstructorIngredient,
  filling: TConstructorIngredient[]
}

export type TAuthStore = {
  user?: TUser,

  registerRequest: boolean,
  registerFailed: boolean,

  loginRequest: boolean,
  loginFailed: boolean,

  logoutRequest: boolean,
  logoutFailed: boolean,

  forgotPasswordRequest: boolean,
  forgotPasswordSuccess: boolean,
  forgotPasswordFailed: boolean,

  resetPasswordRequest: boolean,
  resetPasswordFailed: boolean,

  getUserRequest: boolean,
  getUserFailed: boolean,

  updateUserRequest: boolean,
  updateUserFailed: boolean,

  updateTokenRequest: boolean,
  updateTokenFailed: boolean,
}

export type TStore = {
  ingredients: TIngredientsStore;
  order: TOrderStore;
  burgerConstructor: TBurgerConstructorStore;
  auth: TAuthStore;
}