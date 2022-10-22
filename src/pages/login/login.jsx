import React from 'react'
import LoginComponent from '../../components/login/login'
import styles from './login.module.scss'

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <LoginComponent />
    </div>
  )
}

export default Login