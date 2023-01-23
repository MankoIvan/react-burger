import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import Orders from "../../components/orders/orders";
import ProfileComponent from "../../components/profile/profile";
import { logoutUser } from "../../services/actions/auth";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START,
} from "../../services/constants/ws-feed";
import styles from "./profile.module.scss";

const Profile: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_FEED_CONNECTION_START,
    });

    return () => {
      dispatch({
        type: WS_FEED_CONNECTION_CLOSED,
      });
    };
  }, [dispatch]);

  const { orders } = useSelector((store) => ({
    orders: store.feed.orders,
  }));

  const onLogOut = () => {
    dispatch(logoutUser());
  };

  const { path } = useRouteMatch();
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.nav_wrapper}>
          <nav className={styles.navigation}>
            <NavLink
              to="/profile"
              exact
              className={styles.nav_link}
              activeClassName={styles.nav_link__active}
            >
              <p className="text text_type_main-medium">Профиль</p>
            </NavLink>
            <NavLink
              to="/profile/orders"
              exact
              className={styles.nav_link}
              activeClassName={styles.nav_link__active}
            >
              <p className="text text_type_main-medium">История заказов</p>
            </NavLink>
            <button className={styles.button} onClick={onLogOut}>
              <p className="text text_type_main-medium">Выход</p>
            </button>
          </nav>
          <p className="text text_type_main-default">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <Route path={path} exact>
          <ProfileComponent />
        </Route>
        <Route path={`${path}/orders`} exact>
          <Orders orders={orders} />
        </Route>
      </div>
    </div>
  );
};

export default Profile;
