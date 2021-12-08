const withNextra = require("nextra")({
  theme: "nextra-theme-docs-patch-maltejur",
  themeConfig: "./theme.config.tsx"
});

module.exports = withNextra({
  reactStrictMode: true,
  trailingSlash: true
});
