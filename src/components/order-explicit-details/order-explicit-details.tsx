import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, useMemo } from "react";
import { useSelector } from "../../utils/hooks";
import { TIngredient, TOrder } from "../../types/generalTypes";
import { convertStatus } from "../../utils/convertStatus";
import { countPrice } from "../../utils/countPrice";
import styles from "./order-explicit-details.module.scss";

const OrderExplicitDetails: FC<TOrder> = ({
  ingredients: ingredientsIDs,
  status,
  number,
  name,
  createdAt,
}) => {
  const { allIngredients } = useSelector((store) => ({
    allIngredients: store.ingredients.items,
  }));
  const ingredients = ingredientsIDs.map((id) =>
    allIngredients.find((item) => item._id === id)
  ) as TIngredient[];

  const sortedIngredients = ingredients.reduce(
    (acc: Array<TIngredient & { count: number }>, ingredint) => {
      const foundItem = acc.find((item) => item._id === ingredint._id);
      if (foundItem) {
        foundItem.count += 1;
      } else {
        acc.push({ ...ingredint, count: 1 });
      }
      return acc;
    },
    []
  );

  const totalPrice = useMemo(() => countPrice(ingredients), [ingredients]);

  return (
    <div className={styles.wrapper}>
      <p className="text text_type_digits-default">
        #{number.toString().padStart(6, "0")}
      </p>

      <div className={styles.main}>
        <div className={styles.info}>
          <p className="text text_type_main-medium">{name}</p>
          <p className={`text text_type_main-default ${styles.status_done}`}>
            {convertStatus(status)}
          </p>
        </div>
        <div className={styles.filling}>
          <p className="text text_type_main-medium">Состав:</p>
          <div className={styles.filling_list}>
            {sortedIngredients.map((item, index) => (
              <div className={styles.filling_item} key={index}>
                <div className={styles.image_border}>
                  <div className={styles.image_background}>
                    <img
                      src={item?.image_mobile}
                      alt={item?.name}
                      className={styles.image_miniature}
                    />
                  </div>
                </div>
                <p
                  className={`text text_type_main-small ${styles.filling_item_text}`}
                >
                  {item?.name}
                </p>
                <div className={styles.price}>
                  <p className="text text_type_digits-default">
                    {item.count} x {item.price}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.additional_info}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(createdAt)} />
        </p>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderExplicitDetails;
