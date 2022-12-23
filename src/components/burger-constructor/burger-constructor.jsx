import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './burger-constructor.module.scss'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import OrderDetails from '../order-deatils/order-deatils'
import Loader from '../loader/loader'
import { makeOrder, toggleModal } from '../../services/actions/order'
import { addIngredient, removeIngredient } from '../../services/actions/burger-constructor'
import { useDrop } from 'react-dnd'
import BurgerConstructorElement from '../burger-constructor-element/burger-constructor-element'
import BurgerConstructorPlaceholder from '../burger-constructor-placeholder/burger-constructor-placeholder'
import { useHistory, useLocation } from 'react-router-dom'

const BurgerConstructor = () => {
  const [totatlPrice, setTotatlPrice] = useState(0)

  const history = useHistory()
  const location = useLocation();

  const {
    bun,
    filling,
    orderData,
    loading,
    error,
    showDetails,
    user
  } = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    filling: store.burgerConstructor.filling,
    orderData: store.order.order,
    loading: store.order.orderRequest,
    error: store.order.orderFailed,
    showDetails: store.order.showDetails,
    user: store.auth.user
  }));

  const dispatch = useDispatch()

  const countPrice = (ingredients) => {
    return ingredients.reduce((acc, item) => acc + (item.price || 0), 0)
  }

  useEffect(() => {
    setTotatlPrice(countPrice([...filling, bun, bun]) || 0)
  }, [filling, bun])

  const handleMakeOrder = () => {
    if (!user) {
      return (
        history.push({ pathname: "/login", state: { from: location } })
      )
    } else {
      dispatch(makeOrder([...filling, bun, bun]))
    }
  }

  const handleOnClose = () => {
    dispatch(toggleModal())
  }

  const handleRemoveIngredient = (uuid) => {
    dispatch(removeIngredient(uuid))
  }

  const onDropHandler = (ingredient) => {
    dispatch(addIngredient(ingredient))
  }

  const [{ isHover }, dropTarget] = useDrop({
    accept: "newIngredient",
    drop(ingredient) {
      onDropHandler(ingredient);
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  })

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.ingredients} ref={dropTarget}>
          {!!Object.keys(bun).length ? (
            <BurgerConstructorElement ingredient={bun} onRemove={handleRemoveIngredient} position='top' />
          ) : (
            <BurgerConstructorPlaceholder isHovered={isHover}>
              Перетащите сюда булочку
            </BurgerConstructorPlaceholder>
          )}
          {!!filling.length ? (
            <div className={styles.filling_list}>
              {filling.map((item, index) => {
                return (
                  <BurgerConstructorElement ingredient={item} onRemove={handleRemoveIngredient} index={index} key={item._uuid} />
                )
              })}
            </div>
          ) : (
            <BurgerConstructorPlaceholder isHovered={isHover}>
              Перетащите сюда начинку
            </BurgerConstructorPlaceholder>
          )}
          {!!Object.keys(bun).length ? (
            <BurgerConstructorElement ingredient={bun} onRemove={handleRemoveIngredient} position='bottom' />
          ) : (
            <BurgerConstructorPlaceholder isHovered={isHover}>
              Перетащите сюда булочку
            </BurgerConstructorPlaceholder>
          )}
        </div>
        <div className={styles.cta_block}>
          <div className={styles.price}>
            <p className="text text_type_main-large">
              {totatlPrice}
            </p>
            <CurrencyIcon />
          </div>
          <Button type="primary" size="large" onClick={handleMakeOrder} disabled={!Object.keys(bun).length || !filling.length} htmlType='button'>
            Оформить заказ
          </Button>
        </div>
      </section>
      {showDetails && (
        <Modal onClose={handleOnClose}>
          {loading || error ? (
            <Loader text={loading ? 'Загружаемся...' : 'Произошла ошибка загрузки'} />
          ) : (
            <OrderDetails {...orderData} />
          )}
        </Modal>
      )}
    </>
  )
}

export default BurgerConstructor