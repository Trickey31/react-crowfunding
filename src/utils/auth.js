// getToken, saveToken
import Cookies from "js-cookie";

const accessTokenKey = "crow_access_token";
const refreshTokenKey = "crow_refresh_token";
const obj = {
  expire: 30,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, { ...obj });
    Cookies.set(refreshTokenKey, refresh_token, { ...obj });
  } else {
    Cookies.remove(accessTokenKey, { ...obj, path: "/" });
    Cookies.remove(refreshTokenKey, { ...obj, path: "/" });
  }
};

export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};
