import { TConstructorIngredient } from "../../../types/generalTypes";
import { TBurgerConstructorActions } from "../../actions/burger-constructor";
import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  SWITCH_INGREDIENTS_IN_CONSTRUCTOR,
} from "../../constants/burger-constructor";
import { burgerConstructorReducer, initialState } from "../burger-constructor";

describe("burger constructor reducer", () => {
  const FAKE_INGREDIENT: TConstructorIngredient = {
    _id: "test",
    name: "test",
    type: "test",
    proteins: 123,
    fat: 123,
    carbohydrates: 123,
    calories: 123,
    price: 123,
    image: "test",
    image_mobile: "test",
    image_large: "test",
    __v: 123,
    _uuid: "123",
  };

  const ANOTHER_FAKE_INGREDIENT: TConstructorIngredient = {
    ...FAKE_INGREDIENT,
    _uuid: "234",
  };

  const FAKE_BUN: TConstructorIngredient = { ...FAKE_INGREDIENT, type: "bun" };

  it("should return the initial state", () => {
    expect(
      burgerConstructorReducer(undefined, {} as TBurgerConstructorActions)
    ).toEqual(initialState);
  });

  it("should handle bun ADD_INGREDIENT_TO_CONSTRUCTOR", () => {
    expect(
      burgerConstructorReducer(initialState, {
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        ingredient: FAKE_BUN,
      })
    ).toEqual({ ...initialState, bun: FAKE_BUN });
  });

  it("should handle ingredient ADD_INGREDIENT_TO_CONSTRUCTOR", () => {
    expect(
      burgerConstructorReducer(initialState, {
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        ingredient: FAKE_INGREDIENT,
      })
    ).toEqual({ ...initialState, filling: [FAKE_INGREDIENT] });
  });

  it("should handle REMOVE_INGREDIENT_FROM_CONSTRUCTOR", () => {
    expect(
      burgerConstructorReducer(
        {
          ...initialState,
          filling: [FAKE_INGREDIENT, ANOTHER_FAKE_INGREDIENT],
        },
        {
          type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
          uuid: FAKE_INGREDIENT._uuid,
        }
      )
    ).toEqual({ ...initialState, filling: [ANOTHER_FAKE_INGREDIENT] });
  });

  it("should handle SWITCH_INGREDIENTS_IN_CONSTRUCTOR", () => {
    expect(
      burgerConstructorReducer(
        {
          ...initialState,
          filling: [FAKE_INGREDIENT, ANOTHER_FAKE_INGREDIENT],
        },
        {
          type: SWITCH_INGREDIENTS_IN_CONSTRUCTOR,
          id_1: 0,
          id_2: 1,
        }
      )
    ).toEqual({
      ...initialState,
      filling: [ANOTHER_FAKE_INGREDIENT, FAKE_INGREDIENT],
    });
  });
});
