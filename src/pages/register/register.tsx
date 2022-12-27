import React, { FC } from "react";
import RegisterComponent from "../../components/register/register";
import styles from "./register.module.scss";

const Register: FC = () => {
  return (
    <div className={styles.wrapper}>
      <RegisterComponent />
    </div>
  );
};

export default Register;
