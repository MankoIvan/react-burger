import React, { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import FeedStats from "../../components/feed-stats/feed-stats";
import Orders from "../../components/orders/orders";
import {
  WS_FEED_ALL_CONNECTION_CLOSED,
  WS_FEED_ALL_CONNECTION_START,
} from "../../services/constants/ws-feed-all";
import styles from "./feed.module.scss";

const Feed: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_FEED_ALL_CONNECTION_START,
    });

    return () => {
      dispatch({
        type: WS_FEED_ALL_CONNECTION_CLOSED,
      });
    };
  }, [dispatch]);

  const { orders, total, totalToday } = useSelector((store) => ({
    orders: store.feedAll.orders,
    total: store.feedAll.total,
    totalToday: store.feedAll.totalToday,
  }));

  const ordersReady = useMemo(
    () =>
      orders
        .filter((item) => item.status === "done")
        .map((item) => item.number),
    [orders]
  );
  const ordersInProgress = useMemo(
    () =>
      orders
        .filter((item) => item.status === "pending")
        .map((item) => item.number),
    [orders]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.orders_wrapper}>
        <h1 className="text text_type_main-large">Лента заказов</h1>
        <Orders orders={orders} hideStatus />
      </div>
      <FeedStats
        ready={ordersReady}
        inProgress={ordersInProgress}
        total={total}
        totalToday={totalToday}
      />
    </div>
  );
};

export default Feed;
