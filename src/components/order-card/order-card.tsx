import React, { FC, useMemo } from "react";
import styles from "./order-card.module.scss";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../utils/hooks";
import { countPrice } from "../../utils/countPrice";
import { TOrderCardProps } from "./order-card.types";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { convertStatus } from "../../utils/convertStatus";

const OrderCard: FC<TOrderCardProps> = ({ order, hideStatus = false }) => {
  const location = useLocation();
  const {
    ingredients: ingredientsIDs,
    status,
    number,
    name,
    createdAt,
  } = order;
  const { allIngredients } = useSelector((store) => ({
    allIngredients: store.ingredients.items,
  }));

  const ingredients = ingredientsIDs.map((id) =>
    allIngredients.find((item) => item._id === id)
  );

  const totalPrice = useMemo(() => countPrice(ingredients), [ingredients]);

  const { path } = useRouteMatch();

  return (
    <Link
      className={styles.card}
      to={{
        pathname: `${path}/${number}`,
        state: { background: location },
      }}
    >
      <div className={styles.additional_info}>
        <p className="text text_type_digits-default">
          #{number.toString().padStart(6, "0")}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(createdAt)} />
        </p>
      </div>
      <div className={styles.info}>
        <p className="text text_type_main-medium">{name}</p>
        {!hideStatus && (
          <p className={`text text_type_main-default ${styles.status_done}`}>
            {convertStatus(status)}
          </p>
        )}
      </div>
      <div className={styles.bottom_block}>
        <div className={styles.ingredients}>
          {ingredients.slice(0, 6).map((item, index) => (
            <div className={styles.image_border} key={index}>
              <div className={styles.image_background}>
                <img
                  src={item?.image_mobile}
                  alt={item?.name}
                  className={styles.image_miniature}
                />
                {ingredients.length > 6 && index === 5 && (
                  <>
                    <div className={styles.more_ingredients_background} />
                    <p
                      className={`text text_type_digits-default ${styles.more_ingredients_counter}`}
                    >
                      +{ingredients.length - 5}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
