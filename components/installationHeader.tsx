import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import repositories from "lib/repositories";
import GitPlainIcon from "react-devicons/git/plain";

export default function InstallationHeader() {
  const router = useRouter();
  const currentOs = useMemo(() => router.asPath.split("/")[2] || "", [router]);
  const [os, setOs] = useState(currentOs);
  const repo = useMemo(
    () => repositories.find((repo) => repo.slug === os),
    [os]
  );

  useEffect(() => {
    setOs((os) => os);
  }, []);

  useEffect(() => {
    if (os !== currentOs) router.push(`/installation/${os}`);
  }, [currentOs, os, router]);

  return (
    <div className="header">
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
            <option value="" disabled hidden>
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
        {repo.repository && (
          <a href={repo.repository.url}>
            <GitPlainIcon color="currentColor" />
            {repo.repository.name}
          </a>
        )}
        <a
          href={`https://www.mozilla.org/en-US/firefox/system-requirements#${(() => {
            switch (repo.slug) {
              case "windows":
                return "windows";
              case "macos":
                return "mac";
              default:
                return "gnulinux";
            }
          })()}`}
        >
          {/* From @geist-ui/react-icons */}
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M2 13.381h20M8.66 19.05V22m6.84-2.95V22m-8.955 0h10.932M4 19.05h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13.05a2 2 0 002 2z"></path>
          </svg>
          System Requirements
        </a>
      </div>
      <style jsx>{`
        .header {
          margin-bottom: 50px;
        }

        h1 {
          line-height: 1.4em;
        }

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
          margin-top: 10px;
        }

        .links a {
          display: inline-block;
          margin-right: 15px;
          margin-top: 10px;
        }

        .links :global(svg) {
          display: inline;
          margin-right: 5px;
          width: 1em;
          height: 1em;
          stroke-width: 2px;
        }
      `}</style>
    </div>
  );
}
