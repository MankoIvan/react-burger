import React, { FC } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-card.module.scss";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { TIngredientCardProps } from "./ingredient-card.types";
import { TStore } from "../../types/generalTypes";

const IngredientCard: FC<TIngredientCardProps> = ({ ingredient }) => {
  const location = useLocation();
  const { bun, filling } = useSelector((store: TStore) => ({
    bun: store.burgerConstructor.bun,
    filling: store.burgerConstructor.filling,
  }));

  const ingredients = [...filling, bun, bun];

  const count = ingredients.reduce((acc, item) => {
    return (acc += ingredient._id === item?._id ? 1 : 0);
  }, 0);

  const [{ isDrag }, dragRef] = useDrag({
    type: "newIngredient",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <Link
      key={ingredient._id}
      to={{
        pathname: `/ingredients/${ingredient._id}`,
        state: { background: location },
      }}
      className={`${styles.ingredient} 
      ${!!isDrag ? styles.dragged : ""}`}
      ref={dragRef}
    >
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={styles.ingredient_img}
      />
      <div className={styles.ingredient_price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{ingredient.name}</p>
      {!!count && <Counter count={count} />}
    </Link>
  );
};

export default IngredientCard;
