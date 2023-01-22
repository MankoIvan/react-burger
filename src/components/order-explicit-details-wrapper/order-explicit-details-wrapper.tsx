import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import Loader from "../loader/loader";
import OrderExplicitDetailsComponent from "../order-explicit-details/order-explicit-details";
import { getOrder } from "../../services/actions/order";
import styles from "./order-explicit-details-wrapper.module.scss";

const OrderExplicitDetailsWrapper: FC = () => {
  const { id }: { id: string } = useParams();

  const { order, orderLoading, orderError } = useSelector((store) => ({
    order: store.order.explicitOrder,
    orderLoading: store.order.explicitOrderRequest,
    orderError: store.order.explicitOrderFailed,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    id && dispatch(getOrder(Number(id)));
  }, [dispatch, id]);

  return orderLoading || orderError ? (
    <Loader
      text={orderLoading ? "Загружаемся..." : "Произошла ошибка загрузки"}
    />
  ) : order ? (
    <div className={styles.wrapper}>
      <OrderExplicitDetailsComponent {...order} />
    </div>
  ) : (
    <Loader text="Такого заказа не существует :(" />
  );
};

export default OrderExplicitDetailsWrapper;
