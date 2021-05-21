export default {
  // mode: "spa",
  target: "static",
  server: { host: "192.168.88.19" },
  head: {
    title: "Test Project",
    meta: [{ charset: "utf-8" }],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap",
      },
    ],
  },
  plugins: [],
  modules: ["@nuxtjs/axios"],
  buildModules: [],
  router: {
    base: "/test-e/",
  },
};
