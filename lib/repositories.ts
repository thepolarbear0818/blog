const repositories: {
  name: string;
  slug: string;
  logo: string;
  logoDark?: string;
}[] = [
  {
    name: "Windows",
    slug: "windows",
    logo: "/icons/windows.svg"
  },
  {
    name: "Arch Linux",
    slug: "arch",
    logo: "/icons/archlinux.svg"
  },
  {
    name: "Debian based",
    slug: "debian",
    logo: "/icons/debian.svg"
  },
  {
    name: "Gentoo",
    slug: "gentoo",
    logo: "/icons/gentoo.svg"
  },
  {
    name: "Other Linux",
    slug: "linux",
    logo: "/icons/tux.png"
  },
  {
    name: "macOS",
    slug: "macos",
    logo: "/icons/apple.svg",
    logoDark: "/icons/apple-white.svg"
  }
];

export default repositories;
