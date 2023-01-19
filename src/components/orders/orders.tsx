import React, { Dispatch, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START,
} from "../../services/constants/ws-feed";
import {
  WS_FEED_ALL_CONNECTION_CLOSED,
  WS_FEED_ALL_CONNECTION_START,
} from "../../services/constants/ws-feed-all";
import { TOrdersProps } from "./orders.types";

const Orders: FC<TOrdersProps> = ({ isPersonal = false }) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch({
      type: isPersonal
        ? WS_FEED_CONNECTION_START
        : WS_FEED_ALL_CONNECTION_START,
    });

    return () => {
      dispatch({
        type: isPersonal
          ? WS_FEED_CONNECTION_CLOSED
          : WS_FEED_ALL_CONNECTION_CLOSED,
      });
    };
  }, [dispatch, isPersonal]);
  return <div>Orders</div>;
};

export default Orders;
