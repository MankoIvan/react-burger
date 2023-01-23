import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../../utils/use-form";
import styles from "./profile.module.scss";
import { updateUser } from "../../services/actions/auth";

const Profile = () => {
  const user = useSelector((store) => store.auth.user);

  const dispatch = useDispatch();

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
