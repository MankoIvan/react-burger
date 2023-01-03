import React, { FC } from "react";
import ForgotPasswordComponent from "../../components/forgot-password/forgot-password";
import styles from "./forgot-password.module.scss";

const ForgotPassword: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ForgotPasswordComponent />
    </div>
  );
};

export default ForgotPassword;
