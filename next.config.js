/** @type {import('next').NextConfig} */
module.exports = {
  // no support for Internationalization in static export yet :(
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
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
