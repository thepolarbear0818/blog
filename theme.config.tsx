/* eslint-disable camelcase */
import Link from "next/link";
import Logo from "components/logo";
import Gitlab from "react-devicons/gitlab/plain";

const themeConfig = {
  projectIcons: (
    <>
      <Link href="https://github.com/thepolarbear0818" passHref>
        <a className="text-current p-2 cursor-pointer" aria-label="GitHub">
          <Gitlab color="currentColor" size="1.4em" />
        </a>
      </Link>
    </>
  ),
  docsRepositoryBase:
    "https://gitlab.com/librewolf-community/website/-/blob/main/", // base URL for the docs repository
  titleSuffix: " – LibreWolf",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  unstable_flexsearch: true,
  searchPlaceholder: "Search Docs...",
  darkMode: true,
  footer: true,
  floatTOC: true,
  footerText: (
    <div style={{ maxWidth: 500 }}>
      <p>
        <Link href="/license-disclaimers">License and Disclaimers</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
      <p>
       overfl0w, 2022 revision - 22.07
      </p>
    </div>
  ),
  footerEditLink: `Original Page Gitlab`,
  logo: Logo,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />

      {/* HTML Meta Tags */}
      <meta
        name="description"
        content="Overfl0w's blog site "
      />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://blog-thepolarbear0818.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="overfl0w's blog site" />
      <meta
        property="og:description"
        content="overflow's blog site."
      />
      <meta property="og:image" content="https://librewolf.net/og_image.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="blog-thepolarbear0818.vercel.app" />
      <meta property="twitter:url" content="https://blog-thepolarbear0818.vercel.app" />
      <meta name="twitter:title" content="overfl0w's blog" />
      <meta
        name="twitter:description"
        content="A website to host overfl0w's random blogs/rants"
      />
      <meta name="twitter:image" content="https://imgur.com/a/SGHLj3R" />
    </>
  ),
  navlinks: [
    {
      title: "Homepage",
      route: "/",
      href: "/#what-is-librewolf"
    },
    {
      title: "The OS opinions",
      route: "/installation"
    },
    {
      title: "Main Blogs",
      route: "/docs",
      href: "/docs/faq"
    },
    {
      title: "Community Art (Placeholder)",
      route: "/community-art",
      href: "/community-art"
    }
  ]
};

export default themeConfig;
