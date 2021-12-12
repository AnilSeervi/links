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
  reactStrictMode: true,
};
