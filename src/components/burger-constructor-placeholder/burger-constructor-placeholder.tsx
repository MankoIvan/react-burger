import React, { FC } from "react";
import styles from "./burger-constructor-placeholder.module.scss";
import { TBurgerConstructorPlaceholderProps } from "./burger-constructor-placeholder.types";

const BurgerConstructorPlaceholder: FC<TBurgerConstructorPlaceholderProps> = ({
  children,
  isHovered,
}) => {
  return (
    <div
      className={`${styles.ingredient_placeholder} ${
        isHovered ? styles.placheolder_over : ""
      }`}
    >
      <p className="text text_type_main-default">{children}</p>
    </div>
  );
};

export default BurgerConstructorPlaceholder;
