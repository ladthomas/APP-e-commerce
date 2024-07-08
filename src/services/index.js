import axios from "axios";
import { baseURl } from "../constants";
import { getSessionStorage } from "../stores";
export const InstanceAxios = axios.create({
  baseURL: baseURl,
});

InstanceAxios.interceptors.request.use(
  async (config) => {
    const token = getSessionStorage("token");
    console.log("token", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
InstanceAxios.interceptors.response.use(
  (response) => {
    // Vérifier si la réponse a un statut 498
    if (response?.status === 401) {
      sessionStorage.removeItem("authToken");
      localStorage.clear();
    }

    return response;
  },
  (error) => {
    // Capturer les erreurs de réponse HTTP
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("authToken");
      localStorage.clear();
    }

    return Promise.reject(error);
  }
);

export default InstanceAxios;
