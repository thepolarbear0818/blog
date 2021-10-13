import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import repositories from "lib/repositories";

export default function InstallationHeader() {
  const router = useRouter();
  const currentOs = useMemo(() => router.asPath.split("/")[2] || "", [router]);
  const [os, setOs] = useState(currentOs);
  const repo = useMemo(
    () => repositories.find((repo) => repo.slug === os),
    [os]
  );

  useEffect(() => {
    if (os !== currentOs) router.push(`/installation/${os}`);
  }, [currentOs, os, router]);

  return (
    <>
      <h1 className="select">
        Installation instructions for{" "}
        <div className="repo">
          {repo && (
            <>
              <img
                src={repo.logo}
                alt={`${repo.name} Logo`}
                className="logo hide-dark"
              />
              <img
                src={repo.logoDark || repo.logo}
                alt={`${repo.name} Logo`}
                className="logo hide-light"
              />
            </>
          )}
          <select
            value={os}
            onChange={(event) => setOs(event.target.value)}
            className="focus:ring"
          >
            <option value="" selected disabled hidden>
              ...
            </option>
            {repositories.map((repo) => (
              <option value={repo.slug} key={repo.slug}>
                {repo.name}
              </option>
            ))}
          </select>
        </div>
      </h1>
      <div className="links">
        <a href={`https://gitlab.com/librewolf-community/browser/${repo.slug}`}>
          LibreWolf {repo.slug[0].toUpperCase() + repo.slug.slice(1)} Repository
        </a>
        <a
          href={`https://www.mozilla.org/en-US/firefox/system-requirements#${
            repo.slug === "windows"
              ? "windows"
              : repo.slug === "macos"
              ? "mac"
              : "gnulinux"
          }`}
        >
          System Requirements
        </a>
      </div>
      <style jsx>{`
        .repo {
          display: inline-flex;
          align-items: center;
          transform: translateY(4px);
        }

        .logo {
          width: 1em;
          height: 1em;
          display: inline;
          margin-left: 10px;
          margin-right: 5px;
        }

        select {
          font-weight: 600;
          border-radius: 0.25rem;
          background: transparent;
        }

        .links {
          margin-top: 15px;
        }

        .links a {
          margin-right: 10px;
        }
      `}</style>
    </>
  );
}
