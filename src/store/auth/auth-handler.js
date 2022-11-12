import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { saveToken } from "utils/auth";
import { requestAuthLogin, requestAuthRegister } from "./auth-requests";

export default function* handleAuthRegister({ payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) toast.success("Created successfully!!");
  } catch (error) {
    toast.error(error);
  }
}
function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log(
      "🚀 ~ file: auth-handler.js ~ line 17 ~ function*handleAuthLogin ~ response",
      response
    );
    if (response?.data) {
      const { accessToken, refreshToken } = response.data;
      saveToken(accessToken, refreshToken);
    }
  } catch (error) {
    console.log(error);

    // if (response.statusCode === 403) {
    //   toast.error(response.error.message);
    //   return;
    // }
  }
}
function* handleAuthFetchMe({ payload }) {
  try {
    yield 1;
  } catch (error) {}
}

export { handleAuthLogin, handleAuthFetchMe };
