import axios from "axios";

export const AxiosReq = axios.create({
  baseURL: "http://localhost:8080",
});

export const AxiosPrivate = axios.create({
  baseURL: "http://localhost:8080",
});
