import { TIngredient } from "../../../types/generalTypes";
import { TIngredientsActons } from "../../actions/ingredients";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../../constants/ingredients";
import { ingredientsReducer, initialState } from "../ingredients";

describe("ingredients reducer", () => {
  const FAKE_INGREDIENTS: TIngredient[] = [
    {
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
    },
  ];

  it("should return the initial state", () => {
    expect(ingredientsReducer(undefined, {} as TIngredientsActons)).toEqual(
      initialState
    );
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsReducer(initialState, {
        type: GET_INGREDIENTS_REQUEST,
      })
    ).toEqual({ ...initialState, itemsRequest: true });
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    expect(
      ingredientsReducer(initialState, {
        type: GET_INGREDIENTS_SUCCESS,
        data: FAKE_INGREDIENTS,
      })
    ).toEqual({ ...initialState, items: FAKE_INGREDIENTS });
  });

  it("should handle GET_INGREDIENTS_FAILED", () => {
    expect(
      ingredientsReducer(initialState, {
        type: GET_INGREDIENTS_FAILED,
      })
    ).toEqual({ ...initialState, itemsFailed: true });
  });
});
