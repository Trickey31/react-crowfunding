import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutPayment from "layout/LayoutPayment";
import CheckoutPage from "pages/CheckoutPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken } from "utils/auth";

const SignUpPage = lazy(() => import("pages/SignUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const LayoutDashboard = lazy(() => import("layout/LayoutDashboard"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("pages/StartCampaignPage"));
const CampaignView = lazy(() => import("modules/campaign/CampaignView"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const { access_token } = getToken();
    if (user && user.id) {
      dispatch(authUpdateUser({ user, accessToken: access_token }));
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) dispatch(authRefreshToken(refresh_token));
      else dispatch(authUpdateUser({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          {/* <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route> */}
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
