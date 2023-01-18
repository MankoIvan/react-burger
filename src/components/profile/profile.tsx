import React, { Dispatch, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../../hooks/use-form";
import styles from "./profile.module.scss";
import { updateUser } from "../../services/actions/auth";
import { TStore } from "../../types/generalTypes";

const Profile = () => {
  const user = useSelector((store: TStore) => store.auth.user);

  const dispatch: Dispatch<any> = useDispatch();

  const { values, handleValues, setValues } = useForm({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleCancel = () => {
    user && setValues(user);
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateUser(values));
  };

  const CtaVisible = values.name !== user?.name || values.email !== user?.email;

  return (
    <form className={styles.form} onSubmit={handleSave}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={handleValues}
        icon={"EditIcon"}
        value={values.name}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
      />
      <Input
        type={"email"}
        placeholder={"Логин"}
        onChange={handleValues}
        icon={"EditIcon"}
        value={values.email}
        name={"email"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
      />
      {/* <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={handleValues}
          icon={"EditIcon"}
          value={values.password}
          name={"password"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        /> */}
      <div
        className={`${styles.cta_block} ${
          CtaVisible ? styles.cta_block__visible : ""
        }`}
      >
        <Button
          type="secondary"
          size="medium"
          onClick={handleCancel}
          htmlType="button"
        >
          Отмена
        </Button>
        <Button type="primary" size="medium" htmlType="submit">
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default Profile;
