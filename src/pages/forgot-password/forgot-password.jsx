import React from 'react'
import ForgotPasswordComponent from '../../components/forgot-password/forgot-password'
import styles from './forgot-password.module.scss'

const ForgotPassword = () => {
  return (
    <div className={styles.wrapper}>
      <ForgotPasswordComponent />
    </div>
  )
}

export default ForgotPassword