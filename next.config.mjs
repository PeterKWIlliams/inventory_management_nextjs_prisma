!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.clerk.dev",
      "img.freepik.com",
      "images.uploadthing.com",
      "utfs.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;
