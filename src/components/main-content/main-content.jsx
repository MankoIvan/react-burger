import React from 'react'
import PropTypes from 'prop-types'
import styles from './main-content.module.scss'

const MainContent = ({ children }) => {
  return (
    <main className={styles.content}>
      {children}
    </main>
  )
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContent