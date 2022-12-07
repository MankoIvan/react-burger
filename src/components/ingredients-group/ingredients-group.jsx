import React from 'react'
import PropTypes from 'prop-types'
import { ingredientPropTypes } from '../../utils/prop-types'
import IngredientCard from '../ingredient-card/ingredient-card'
import styles from './ingredients-group.module.scss'


const IngredientsGroup = ({ ingredients, groupName, type, groupRef }) => {
  return ingredients && (
    <>
      <h3 className="text text_type_main-medium" id={type} ref={groupRef}>
        {groupName}
      </h3>
      <div className={styles.ingredient_group}>
        {ingredients.map((item) =>
          <IngredientCard ingredient={item} key={item._id} />
        )}
      </div>
    </>
  )
}

IngredientsGroup.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  groupName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  groupRef: PropTypes.object.isRequired
}

export default IngredientsGroup