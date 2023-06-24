const path = require("path");
const withLess = require("next-with-less");

/** @type {import('next').NextConfig} */
module.exports = withLess({
  // reactStrictMode: true,
  // lessLoaderOptions: {},
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});
