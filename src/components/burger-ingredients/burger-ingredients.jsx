import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useState } from 'react'
import { getIngredientsData } from '../../utils/burger-api'
import IngredientCard from '../ingredient-card/ingredient-card'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Loader from '../loader/loader'
import Modal from '../modal/modal'
import styles from './burger-ingredients.module.scss'

const BurgerIngredients = () => {

  const [ingredients, setIngredients] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalIngredient, setModalIngredient] = useState({});
  const [currentTab, setCurrentTab] = React.useState('bun');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getIngredientsData().then(data => {
      setIngredients(data)
      setLoading(false)
    })
  }, [])

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  const showIngredientDetails = (ingredient) => {
    setModalIngredient(ingredient);
    toggleModal();
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

            <div className={styles.ingredients_container}>
              {ingredients.bun && (
                <>
                  <h3 className="text text_type_main-medium" id='bun'>
                    Булки
                  </h3>
                  <div className={styles.ingredient_block}>
                    {ingredients.bun.map((item) =>
                      <IngredientCard ingredient={item} onClick={() => showIngredientDetails(item)} key={item._id} />
                    )}
                  </div>
                </>
              )}
              {ingredients.sauce && (
                <>
                  <h3 className="text text_type_main-medium" id='main'>
                    Соусы
                  </h3>
                  <div className={styles.ingredient_block}>
                    {ingredients.sauce.map((item) =>
                      <IngredientCard ingredient={item} onClick={() => showIngredientDetails(item)} key={item._id} />
                    )}
                  </div>
                </>
              )}
              {ingredients.main && (
                <>
                  <h3 className="text text_type_main-medium" id='sauce'>
                    Начинки
                  </h3>
                  <div className={styles.ingredient_block}>
                    {ingredients.main.map((item) =>
                      <IngredientCard ingredient={item} onClick={() => showIngredientDetails(item)} key={item._id} />
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </section>
      {showModal && (
        <Modal onClose={toggleModal} header='Детали ингредиента'>
          <IngredientDetails ingredient={modalIngredient} />
        </Modal>
      )}
    </>
  )
}

export default BurgerIngredients