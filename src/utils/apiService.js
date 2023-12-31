import axios from "axios";
import store from "../reducers/index";

const serverDomain = process.env.REACT_APP_SERVER_DOMAIN;

const handleErrors = async (error) => {
  throw error;
};

const apiService = {
  get(path) {
    return axios
      .get(serverDomain + path, {
        headers: getHeaders(),
      })
      .catch(handleErrors);
  },

  post(path, body) {
    return axios
      .post(serverDomain + path, body, {
        headers: getHeaders(),
      })
      .catch(handleErrors);
  },

  put(path, body) {
    return axios
      .put(serverDomain + path, body, {
        headers: getHeaders(),
      })
      .catch(handleErrors);
  },

  delete(path) {
    return axios
      .delete(serverDomain + path, {
        headers: getHeaders(),
      })
      .catch(handleErrors);
  },
};

function getHeaders() {
  const jwtToken = store.getState().userReducer.token;

  const headers = {
    "Content-Type": "application/json",
    ...(jwtToken !== undefined ? { Authorization: `Bearer ${jwtToken}` } : {}),
  };

  return headers;
}

export default apiService;
