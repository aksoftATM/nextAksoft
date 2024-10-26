/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  output: "standalone",
  images: {
    domains: [
      "basket-12.wb.ru",
      "img.freepik.com",
      "logo.com",
      "cheber-bucket.s3.eu-central-1.amazonaws.com",
      "ak-soft.s3.eu-central-1.amazonaws.com",
      "user-images.githubusercontent.com",
      "localhost:3000",
      "dummyimage.com",
      "images.freeimg.net",
      "unibook-backend-bucket.s3.eu-central-1.amazonaws.com",
      "unibook-bucket.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
