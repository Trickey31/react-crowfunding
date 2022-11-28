import axios from "axios";
import { authUpdateUser } from "store/auth/auth-slice";
import { getToken, saveToken } from "utils/auth";

export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    const response = await axios.post("/token", {
      headers: {
        "Content-Type": "application/json",
        refreshToken: refresh_token,
      },
    });
    if (!response.data) return null;
    saveToken(response.data.accessToken, response.data.refreshToken);
    authUpdateUser((prev) => ({
      ...prev,
      accessToken: response?.data?.accessToken,
    }));
    return response?.data?.accessToken || "";
  }
  return refresh;
}
