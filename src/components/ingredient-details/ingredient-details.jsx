import React from 'react'
import PropTypes from 'prop-types'
import styles from './ingredient-details.module.scss'

const IngredientDetails = ({
  image_large,
  name,
  calories,
  proteins,
  fat,
  carbohydrates
}) => {
  return (
    <div className={styles.wrapper}>
      <p className="text text_type_main-large pt-3 pb-3">
        Детали ингредиента
      </p>
      <div className={styles.details}>
        {image_large && (
          <img src={image_large} alt={name} className={styles.img} />
        )}
        {name && (
          <p className="text text_type_main-medium pt-4 pb-8">
            {name}
          </p>
        )}
        <div className={styles.nutrition_facts}>
          {calories && (
            <div className={styles.nutrition_facts_item}>
              <p className="text text_type_main-default">
                Калории,ккал
              </p>
              <p className="text text_type_digits-default">{calories}</p>
            </div>
          )}
          {proteins && (
            <div className={styles.nutrition_facts_item}>
              <p className="text text_type_main-default">
                Белки, г
              </p>
              <p className="text text_type_digits-default">{proteins}</p>
            </div>
          )}
          {fat && (
            <div className={styles.nutrition_facts_item}>
              <p className="text text_type_main-default">
                Жиры, г
              </p>
              <p className="text text_type_digits-default">{fat}</p>
            </div>
          )}
          {carbohydrates && (
            <div className={styles.nutrition_facts_item}>
              <p className="text text_type_main-default">
                Углеводы, г
              </p>
              <p className="text text_type_digits-default">{carbohydrates}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

IngredientDetails.propTypes = {
  image_large: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number
}

export default IngredientDetails