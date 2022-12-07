import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useForm } from '../../hooks/use-form'
import styles from './profile.module.scss'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../services/actions/auth'

const Profile = () => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logoutUser())
  }
  
  const user = useSelector(store => store.auth.user);

  const [values, handleValues] = useForm({ name: user.name, email: user.email, password: '' })

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_wrapper}>
        <nav className={styles.navigation}>
          <NavLink to="/profile" exact className={styles.nav_link} activeClassName={styles.nav_link__active}>
            <p className="text text_type_main-medium">
              Профиль
            </p>
          </NavLink>
          <NavLink to="/profile/orders" exact className={styles.nav_link} activeClassName={styles.nav_link__active}>
            <p className="text text_type_main-medium">
              История заказов
            </p>
          </NavLink>
          <button className={styles.button} onClick={onLogOut}>
            <p className="text text_type_main-medium">
              Выход
            </p>
          </button>
        </nav>
        <p className="text text_type_main-default">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={styles.form}>
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
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={handleValues}
          icon={"EditIcon"}
          value={values.password}
          name={"password"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </form>
    </div>
  )
}

export default Profile