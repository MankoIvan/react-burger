type ApiResponse = {
  success: boolean;
};

export type TMakeOrderResponse = ApiResponse & {
  name: string;
  order: {
    number: number;
  };
};

export type TRegisterUserRequest = {
  email: string;
  password: string;
  name: string;
};

export type TRegisterUserResponse = ApiResponse & {
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
};

export type TLoginUserRequest = {
  email: string;
  password: string;
};

export type TLoginUserResponse = ApiResponse & {
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
};

export type TLogoutUserResponse = ApiResponse & {
  message: string;
};

export type TForgotPasswordRequest = {
  email: string;
};

export type TForgotPasswordResponse = ApiResponse & {
  message: string;
};

export type TResetPasswordRequest = {
  password: string;
  token: string;
};

export type TResetPasswordResponse = ApiResponse & {
  message: string;
};

export type TUpdateUserRequest = {
  email: string;
  name: string;
};

export type TUpdateTokenResponse = ApiResponse & {
  accessToken: string;
  refreshToken: string;
};
