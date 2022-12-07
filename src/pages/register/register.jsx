import React from 'react'
import RegisterComponent from '../../components/register/register'
import styles from './register.module.scss'

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <RegisterComponent />
    </div>
  )
}

export default Register