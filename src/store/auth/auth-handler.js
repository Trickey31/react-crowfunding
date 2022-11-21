import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "utils/auth";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-requests";
import { authUpdateUser } from "./auth-slice";

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
    if (response?.data) {
      const { accessToken, refreshToken } = response.data;
      saveToken(accessToken, refreshToken);
      yield call(handleAuthFetchMe, { payload: accessToken });
    }
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}
function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {}
}
function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response?.data) {
      const { accessToken, refreshToken } = response.data;
      saveToken(accessToken, refreshToken);
      yield call(handleAuthFetchMe, { payload: accessToken });
    } else {
      yield handleAuthLogout();
    }
  } catch (error) {}
}
function* handleAuthLogout() {
  try {
    yield put(
      authUpdateUser({
        user: undefined,
        accessToken: null,
      })
    );
    logOut();
  } catch (error) {}
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRefreshToken,
  handleAuthLogout,
};
