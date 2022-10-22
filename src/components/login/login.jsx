import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom';
import React from 'react'
import { useForm } from '../../hooks/use-form'
import styles from './login.module.scss'

const Login = () => {
  const [values, handleValues] = useForm({ email: '', password: '' })

  const onSubmit = (e) => {
    e.preventDefalut()
    console.log(values)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">
          Вход
        </p>
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={handleValues}
          value={values.email}
          name={'email'}
          error={false}
          errorText={'Ошибка ввода e-mail'}
          size={'default'}
        />
        <PasswordInput
          onChange={handleValues}
          value={values.password}
          name={'password'}
        />
        <Button disabled={!values.password || !values.email} type="primary" htmlType='submit'>
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
  )
}

export default Login