import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import Layout from "../layout/layout";
import MainContent from "../main-content/main-content";
import {
  Constructor,
  Feed,
  ForgotPassword,
  Login,
  Profile,
  Register,
  ResetPassword,
} from "../../pages";
import { getCookie } from "../../utils/cookie";
import { getUser, updateToken } from "../../services/actions/auth";
import ProtectedRoute from "../protected-route/protected-route";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getIngredients } from "../../services/actions/ingredients";
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import Ingredient from "../../pages/ingredient/ingredient";
import NotFound from "../../pages/not-found/not-found";
import { TLocation, TStore } from "../../types/generalTypes";
import OrderExplicitDetails from "../order-explicit-details/order-explicit-details";

function App() {
  const location = useLocation<TLocation>();
  const history = useHistory();
  const background = location.state && location.state.background;

  const dispatch: Dispatch<any> = useDispatch();
  const cookie = getCookie("token");
  const { user, getUserFailed, loading, error } = useSelector(
    (store: TStore) => ({
      user: store.auth.user,
      getUserFailed: store.auth.getUserFailed,
      loading: store.ingredients.itemsRequest,
      error: store.ingredients.itemsFailed,
    })
  );

  useEffect(() => {
    if (!user && cookie) {
      dispatch(getUser());
    }
  }, [cookie, dispatch, user]);

  useEffect(() => {
    if (getUserFailed) {
      dispatch(updateToken());
    }
  }, [dispatch, getUserFailed]);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleOnClose = () => {
    history.goBack();
  };

  return (
    <Layout>
      <AppHeader />
      <MainContent>
        <Switch location={background || location}>
          <Route path="/" exact>
            <Constructor />
          </Route>
          <ProtectedRoute path="/login" exact>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute path="/register" exact>
            <Register />
          </ProtectedRoute>
          <ProtectedRoute path="/forgot-password" exact>
            <ForgotPassword />
          </ProtectedRoute>
          <ProtectedRoute path="/reset-password" exact>
            <ResetPassword />
          </ProtectedRoute>
          <Route path="/feed" exact>
            <Feed />
          </Route>
          <Route path="/feed/:id" exact>
            {loading || error ? (
              <Loader
                text={loading ? "Загружаемся..." : "Произошла ошибка загрузки"}
              />
            ) : (
              <OrderExplicitDetails />
            )}
          </Route>
          <ProtectedRoute path="/profile/orders/:id" exact authRequired>
            {loading || error ? (
              <Loader
                text={loading ? "Загружаемся..." : "Произошла ошибка загрузки"}
              />
            ) : (
              <OrderExplicitDetails />
            )}
          </ProtectedRoute>
          <ProtectedRoute path="/profile" authRequired>
            <Profile />
          </ProtectedRoute>
          <Route path="/ingredients/:id" exact>
            {loading || error ? (
              <Loader
                text={loading ? "Загружаемся..." : "Произошла ошибка загрузки"}
              />
            ) : (
              <Ingredient />
            )}
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        {background && (
          <Route path="/ingredients/:id">
            <Modal onClose={handleOnClose} header="Детали ингредиента">
              {loading || error ? (
                <Loader
                  text={
                    loading ? "Загружаемся..." : "Произошла ошибка загрузки"
                  }
                />
              ) : (
                <IngredientDetails />
              )}
            </Modal>
          </Route>
        )}
      </MainContent>
    </Layout>
  );
}

export default App;
