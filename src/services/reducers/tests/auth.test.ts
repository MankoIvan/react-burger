import { TUser } from "../../../types/generalTypes";
import { TAuthActions } from "../../actions/auth";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,
} from "../../constants/auth";
import { authReducer, initialState } from "../auth";

describe("auth reducer", () => {
  const FAKE_USER: TUser = {
    email: "test",
    name: "test",
  };
  const stateWithUser = { ...initialState, user: FAKE_USER };

  it("should return the initial state", () => {
    expect(authReducer(undefined, {} as TAuthActions)).toEqual(initialState);
  });

  it("should handle REGISTER_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_REQUEST,
      })
    ).toEqual({ ...initialState, registerRequest: true });
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_SUCCESS,
        user: FAKE_USER,
      })
    ).toEqual({ ...initialState, user: FAKE_USER });
  });

  it("should handle REGISTER_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_FAILED,
      })
    ).toEqual({ ...initialState, registerFailed: true });
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_REQUEST,
      })
    ).toEqual({ ...initialState, loginRequest: true });
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_SUCCESS,
        user: FAKE_USER,
      })
    ).toEqual({ ...initialState, user: FAKE_USER });
  });

  it("should handle LOGIN_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_FAILED,
      })
    ).toEqual({ ...initialState, loginFailed: true });
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(
      authReducer(stateWithUser, {
        type: LOGOUT_REQUEST,
      })
    ).toEqual({ ...stateWithUser, logoutRequest: true });
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      authReducer(stateWithUser, {
        type: LOGOUT_SUCCESS,
      })
    ).toEqual({ ...initialState });
  });

  it("should handle LOGOUT_FAILED", () => {
    expect(
      authReducer(stateWithUser, {
        type: LOGOUT_FAILED,
      })
    ).toEqual({ ...stateWithUser, logoutFailed: true });
  });

  it("should handle FORGOT_PASSWORD_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_REQUEST,
      })
    ).toEqual({ ...initialState, forgotPasswordRequest: true });
  });

  it("should handle FORGOT_PASSWORD_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_SUCCESS,
      })
    ).toEqual({ ...initialState, forgotPasswordSuccess: true });
  });

  it("should handle FORGOT_PASSWORD_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: FORGOT_PASSWORD_FAILED,
      })
    ).toEqual({ ...initialState, forgotPasswordFailed: true });
  });

  it("should handle RESET_PASSWORD_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_REQUEST,
      })
    ).toEqual({ ...initialState, resetPasswordRequest: true });
  });

  it("should handle RESET_PASSWORD_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_SUCCESS,
      })
    ).toEqual({ ...initialState });
  });

  it("should handle RESET_PASSWORD_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: RESET_PASSWORD_FAILED,
      })
    ).toEqual({ ...initialState, resetPasswordFailed: true });
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: GET_USER_REQUEST,
      })
    ).toEqual({ ...initialState, getUserRequest: true });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: GET_USER_SUCCESS,
        user: FAKE_USER,
      })
    ).toEqual({ ...initialState, user: FAKE_USER });
  });

  it("should handle GET_USER_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: GET_USER_FAILED,
      })
    ).toEqual({ ...initialState, getUserFailed: true });
  });

  it("should handle UPDATE_USER_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_REQUEST,
      })
    ).toEqual({ ...initialState, updateUserRequest: true });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_SUCCESS,
        user: FAKE_USER,
      })
    ).toEqual({ ...initialState, user: FAKE_USER });
  });

  it("should handle UPDATE_USER_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_FAILED,
      })
    ).toEqual({ ...initialState, updateUserFailed: true });
  });

  it("should handle UPDATE_TOKEN_REQUEST", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_TOKEN_REQUEST,
      })
    ).toEqual({ ...initialState, updateTokenRequest: true });
  });

  it("should handle UPDATE_TOKEN_SUCCESS", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_TOKEN_SUCCESS,
      })
    ).toEqual({ ...initialState });
  });

  it("should handle UPDATE_TOKEN_FAILED", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_TOKEN_FAILED,
      })
    ).toEqual({ ...initialState, updateTokenFailed: true });
  });
});
