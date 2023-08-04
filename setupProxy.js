const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/*", // Specify the endpoint for your backend requests
    createProxyMiddleware({
      target: "localhost:8080", // Change this to the URL of your backend server
      //   target: "http://192.168.0.18:8080", // Change this to the URL of your backend server
      changeOrigin: true,
    })
  );
};
