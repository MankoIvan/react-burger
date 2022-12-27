import { TIngredient } from "../../types/generalTypes"

export type TIngredientsGroupProps = {
  ingredients: TIngredient[];
  groupName: string;
  type: string;
  groupRef: React.RefObject<HTMLHeadingElement>
}