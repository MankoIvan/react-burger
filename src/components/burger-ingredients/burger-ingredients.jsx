import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showIngredientDetails, toggleModal } from '../../services/actions/ingredient-details'
import { getIngredients } from '../../services/actions/ingredients'
import IngredientDetails from '../ingredient-details/ingredient-details'
import IngredientsGroup from '../ingredients-group/ingredients-group'
import Loader from '../loader/loader'
import Modal from '../modal/modal'
import styles from './burger-ingredients.module.scss'

const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('bun');

  const {
    ingredients,
    loading,
    showDetails,
    currentIngredient
  } = useSelector(store => ({
    ingredients: store.ingredients.items,
    loading: store.ingredients.itemsRequest,
    showDetails: store.ingredientDetails.showDetails,
    currentIngredient: store.ingredientDetails.ingredient
  }));
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  const handleOnClose = () => {
    dispatch(toggleModal())
  }

  const handleShowDetails = (ingredient) => {
    dispatch(showIngredientDetails(ingredient))
  }

  return (
    <>
      <section className={styles.wrapper}>
        <h1 className="text text_type_main-large">
          Соберите бургер
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.tabs}>
              <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentTab}>
                Булки
              </Tab>
              <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentTab}>
                Соусы
              </Tab>
              <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                Начинки
              </Tab>
            </div>

            {Object.keys(ingredients).length ? (
              <div className={styles.ingredients_container}>
                <IngredientsGroup ingredients={ingredients.bun} showIngredientDetails={handleShowDetails} groupName='Булки' type='bun' />
                <IngredientsGroup ingredients={ingredients.sauce} showIngredientDetails={handleShowDetails} groupName='Соусы' type='sauce' />
                <IngredientsGroup ingredients={ingredients.main} showIngredientDetails={handleShowDetails} groupName='Начинки' type='main' />
              </div>
            ) : null}
          </>
        )}
      </section>
      {showDetails && (
        <Modal onClose={handleOnClose} header='Детали ингредиента'>
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
    </>
  )
}

export default BurgerIngredients