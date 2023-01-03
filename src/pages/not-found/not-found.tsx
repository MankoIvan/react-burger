import React, { FC } from "react";
import Loader from "../../components/loader/loader";
import styles from "./not-found.module.scss";

const NotFound: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Loader text="404, кажется вы заблудились..." />
    </div>
  );
};

export default NotFound;
