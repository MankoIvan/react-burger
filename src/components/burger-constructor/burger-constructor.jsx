import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './burger-constructor.module.scss'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import OrderDetails from '../order-deatils/order-deatils'
import Loader from '../loader/loader'
import { makeOrder, toggleModal } from '../../services/actions/order'
import { removeIngredient } from '../../services/actions/burger-constructor'

const BurgerConstructor = () => {
  const [totatlPrice, setTotatlPrice] = useState(0)

  const {
    bun,
    filling,
    orderData,
    loading,
    error,
    showDetails
  } = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    filling: store.burgerConstructor.filling,
    orderData: store.order.order,
    loading: store.order.orderRequest,
    error: store.order.orderFailed,
    showDetails: store.order.showDetails
  }));
  const dispatch = useDispatch()

  const countPrice = (ingredients) => {
    return ingredients.reduce((acc, item) => acc + (item.price || 0), 0)
  }

  useEffect(() => {
    setTotatlPrice(countPrice([...filling, bun, bun]) || 0)
  }, [filling, bun])

  const handleMakeOrder = () => {
    dispatch(makeOrder([...filling, bun, bun]))
  }

  const handleOnClose = () => {
    dispatch(toggleModal())
  }

  const handleRemoveIngredient = (uuid) => {
    dispatch(removeIngredient(uuid))
  }

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.ingredients}>
          {!!Object.keys(bun).length ? (
            <div className={styles.ingredient}>
              <ConstructorElement
                type='top'
                isLocked
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image_mobile}
              />
            </div>
          ) : (
            <div className={styles.ingredient_placeholder}>
              <p className="text text_type_main-default">
                Перетащите сюда булочку
              </p>
            </div>
          )}
          {!!filling.length ? (
            <div className={styles.filling_list}>
              {filling.map((item, index) => {
                return (
                  <div className={styles.ingredient} key={index}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image_mobile}
                      handleClose={() => handleRemoveIngredient(item._uuid)}
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            <div className={styles.ingredient_placeholder}>
              <p className="text text_type_main-default">
                Перетащите сюда начинку
              </p>
            </div>
          )}
          {!!Object.keys(bun).length ? (
            <div className={styles.ingredient}>
              <ConstructorElement
                type='bottom'
                isLocked
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image_mobile}
              />
            </div>
          ) : (
            <div className={styles.ingredient_placeholder}>
              <p className="text text_type_main-default">
                Перетащите сюда булочку
              </p>
            </div>
          )}
        </div>
        <div className={styles.cta_block}>
          <div className={styles.price}>
            <p className="text text_type_main-large">
              {totatlPrice}
            </p>
            <CurrencyIcon />
          </div>
          <Button type="primary" size="large" onClick={handleMakeOrder} disabled={!(bun || filling.length)}>
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