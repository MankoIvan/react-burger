import React from 'react'
import PropTypes from 'prop-types'
import styles from './burger-constructor-placeholder.module.scss'

const BurgerConstructorPlaceholder = ({ children, isHovered }) => {

  return (
    <div className={`${styles.ingredient_placeholder} ${isHovered ? styles.placheolder_over : ''}`}>
      <p className="text text_type_main-default">
        {children}
      </p>
    </div>
  )
}

BurgerConstructorPlaceholder.propTypes = {
  children: PropTypes.node.isRequired,
  isHovered: PropTypes.bool
}

export default BurgerConstructorPlaceholder