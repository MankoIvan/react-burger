import { TIngredient } from "../types/generalTypes";

export const countPrice = (ingredients: Array<TIngredient | undefined>) => {
  return ingredients.reduce((acc, item) => acc + (item?.price || 0), 0);
};
