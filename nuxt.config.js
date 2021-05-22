export default {
  target: "static",
  server: {
    host: process.env.NODE_ENV === "production" ? "localhost" : "192.168.88.19",
  },
  head: {
    title: "Test Project",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap",
      },
    ],
  },
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "http://jsonplaceholder.typicode.com",
    proxyHeaders: false,
    credentials: false,
  },
  router: {
    base: process.env.NODE_ENV === "production" ? "/test-e/" : "/",
  },
};
