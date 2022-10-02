import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useState, useRef } from 'react'
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
  const tabsRef = useRef();
  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();
  const refs = [
    {
      tab: 'bun',
      ref: bunRef
    },
    {
      tab: 'sauce',
      ref: sauceRef
    },
    {
      tab: 'main',
      ref: mainRef
    }
  ]

  const {
    ingredients,
    loading,
    error,
    showDetails,
    currentIngredient
  } = useSelector(store => ({
    ingredients: store.ingredients.items,
    loading: store.ingredients.itemsRequest,
    error: store.ingredients.itemsFailed,
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

  const handleScroll = (e) => {
    const tabsTop = tabsRef.current.getBoundingClientRect().y
    const offsets = refs.map(item => {
      const top = item.ref.current.getBoundingClientRect().y
      return {
        ...item,
        offset: Math.abs(tabsTop - top)
      }
    }).sort((a, b) => a.offset - b.offset);
    setCurrentTab(offsets[0].tab)
  }

  const handleTabClick = (tab) => {
    refs.find(item => item.tab === tab).ref.current.scrollIntoView()
  }

  return (
    <>
      <section className={styles.wrapper}>
        <h1 className="text text_type_main-large">
          Соберите бургер
        </h1>
        {loading || error ? (
          <Loader text={loading ? 'Загружаемся...' : 'Произошла ошибка загрузки'} />
        ) : (
          <>
            <div className={styles.tabs} ref={tabsRef}>
              <Tab value="bun" active={currentTab === 'bun'} onClick={() => handleTabClick('bun')}>
                Булки
              </Tab>
              <Tab value="sauce" active={currentTab === 'sauce'} onClick={() => handleTabClick('sauce')}>
                Соусы
              </Tab>
              <Tab value="main" active={currentTab === 'main'} onClick={() => handleTabClick('main')}>
                Начинки
              </Tab>
            </div>

            {Object.keys(ingredients).length ? (
              <div className={styles.ingredients_container} onScroll={handleScroll}>
                <IngredientsGroup
                  ingredients={ingredients.bun}
                  showIngredientDetails={handleShowDetails}
                  groupName='Булки'
                  type='bun'
                  groupRef={bunRef}
                />
                <IngredientsGroup
                  ingredients={ingredients.sauce}
                  showIngredientDetails={handleShowDetails}
                  groupName='Соусы'
                  type='sauce'
                  groupRef={sauceRef} />
                <IngredientsGroup
                  ingredients={ingredients.main}
                  showIngredientDetails={handleShowDetails}
                  groupName='Начинки'
                  type='main'
                  groupRef={mainRef} />
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