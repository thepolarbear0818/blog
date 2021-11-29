const withNextra = require("nextra")({
  theme: "nextra-theme-docs-patch-maltejur",
  themeConfig: "./theme.config.tsx"
});
const withTM = require("next-transpile-modules")([
  "nextra-theme-docs-patch-maltejur"
]);

module.exports = withTM(
  withNextra({
    reactStrictMode: true,
    trailingSlash: true
  })
);
