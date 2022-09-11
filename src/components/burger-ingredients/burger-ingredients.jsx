import React, { useState, useEffect } from 'react'
import styles from './burger-ingredients.module.scss'
import { mockedBun, mockedFilling } from '../../utils/mockedData'
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import OrderDetails from '../order-deatils/order-deatils'

const BurgerIngredients = () => {

  const [bun, setBun] = useState({})
  const [filling, setFilling] = useState([])
  const [showModal, setShowModal] = useState(false)

  const countPrice = (ingredients) => {
    return ingredients.reduce((acc, item) => acc + item.price, 0)
  }

  useEffect(() => {
    setBun(mockedBun);
    setFilling(mockedFilling)
  }, [])

  const toggleModal = () => {
    setShowModal(prev => !prev)
  }


  return (
    <>
      <section className={styles.wrapper}>
        {/* Доделать паддинги с учетом dnd в следующем спринте */}
        <div className={styles.ingredients_list}>
          {bun && (
            <ConstructorElement
              type='top'
              isLocked
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          )}
          {filling && (
            <div className={styles.filling_list}>
              {filling.map((item, index) => {
                return (
                  <ConstructorElement
                    key={index}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image_mobile}
                  />
                )
              })}
            </div>
          )}
          {bun && (
            <ConstructorElement
              type='bottom'
              isLocked
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          )}
        </div>
        <div className={styles.cta_block}>
          <div className={styles.price}>
            <p className="text text_type_main-large">
              {countPrice([...filling, bun, bun]) || 0}
            </p>
            <CurrencyIcon />
          </div>
          <Button type="primary" size="large" onClick={toggleModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {showModal && (
        <Modal header='header' onClose={toggleModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  )
}

export default BurgerIngredients