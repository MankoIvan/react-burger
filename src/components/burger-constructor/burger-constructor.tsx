import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import styles from "./burger-constructor.module.scss";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-deatils/order-deatils";
import Loader from "../loader/loader";
import { makeOrder, toggleModal } from "../../services/actions/order";
import {
  addIngredient,
  removeIngredient,
} from "../../services/actions/burger-constructor";
import { useDrop } from "react-dnd";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import BurgerConstructorPlaceholder from "../burger-constructor-placeholder/burger-constructor-placeholder";
import { useHistory, useLocation } from "react-router-dom";
import { TIngredient } from "../../types/generalTypes";
import { countPrice } from "../../utils/countPrice";

const BurgerConstructor: FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const history = useHistory();
  const location = useLocation();

  const { bun, filling, orderData, loading, error, showDetails, user } =
    useSelector((store) => ({
      bun: store.burgerConstructor.bun,
      filling: store.burgerConstructor.filling,
      orderData: store.order.order,
      loading: store.order.orderRequest,
      error: store.order.orderFailed,
      showDetails: store.order.showDetails,
      user: store.auth.user,
    }));

  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(countPrice([...filling, bun, bun]) || 0);
  }, [filling, bun]);

  const handleMakeOrder = () => {
    if (!user) {
      return history.push({ pathname: "/login", state: { from: location } });
    } else {
      bun && dispatch(makeOrder([bun, ...filling, bun]));
    }
  };

  const handleOnClose = () => {
    dispatch(toggleModal());
  };

  const handleRemoveIngredient = (uuid: string) => {
    dispatch(removeIngredient(uuid));
  };

  const onDropHandler = (ingredient: TIngredient) => {
    dispatch(addIngredient(ingredient));
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "newIngredient",
    drop(ingredient: TIngredient) {
      onDropHandler(ingredient);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.ingredients} ref={dropTarget}>
          {!!bun ? (
            <BurgerConstructorElement
              ingredient={bun}
              onRemove={handleRemoveIngredient}
              position="top"
            />
          ) : (
            <BurgerConstructorPlaceholder isHovered={isHover}>
              Перетащите сюда булочку
            </BurgerConstructorPlaceholder>
          )}
          {!!filling.length ? (
            <div className={styles.filling_list}>
              {filling.map((item, index) => {
                return (
                  <BurgerConstructorElement
                    ingredient={item}
                    onRemove={handleRemoveIngredient}
                    index={index}
                    key={item._uuid}
                  />
                );
              })}
            </div>
          ) : (
            <BurgerConstructorPlaceholder isHovered={isHover}>
              Перетащите сюда начинку
            </BurgerConstructorPlaceholder>
          )}
          {!!bun ? (
            <BurgerConstructorElement
              ingredient={bun}
              onRemove={handleRemoveIngredient}
              position="bottom"
            />
          ) : (
            <BurgerConstructorPlaceholder isHovered={isHover}>
              Перетащите сюда булочку
            </BurgerConstructorPlaceholder>
          )}
        </div>
        <div className={styles.cta_block}>
          <div className={styles.price}>
            <p className="text text_type_main-large">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="large"
            onClick={handleMakeOrder}
            disabled={!bun || !filling.length}
            htmlType="button"
          >
            Оформить заказ
          </Button>
        </div>
      </section>
      {showDetails && (
        <Modal onClose={handleOnClose}>
          {loading || error ? (
            <Loader
              text={loading ? "Загружаемся..." : "Произошла ошибка загрузки"}
            />
          ) : (
            <OrderDetails {...orderData} />
          )}
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
