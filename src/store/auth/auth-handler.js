import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { saveToken } from "utils/auth";
import { requestAuthLogin, requestAuthRegister } from "./auth.requests";

export default function* handleAuthRegister({ payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) toast.success("Created successfully!!");
  } catch (error) {
    toast.error(error);
  }
}
export function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response?.data) {
      const { accessToken, refreshToken } = response.data;
      saveToken(accessToken, refreshToken);
    }
  } catch (error) {
    toast.error(error);
  }
}
