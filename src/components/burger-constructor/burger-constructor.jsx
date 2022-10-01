import React, { useState, useEffect } from 'react'
import styles from './burger-constructor.module.scss'
import { mockedBun, mockedFilling } from '../../utils/mockedData'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import OrderDetails from '../order-deatils/order-deatils'
import { makeOrder } from '../../utils/burger-api'
import Loader from '../loader/loader'

const BurgerConstructor = () => {

  const [bun, setBun] = useState({})
  const [filling, setFilling] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [totatlPrice, setTotatlPrice] = useState(0)
  const [orderData, setOrderData] = useState(null)
  const [loading, setLoading] = useState(false)

  const countPrice = (ingredients) => {
    return ingredients.reduce((acc, item) => acc + (item.price || 0), 0)
  }

  useEffect(() => {
    setBun(mockedBun);
    setFilling(mockedFilling)
  }, [])

  useEffect(() => {
    setTotatlPrice(countPrice([...filling, bun, bun]) || 0)
  }, [filling, bun])


  const toggleModal = () => {
    setShowModal(prev => !prev)
  }

  const handleMakeOrder = () => {
    setLoading(true)
    toggleModal()
    makeOrder([...filling, bun, bun])
      .then(data => {
        setOrderData(data.order)
        setLoading(false)
      })
      .catch(() => alert('Что-то пошло не так на этапе создания заказа.'))
  }

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.ingredients}>
          {bun && (
            <div className={styles.ingredient}>
              <ConstructorElement
                type='top'
                isLocked
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image_mobile}
              />
            </div>
          )}
          {filling && (
            <div className={styles.filling_list}>
              {filling.map((item, index) => {
                return (
                  <div className={styles.ingredient} key={index}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image_mobile}
                    />
                  </div>
                )
              })}
            </div>
          )}
          {bun && (
            <div className={styles.ingredient}>
              <ConstructorElement
                type='bottom'
                isLocked
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image_mobile}
              />
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
          <Button type="primary" size="large" onClick={handleMakeOrder}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {showModal && (
        <Modal onClose={toggleModal}>
          {loading ? (
            <Loader />
          ) : (
            <OrderDetails {...orderData} />
          )}
        </Modal>
      )}
    </>
  )
}

export default BurgerConstructor