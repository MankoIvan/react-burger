import React, { FC } from "react";
import OrderExplicitDetailsWrapper from "../../components/order-explicit-details-wrapper/order-explicit-details-wrapper";
import styles from "./order-explicit-details.module.scss";

const OrderExplicitDetails: FC = () => {
  return (
    <div className={styles.wrapper}>
      <OrderExplicitDetailsWrapper />
    </div>
  );
};

export default OrderExplicitDetails;
