/* eslint-disable camelcase */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs-patch-maltejur",
  themeConfig: "./theme.config.tsx",
  unstable_flexsearch: true
});

module.exports = withNextra({
  reactStrictMode: true,
  trailingSlash: true
});
