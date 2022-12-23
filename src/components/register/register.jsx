import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect } from 'react-router-dom';
import { useForm } from '../../hooks/use-form'
import styles from './register.module.scss'
import { registerUser } from '../../services/actions/auth';

const Register = () => {
  const [values, handleValues] = useForm({ name: '', email: '', password: '' })

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(values));
  }

  const user = useSelector(store => store.auth.user);

  if (user) {
    return (
      <Redirect to='/' />
    );
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">
          Регистрация
        </p>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleValues}
          value={values.name}
          name={'name'}
          error={false}
          errorText={'Ошибка ввода имени'}
          size={'default'}
        />
        <EmailInput
          onChange={handleValues}
          value={values.email}
          name={'email'}
        />
        <PasswordInput
          onChange={handleValues}
          value={values.password}
          name={'password'}
        />
        <Button disabled={!values.password || !values.email || !values.name} htmlType='submit'>
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default">
        Уже зарегистрированы?
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  )
}

export default Register