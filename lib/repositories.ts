const repositories: {
  name: string;
  slug: string;
  logo: string;
  logoDark?: string;
  repository?: {
    name: string;
    url: string;
  };
}[] = [
  {
    name: "Windows",
    slug: "windows",
    logo: "/icons/windows.svg",
    repository: {
      name: "LibreWolf Windows Repository",
      url: "https://gitlab.com/librewolf-community/browser/windows"
    }
  },
  {
    name: "Arch Linux",
    slug: "arch",
    logo: "/icons/archlinux.svg",
    repository: {
      name: "LibreWolf Arch Repository",
      url: "https://gitlab.com/librewolf-community/browser/arch"
    }
  },
  {
    name: "Debian based",
    slug: "debian",
    logo: "/icons/debian.svg"
  },
  {
    name: "Gentoo",
    slug: "gentoo",
    logo: "/icons/gentoo.svg",
    repository: {
      name: "LibreWolf Gentoo Repository",
      url: "https://gitlab.com/librewolf-community/browser/gentoo"
    }
  },
  {
    name: "Fedora",
    slug: "fedora",
    logo: "/icons/fedora.svg"
  },
  {
    name: "Other Linux",
    slug: "linux",
    logo: "/icons/tux.png",
    repository: {
      name: "LibreWolf Linux Repository",
      url: "https://gitlab.com/librewolf-community/browser/linux"
    }
  },
  {
    name: "macOS",
    slug: "macos",
    logo: "/icons/apple.svg",
    logoDark: "/icons/apple-white.svg",
    repository: {
      name: "LibreWolf macOS Repository",
      url: "https://gitlab.com/librewolf-community/browser/macos"
    }
  }
];

export default repositories;
