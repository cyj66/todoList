import { HTTP } from "@/config";
import axios from "axios";

export const http = axios.create({
  baseURL: HTTP.BASE_URL,
  timeout: HTTP.TIME_OUT,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Accept: "application/json",
  },
});

http.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
    return err;
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
    return err;
  }
);
