import Link from "next/link";
import repositories from "lib/repositories";

export default function SelectOs() {
  return (
    <>
      <div className="grid">
        {repositories.map((repo) => (
          <Link href={`/installation/${repo.slug}`} passHref key={repo.name}>
            <a className="card focus:ring">
              <div className={repo.logoDark ? "hide-dark" : ""}>
                <img
                  src={repo.logo}
                  width={60}
                  height={60}
                  alt={`${repo.name} Logo`}
                />
              </div>
              {repo.logoDark && (
                <div className={"hide-light"}>
                  <img
                    src={repo.logoDark}
                    width={60}
                    height={60}
                    alt={`${repo.name} Logo`}
                  />
                </div>
              )}
              <h3>{repo.name}</h3>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 200px);
          justify-content: center;
          justify-items: center;
          gap: 20px;
        }

        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: repeat(3, 200px);
          }
        }

        @media (max-width: 700px) {
          .grid {
            grid-template-columns: repeat(2, 200px);
          }
        }

        @media (max-width: 500px) {
          .grid {
            grid-template-columns: repeat(1, 200px);
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
        }
      `}</style>
    </>
  );
}
