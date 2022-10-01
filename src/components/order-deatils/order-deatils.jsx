import React from 'react'
import PropTypes from 'prop-types'
import doneImage from '../../images/done.png'
import styles from './order-deatils.module.scss'

const OrderDetails = ({ number }) => {

  const orderNumber = number.toString().padStart(6, '0')

  return (
    <div className={styles.details}>
      <p className={`text text_type_digits-large ${styles.id}`}>{orderNumber}</p>
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

OrderDetails.propTypes = {
  number: PropTypes.number.isRequired
}

export default OrderDetails