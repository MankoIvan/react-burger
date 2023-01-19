import React, { FC } from "react";
import Orders from "../../components/orders/orders";
import styles from "./feed.module.scss";

const Feed: FC = () => {
  return (
    <div className={styles.wrapper}>
      Feed
      <br />
      <Orders />
    </div>
  );
};

export default Feed;
