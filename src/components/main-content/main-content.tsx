import React, { FC } from "react";
import styles from "./main-content.module.scss";
import { TMainContentProps } from "./main-content.types";

const MainContent: FC<TMainContentProps> = ({ children }) => {
  return <main className={styles.content}>{children}</main>;
};

export default MainContent;
