import React from "react";
import Link from "next/link";
import Logo from "components/logo";
import Gitlab from "@geist-ui/react-icons/gitlab";

const themeConfig = {
  projectLink: "https://gitlab.com/librewolf-community/browser",
  projectLinkIcon: <Gitlab />,
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
        <span>The source code of LibreWolf is licensed under the </span>
        <Link href="https://www.mozilla.org/en-US/MPL/2.0/">MPL 2.0</Link>
        <br />
        <span>The source code of this website is licensed under the </span>
        <Link href="https://www.gnu.org/licenses/agpl-3.0-standalone.html">
          GNU AGPL 3.0
        </Link>
        <br />
        <span>
          The content of the docs (<code>/docs</code>) is licensed under the{" "}
        </span>
        <Link href="https://www.gnu.org/licenses/fdl-1.3-standalone.html">
          GNU FDL 1.3
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
