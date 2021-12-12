/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
  reactStrictMode: true,
};
