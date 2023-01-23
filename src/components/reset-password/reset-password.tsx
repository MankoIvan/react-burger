import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "../../utils/use-form";
import styles from "./reset-password.module.scss";
import { resetPassword } from "../../services/actions/auth";

const ResetPassword = () => {
  const { values, handleValues } = useForm({ password: "", token: "" });

  const dispatch = useDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(resetPassword(values));
  };

  const forgotPasswordSuccess = useSelector(
    (store) => store.auth.forgotPasswordSuccess
  );

  if (!forgotPasswordSuccess) {
    return <Redirect to="forgot-password" />;
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <PasswordInput
          onChange={handleValues}
          value={values.password}
          name={"password"}
          placeholder={"Введите новый пароль"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={handleValues}
          value={values.token}
          name={"token"}
          error={false}
          errorText={"Ошибка ввода кода"}
          size={"default"}
        />
        <Button disabled={!values.password || !values.token} htmlType="submit">
          Сохранить
        </Button>
      </form>
      <p className="text text_type_main-default">
        Вспомнили пароль?
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
