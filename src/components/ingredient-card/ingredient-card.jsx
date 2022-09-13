import React from 'react'
import PropTypes from 'prop-types'
import { ingredientPropTypes } from '../../utils/prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-card.module.scss'


const IngredientCard = ({ ingredient, showIngredientDetails }) => {

  const onClick = () => {
    showIngredientDetails(ingredient)
  }

  return (
    <div className={styles.ingredient} onClick={onClick}>
      <img src={ingredient.image} alt={ingredient.name} className={styles.ingredient_img} />
      <div className={styles.ingredient_price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon />
      </div>
      <p className="text text_type_main-default">
        {ingredient.name}
      </p>
      <Counter count={1} />
    </div>
  )
}

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  showIngredientDetails: PropTypes.func.isRequired
}

export default IngredientCard