import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect } from 'react-router-dom';
import { useForm } from '../../hooks/use-form'
import styles from './forgot-password.module.scss'
import { forgotPassword } from '../../services/actions/auth';

const ForgotPassword = () => {
  const [values, handleValues] = useForm({ email: '' })

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(values))
  }

  const forgotPasswordSuccess = useSelector(store => store.auth.forgotPasswordSuccess);

  if (forgotPasswordSuccess) {
    return <Redirect to='reset-password' />
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">
          Восстановление пароля
        </p>
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          onChange={handleValues}
          value={values.email}
          name={'email'}
          error={false}
          errorText={'Ошибка ввода e-mail'}
          size={'default'}
        />
        <Button disabled={!values.email} htmlType='submit'>
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default">
        Вспомнили пароль?
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  )
}

export default ForgotPassword