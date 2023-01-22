import React, { FC } from "react";
import {
  Logo,
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.scss";
import { Link, NavLink } from "react-router-dom";
const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.nav_left}>
          <NavLink
            to="/"
            exact
            className={styles.nav_link}
            activeClassName={styles.nav_link__active}
          >
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">Конструктор</p>
          </NavLink>
          <NavLink
            to="/feed"
            className={styles.nav_link}
            activeClassName={styles.nav_link__active}
          >
            <ListIcon type="primary" />
            <p className="text text_type_main-default">Лента заказов</p>
          </NavLink>
        </div>
        <Link className={styles.nav_logo} to="/">
          <Logo />
        </Link>
        <div className={styles.nav_right}>
          <NavLink
            to="/profile"
            className={styles.nav_link}
            activeClassName={styles.nav_link__active}
          >
            <ProfileIcon type="primary" />
            <p className="text text_type_main-default">Личный кабинет</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
