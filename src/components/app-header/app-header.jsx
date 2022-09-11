import React from 'react'
import { Logo, ListIcon, BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.scss'
import NavLink from './components/nav-link/nav-link'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.nav_left}>
          <NavLink href='#' active>
            <BurgerIcon />
            <p className="text text_type_main-default">
              Конструктор
            </p>
          </NavLink>
          <NavLink href='#'>
            <ListIcon />
            <p className="text text_type_main-default">
              Лента заказов
            </p>
          </NavLink>
        </div>
        <div className={styles.nav_logo}>
          <Logo />
        </div>
        <div className={styles.nav_right}>
          <NavLink href='#'>
            <ProfileIcon />
            <p className="text text_type_main-default">
              Личный кабинет
            </p>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader