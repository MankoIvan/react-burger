import React from 'react'
import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import styles from './ingredient.module.scss'

const Ingredient = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className="text text_type_main-large pt-3 pb-3">
        Детали ингредиента
      </h2>
      <IngredientDetails />
    </div>
  )
}

export default Ingredient