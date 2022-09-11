import React from 'react'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.outer_orbit}>
        <div className={styles.outer_planet}>
          <BurgerIcon type="primary" />
        </div>
        <div className={styles.inner_orbit}>
          <div className={styles.inner_planet}>
            <BurgerIcon type="primary" />
          </div>
        </div>
      </div>
      <p className="text text_type_main-large">
        Загружаемся...
      </p>
    </div>
  )
}

export default Loader