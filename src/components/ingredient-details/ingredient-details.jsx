import React from 'react'
import { ingredientPropTypes } from '../../utils/prop-types'
import styles from './ingredient-details.module.scss'

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <img src={ingredient.image_large} alt={ingredient.name} className={styles.img} />
        <p className="text text_type_main-medium pt-4 pb-8">
          {ingredient.name}
        </p>
        <div className={styles.nutrition_facts}>
          <div className={styles.nutrition_facts_item}>
            <p className="text text_type_main-default">
              Калории,ккал
            </p>
            <p className="text text_type_digits-default">{ingredient.calories}</p>
          </div>
          <div className={styles.nutrition_facts_item}>
            <p className="text text_type_main-default">
              Белки, г
            </p>
            <p className="text text_type_digits-default">{ingredient.proteins}</p>
          </div>
          <div className={styles.nutrition_facts_item}>
            <p className="text text_type_main-default">
              Жиры, г
            </p>
            <p className="text text_type_digits-default">{ingredient.fat}</p>
          </div>
          <div className={styles.nutrition_facts_item}>
            <p className="text text_type_main-default">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired
}

export default IngredientDetails