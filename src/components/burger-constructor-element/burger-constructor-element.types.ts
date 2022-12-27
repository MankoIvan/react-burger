import { TConstructorIngredient } from "../../types/generalTypes"

export type TBurgerConstructorElementProps = {
  ingredient: TConstructorIngredient;
  onRemove: (uuid: string) => void;
  position?: "top" | "bottom";
  index?: number;
}