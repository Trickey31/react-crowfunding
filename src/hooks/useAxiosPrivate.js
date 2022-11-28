import { axiosPrivate } from "api/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";

export default function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const previousRequest = error.config;
        if (error?.response?.status === 403 && !previousRequest.sent) {
          previousRequest.sent = true;
          const newAccessToken = await refresh();
          previousRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(previousRequest);
        }
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.accessToken, refresh]);
  return axiosPrivate;
}
