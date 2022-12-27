import React, { FC } from "react";
import ResetPasswordComponent from "../../components/reset-password/reset-password";
import styles from "./reset-password.module.scss";

const ResetPassword: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ResetPasswordComponent />
    </div>
  );
};

export default ResetPassword;
