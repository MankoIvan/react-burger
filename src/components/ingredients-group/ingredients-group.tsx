import React, { FC } from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import styles from "./ingredients-group.module.scss";
import { TIngredientsGroupProps } from "./ingredients-group.types";

const IngredientsGroup: FC<TIngredientsGroupProps> = ({
  ingredients,
  groupName,
  type,
  groupRef,
}) => {
  return (
    ingredients && (
      <>
        <h3 className="text text_type_main-medium" id={type} ref={groupRef}>
          {groupName}
        </h3>
        <div className={styles.ingredient_group}>
          {ingredients.map((item) => (
            <IngredientCard ingredient={item} key={item._id} />
          ))}
        </div>
      </>
    )
  );
};

export default IngredientsGroup;
