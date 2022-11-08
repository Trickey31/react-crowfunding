import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth.requests";

export default function* handleAuthRegister({ payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) toast.success("Created successfully!!");
  } catch (error) {
    toast.error(error);
  }
}
