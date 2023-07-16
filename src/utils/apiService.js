import axios from "axios";
// import { clearHeadersAndTokens } from '../actions/security';

const handleErrors = async (error) => {
  const { response } = error || {};
  const { status } = response || {};

  console.log(error);
  //   if (status === 401) {
  //     clearHeadersAndTokens();
  //     window.location.href = '/';
  //   } else {
  //     if (error.response.data instanceof Blob) {
  //       error.response.data = JSON.parse(await error.response.data.text());
  //     }
  //     throw error;
  //   }
};

const apiService = {
  get(url) {
    return axios
      .get(url, {
        headers: getSimpleHeaders(),
      })
      .catch(handleErrors);
  },

  post(url, body) {
    return axios
      .post(url, body, {
        headers: getSimpleHeaders(),
      })
      .catch(handleErrors);
  },

  put(url, body) {
    return axios
      .put(url, body, {
        headers: getSimpleHeaders(),
      })
      .catch(handleErrors);
  },

  delete(url) {
    return axios
      .delete(url, {
        headers: getSimpleHeaders(),
      })
      .catch(handleErrors);
  },

  patch(url, body) {
    return axios
      .patch(url, body, {
        headers: getSimpleHeaders(),
      })
      .catch(handleErrors);
  },
  getFromXml(url) {
    return axios
      .get(url, {
        headers: getXmlHeaders(),
      })
      .catch(handleErrors);
  },

  getFromFile(url) {
    return axios
      .get(url, {
        responseType: "blob",
        headers: { locale: fetchLocaleFromSessionStorage() },
      })
      .catch(handleErrors);
  },
};

function getSimpleHeaders() {
  return {
    "Content-Type": "application/json",
    locale: fetchLocaleFromSessionStorage(),
  };
}

function getXmlHeaders() {
  return {
    "Content-Type": "application/xml; charset=utf-8",
    locale: fetchLocaleFromSessionStorage(),
  };
}

export default apiService;
