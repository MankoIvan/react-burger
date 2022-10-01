import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useState } from 'react'
import { getIngredientsData } from '../../utils/burger-api'
import IngredientDetails from '../ingredient-details/ingredient-details'
import IngredientsGroup from '../ingredients-group/ingredients-group'
import Loader from '../loader/loader'
import Modal from '../modal/modal'
import styles from './burger-ingredients.module.scss'

const BurgerIngredients = () => {

  const [ingredients, setIngredients] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalIngredient, setModalIngredient] = useState({});
  const [currentTab, setCurrentTab] = useState('bun');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getIngredientsData().then(data => {
      setIngredients(data)
      setLoading(false)
    })
      .catch(() => alert('Что-то пошло не так на этапе сортировки ингридиентов. Пожалуйста перезагрузите страницу.'))
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

            {Object.keys(ingredients).length && (
              <div className={styles.ingredients_container}>
                <IngredientsGroup ingredients={ingredients.bun} showIngredientDetails={showIngredientDetails} groupName='Булки' type='bun' />
                <IngredientsGroup ingredients={ingredients.sauce} showIngredientDetails={showIngredientDetails} groupName='Соусы' type='sauce' />
                <IngredientsGroup ingredients={ingredients.main} showIngredientDetails={showIngredientDetails} groupName='Начинки' type='main' />
              </div>
            )}
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