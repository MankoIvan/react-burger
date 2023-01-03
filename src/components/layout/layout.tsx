import React, { FC } from "react";
import styles from "./layout.module.scss";
import { TLayoutProps } from "./layout.types";

const Layout: FC<TLayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
