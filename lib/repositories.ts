const repositories: {
  name: string;
  subtitle?: string;
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
      name: "Windows Download",
      url: "https://www.microsoft.com/en-us/software-download/windows10?d2784474-fdb0-4e9d-9e47-5e88c0e053ec=True"
    }
  },
  {
    name: "Arch Linux",
    slug: "arch",
    logo: "/icons/archlinux.svg",
    repository: {
      name: "Arch Linux Download",
      url: "https://archlinux.org/download/"
    }
  },
  {
    name: "Debian based",
    subtitle: "(Debian, Ubuntu, Mint, etc.)",
    slug: "debian",
    logo: "/icons/debian.svg",
    repository: {
      name: "Debian Download",
      url: "https://www.debian.org/distrib/"
    }
    
  },
  {
    name: "Gentoo",
    slug: "gentoo",
    logo: "/icons/gentoo.svg",
    repository: {
      name: "Gentoo Download",
      url: "https://www.gentoo.org/downloads/"
    }
  },
  {
    name: "Fedora",
    slug: "fedora",
    logo: "/icons/fedora.svg",
    repository: {
      name: "Fedora Download",
      url: "https://getfedora.org/en/workstation/download/"
    }
  },
  {
    name: "Other Linux",
    slug: "linux",
    logo: "/icons/tux.png",
    repository: {
      name: "go deal with it yourself",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  },
  {
    name: "macOS",
    slug: "macos",
    logo: "/icons/apple.svg",
    logoDark: "/icons/apple-white.svg",
    repository: {
      name: "go buy a macbook",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  },
  {
    name: "OpenBSD",
    slug: "openbsd",
    logo: "/icons/openbsd.png",
    repository: {
      name: "just dont use BSD",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  }
];

export default repositories;
