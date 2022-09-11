import { CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useState } from 'react'
import { INGREDIENTS_URL } from '../../constants/api'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import styles from './burger-constructor.module.scss'

const BurgerConstructor = () => {

  const [ingredients, setIngredients] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalIngredient, setModalIngredient] = useState({});
  const [currentTab, setCurrentTab] = React.useState('bun');

  useEffect(() => {
    const getIngredientsData = () => {
      fetch(INGREDIENTS_URL)
        .then(res => res.json())
        .then(({data}) => setIngredients(
          data.reduce((acc, item) => {
            acc[item.type] = acc[item.type] || [];
            acc[item.type].push(item);
            return acc
          }, {})
        ))
        .catch(e => console.log(e))
    }

    getIngredientsData()
  }, [])

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  const showIngredientDetails = (ingredient) => {
    setModalIngredient(ingredient);
    toggleModal();
  }

  /* Избавиться от использования map 3 раза - переделать стейт для компонентов и сделать 1 функцию */

  return (
    <>
      <section className={styles.wrapper}>
        <p className="text text_type_main-large">
          Соберите бургер
        </p>
        {/* <div className={styles.anchors_block}>
          <a href="#bun" className={`${styles.anchor} ${styles.anchor__active}`}>
            <p className="text text_type_main-default">
              Булки
            </p>
          </a>
          <a href="#main" className={styles.anchor}>
            <p className="text text_type_main-default">
              Соусы
            </p>
          </a>
          <a href="#sauce" className={styles.anchor}>
            <p className="text text_type_main-default">
              Начинки
            </p>
          </a>
        </div> */}
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
              <p className="text text_type_main-medium" id='bun'>
                Булки
              </p>
              <div className={styles.ingredient_block}>
                {ingredients.bun.map((item, index) => {
                  return (
                    <div className={styles.ingredient} key={index} onClick={() => showIngredientDetails(item)}>
                      <img src={item.image} alt={item.name} className={styles.ingredient_img} />
                      <div className={styles.ingredient_price}>
                        <p className="text text_type_digits-default">{item.price}</p>
                        <CurrencyIcon />
                      </div>
                      <p className="text text_type_main-default">
                        {item.name}
                      </p>
                    </div>
                  )
                })}
              </div>
              <p className="text text_type_main-medium" id='main'>
                Соусы
              </p>
              <div className={styles.ingredient_block}>
                {ingredients.sauce.map((item, index) => {
                  return (
                    <div className={styles.ingredient} key={index} onClick={() => showIngredientDetails(item)}>
                      <img src={item.image} alt={item.name} className={styles.ingredient_img} />
                      <div className={styles.ingredient_price}>
                        <p className="text text_type_digits-default">{item.price}</p>
                        <CurrencyIcon />
                      </div>
                      <p className="text text_type_main-default">
                        {item.name}
                      </p>
                    </div>
                  )
                })}
              </div>
              <p className="text text_type_main-medium" id='sauce'>
                Начинки
              </p>
              <div className={styles.ingredient_block}>
                {ingredients.main.map((item, index) => {
                  return (
                    <div className={styles.ingredient} key={index} onClick={() => showIngredientDetails(item)}>
                      <img src={item.image} alt={item.name} className={styles.ingredient_img} />
                      <div className={styles.ingredient_price}>
                        <p className="text text_type_digits-default">{item.price}</p>
                        <CurrencyIcon />
                      </div>
                      <p className="text text_type_main-default">
                        {item.name}
                      </p>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
      {showModal && (
        <Modal header='header' onClose={toggleModal}>
          <IngredientDetails ingredient={modalIngredient} />
        </Modal>
      )}
    </>
  )
}

export default BurgerConstructor