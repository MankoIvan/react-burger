import React from 'react'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import styles from './constructor.module.scss'

const Constructor = () => {
  return (
    <div className={styles.wrapper}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  )
}

export default Constructor