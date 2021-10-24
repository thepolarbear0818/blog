/* eslint-disable @next/next/no-img-element */

export default function Contributors({
  contributors
}: {
  contributors: {
    name?: string;
    tag: string;
    avatar: string;
    link: string;
    roles: string[];
  }[];
}) {
  return (
    <div className="contributors">
      {contributors.map((contributor) => (
        <div key={contributor.tag} className="contributor card">
          <a href={contributor.link}>
            <img src={contributor.avatar} alt={`Avatar ${contributor.tag}`} />{" "}
            <div className="name">{contributor.name || contributor.tag}</div>
            {contributor.name && (
              <div className="tag text-gray-600">{contributor.tag}</div>
            )}
          </a>

          <div className="roles">
            {contributor.roles.map((role) => (
              <div className="chip" key={role}>
                {role}
              </div>
            ))}
          </div>
        </div>
      ))}
      <style jsx>{`
        .contributors {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin: 30px 0;
        }

        @media (max-width: 900px) {
          .contributors {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 700px) {
          .contributors {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 400px) {
          .contributors {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .contributor {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .contributor a {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
        }
        .contributor a:hover {
          text-decoration: underline;
        }

        .contributor img {
          border-radius: 50%;
          width: 80px;
          height: 80px;
          margin-bottom: 10px;
        }

        .contributor .name {
          margin-bottom: 30px;
        }

        .contributor .tag {
          font-size: 14px;
          margin-top: -30px;
          height: 30px;
        }

        .roles {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .chip {
          background-color: rgba(0, 0, 0, 0.1);
          display: inline-block;
          border-radius: 5px;
          padding: 5px 10px;
          font-size: 13px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
