import SignInPage from "pages/SignInPage";
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  );
}

export default App;
