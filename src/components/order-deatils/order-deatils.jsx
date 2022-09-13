import React from 'react'
import doneImage from '../../images/done.png'
import styles from './order-deatils.module.scss'

const OrderDetails = () => {

  const getRandomNum = () => {
    return Math.floor(Math.random() * 900000) + 100000
  }

  return (
    <div className={styles.details}>
      <p className={`text text_type_digits-large ${styles.id}`}>{getRandomNum()}</p>
      <p className="text text_type_main-medium">
        идентификатор заказа
      </p>
      <img src={doneImage} alt="doneImage" className={styles.status_img} />
      <div className={styles.message}>
        <p className="text text_type_main-default">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  )
}

export default OrderDetails