import React from 'react'
import PropTypes from 'prop-types'
import { ingredientPropTypes } from '../../utils/prop-types'
import IngredientCard from '../ingredient-card/ingredient-card'
import styles from './ingredients-group.module.scss'


const IngredientsGroup = ({ingredients, showIngredientDetails, groupName, type}) => {
  return ingredients && (
    <>
      <h3 className="text text_type_main-medium" id={type}>
        {groupName}
      </h3>
      <div className={styles.ingredient_group}>
        {ingredients.map((item) =>
          <IngredientCard ingredient={item} showIngredientDetails={showIngredientDetails} key={item._id} />
        )}
      </div>
    </>
  )
}

IngredientsGroup.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  showIngredientDetails: PropTypes.func.isRequired,
  groupName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default IngredientsGroup