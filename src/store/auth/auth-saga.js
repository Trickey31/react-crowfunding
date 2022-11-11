import { takeLatest } from "redux-saga/effects";
import { authLogin, authRegister } from "./auth-slice";
import handleAuthRegister, { handleAuthLogin } from "./auth-handler";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
}
