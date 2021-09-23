import Image from "next/image";
import Link from "next/link";

const systems: {
  name: string;
  href: string;
  logo: string;
  logoDark?: string;
}[] = [
  { name: "Windows", href: "/install/windows", logo: "/icons/windows.svg" },
  {
    name: "Arch Linux",
    href: "/install/archlinux",
    logo: "/icons/archlinux.svg",
  },
  { name: "Debian", href: "/install/debian", logo: "/icons/debian.svg" },
  { name: "Gentoo", href: "/install/gentoo", logo: "/icons/gentoo.svg" },
  { name: "Other Linux", href: "/install/linux", logo: "/icons/tux.png" },
  {
    name: "macOS",
    href: "/install/macos",
    logo: "/icons/apple.svg",
    logoDark: "/icons/apple-white.svg",
  },
];

export default function SelectOs() {
  return (
    <>
      <div className="grid">
        {systems.map((os) => (
          <Link href={os.href} passHref key={os.name}>
            <a className="card focus:ring">
              <div className={os.logoDark ? "hide-dark" : ""}>
                <Image
                  src={os.logo}
                  width={60}
                  height={60}
                  alt={`${os.name} Logo`}
                />
              </div>
              {os.logoDark && (
                <div className={"hide-light"}>
                  <Image
                    src={os.logoDark}
                    width={60}
                    height={60}
                    alt={`${os.name} Logo`}
                  />
                </div>
              )}
              <h3>{os.name}</h3>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 700px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
          }

          .card {
            margin: 10px auto !important;
          }
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .card {
          width: 200px;
          cursor: pointer;
          margin: 10px;
        }
      `}</style>
    </>
  );
}
