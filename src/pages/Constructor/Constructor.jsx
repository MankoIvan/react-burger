import React from 'react'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import styles from './styles.module.scss'

const Constructor = () => {
  return (
    <div className={styles.wrapper}>
      <BurgerConstructor />
      <BurgerIngredients />
    </div>
  )
}

export default Constructor