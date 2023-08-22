import axios from "axios";
import store from "../reducers/index";

const handleErrors = async (error) => {
  throw error;
};

const apiService = {
  get(url) {
    return axios
      .get(url, {
        headers: getHeaders(),
      })
      .catch(handleErrors);
  },

  post(url, body) {
    return axios
      .post(url, body, {
        headers: getHeaders(),
      })
      .catch(handleErrors);
  },

  put(url, body) {
    return axios
      .put(url, body, {
        headers: getHeaders(),
      })
      .catch(handleErrors);
  },

  delete(url) {
    return axios
      .delete(url, {
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

  // if (jwtToken !== undefined) {
  //   headers["Authorization"] = jwtToken;
  // }

  return headers;
}

export default apiService;
