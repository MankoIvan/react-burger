import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav-link.module.scss';


const NavLink = ({ children, active, ...rest }) => {
  return (
    <a className={`${styles.nav_link} ${active ? styles.nav_link__active : ''}`} {...rest}>
      {children}
    </a>
  )
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool
}

export default NavLink