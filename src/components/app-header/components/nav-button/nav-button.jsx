import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav-button.module.scss';


const NavButton = ({children, active}) => {
  return (
    <button className={`${styles.nav_button} ${active ? styles.nav_button__active : ''}`}>
      {children}
    </button>
  )
}

NavButton.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool
}

export default NavButton