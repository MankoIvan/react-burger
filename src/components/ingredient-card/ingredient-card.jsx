import React from 'react'
import PropTypes from 'prop-types'
import { ingredientPropTypes } from '../../utils/prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-card.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addIngredient } from '../../services/actions/burger-constructor'


const IngredientCard = ({ ingredient, showIngredientDetails }) => {

  const {
    bun,
    filling
  } = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    filling: store.burgerConstructor.filling,
  }));
  
  const ingredients = [...filling, bun, bun];

  const count = ingredients.reduce((acc, item) => {
    return acc += ingredient._id === item._id ? 1 : 0
  }, 0)

  const onClick = () => {
    showIngredientDetails(ingredient)
  }

  const dispatch = useDispatch()

  return (
    <div className={styles.ingredient} onClick={onClick}>
      <button style={{ position: 'absolute', left: '0' }} onClick={() => dispatch(addIngredient(ingredient))}>add</button>
      <img src={ingredient.image} alt={ingredient.name} className={styles.ingredient_img} />
      <div className={styles.ingredient_price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon />
      </div>
      <p className="text text_type_main-default">
        {ingredient.name}
      </p>
      {count && (
        <Counter count={count} />
      )}
    </div>
  )
}

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  showIngredientDetails: PropTypes.func.isRequired
}

export default IngredientCard