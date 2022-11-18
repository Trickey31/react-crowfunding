import { takeLatest } from "redux-saga/effects";
import { authLogin, authRefreshToken, authRegister } from "./auth-slice";
import handleAuthRegister, {
  handleAuthLogin,
  handleAuthRefreshToken,
} from "./auth-handler";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
}
