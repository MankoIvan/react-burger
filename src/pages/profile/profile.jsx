import React from 'react'
import ProfileComponent from '../../components/profile/profile'
import styles from './profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileComponent />
    </div>
  )
}

export default Profile