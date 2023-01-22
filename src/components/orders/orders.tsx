import React, { FC } from "react";
import styles from "./orders.module.scss";

import OrderCard from "../order-card/order-card";
import { TOrdersProps } from "./orders.types";

const Orders: FC<TOrdersProps> = ({ orders, hideStatus }) => {
  return (
    <div className={styles.wrapper}>
      {!!orders?.length &&
        orders.map((item, index) => (
          <OrderCard order={item} hideStatus={hideStatus} key={index} />
        ))}
    </div>
  );
};

export default Orders;
