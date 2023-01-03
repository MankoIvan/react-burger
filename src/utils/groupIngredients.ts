import { TIngredient } from "../types/generalTypes";

export const groupIngredients = (ingredients: TIngredient[]) => {
  return ingredients.reduce((acc: Record<string, TIngredient[]>, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc
  }, {})
}