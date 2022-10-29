module.exports = {
  rewrites: async () => {
    return [
      {
        source: "/privacy",
        destination: "/static-pages/privacy.html",
      },
    ];
  },
};
