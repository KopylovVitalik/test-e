export default {
  mode: "spa",
  server: { host: "192.168.88.19" },
  head: {
    title: "CC",
    meta: [{ charset: "utf-8" }],
    link: [
      // {rel:"preconnect", href="https://fonts.gstatic.com"},
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
};
