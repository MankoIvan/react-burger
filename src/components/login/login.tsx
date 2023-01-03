import React, { Dispatch, FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "../../hooks/use-form";
import styles from "./login.module.scss";
import { loginUser } from "../../services/actions/auth";
import { TStore } from "../../types/generalTypes";

const Login: FC = () => {
  const { values, handleValues } = useForm({ email: "", password: "" });

  const dispatch: Dispatch<any> = useDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(values));
  };

  const user = useSelector((store: TStore) => store.auth.user);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Вход</p>
        <EmailInput
          onChange={handleValues}
          value={values.email}
          name={"email"}
        />
        <PasswordInput
          onChange={handleValues}
          value={values.password}
          name={"password"}
        />
        <Button
          disabled={!values.password || !values.email}
          htmlType="submit"
          type="primary"
        >
          Войти
        </Button>
      </form>
      <p className="text text_type_main-default">
        Вы — новый пользователь?
        <Link className={styles.link} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default">
        Забыли пароль?
        <Link className={styles.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};

export default Login;
