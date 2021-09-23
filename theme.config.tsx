import React from "react";
import Link from "next/link";
import Logo from "components/logo";

const themeConfig = {
  github: "https://gitlab.com/librewolf-community/browser", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/maltejur/librewolf-website", // base URL for the docs repository
  titleSuffix: " – LibreWolf",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  floatTOC: true,
  footerText: (
    <div style={{ maxWidth: 500 }}>
      <p>
        <span>LibreWolf is licensed under the </span>
        <Link href="https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)">
          Mozilla Public License 2.0
        </Link>
      </p>
      <p>
        Please note that we are <b>not</b> affiliated with Mozilla, the creators
        of Firefox web browser. The Firefox name is a trademark of the Mozilla
        Foundation.
      </p>
    </div>
  ),
  footerEditLink: `Edit this page on GitHub`,
  logo: Logo,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="LibreWolf: A fork of Firefox, focused on privacy, security and freedom."
      />
      <meta name="og:title" content="LibreWolf Browser" />
      <link rel="shortcut icon" href="/icon.svg" />
    </>
  ),
};

export default themeConfig;
