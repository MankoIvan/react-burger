import React from 'react'
import { Logo, ListIcon, BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.scss'
import NavButton from './components/nav-button/nav-button'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.nav_left}>
          <NavButton active>
            <BurgerIcon />
            <p className="text text_type_main-default">
              Конструктор
            </p>
          </NavButton>
          <NavButton>
            <ListIcon />
            <p className="text text_type_main-default">
              Лента заказов
            </p>
          </NavButton>
        </div>
        <div className={styles.nav_logo}>
          <Logo />
        </div>
        <div className={styles.nav_right}>
          <NavButton>
            <ProfileIcon />
            <p className="text text_type_main-default">
              Личный кабинет
            </p>
          </NavButton>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader