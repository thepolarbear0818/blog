import Image from "next/image";

export default function Features() {
  return (
    <div className="features">
      <div className="grid">
        <div className="card">
          <Image
            src="/icons/no-looking.png"
            width={80}
            height={80}
            alt="Icon No Looking"
          />
          <h5>No Telemetry</h5>
          <p>
            No experiments, adware, annoyances, or unnecessary distractions.
          </p>
        </div>
        <div className="card">
          <Image
            src="/icons/search.svg"
            width={80}
            height={80}
            alt="Icon Private Search"
          />
          <h5>Private Search</h5>
          <p>
            Privacy-conscious search providers:{" "}
            <a href="https://duckduckgo.com/">DuckDuckGo</a>,{" "}
            <a href="https://searx.be/">Searx</a>,{" "}
            <a href="https://www.qwant.com/">Qwant</a> and more.
          </p>
        </div>
        <div className="card">
          <Image
            src="/icons/ublock.svg"
            width={80}
            height={80}
            alt="Icon uBlock Origin"
          />
          <h5>Ad Block Included</h5>
          <p>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin">
              uBlock Origin
            </a>{" "}
            is already included for your convenience.
          </p>
        </div>
        <div className="card">
          <Image src="/icons/lock.png" width={80} height={80} alt="Icon Lock" />
          <h5>Enhanced Security</h5>
          <p>
            Extension firewall and other security improvements included, without
            sacrificing usability.
          </p>
        </div>
        <div className="card">
          <Image
            src="/icons/update.png"
            width={80}
            height={80}
            alt="Icon Update"
          />
          <h5>Fast Updates</h5>
          <p>
            LibreWolf is always built from the latest Firefox stable source, for
            up-to-date security and features along with stability.
          </p>
        </div>
        <div className="card">
          <Image
            src="/icons/open-source.svg"
            width={80}
            height={80}
            alt="Icon Open Source"
          />
          <h5>Open Source</h5>
          <p>
            Everyone can participate in the development of LibreWolf. Join us on{" "}
            <a href="https://gitlab.com/librewolf-community">GitLab</a>,{" "}
            <a href="https://app.element.io/#/room/#librewolf:matrix.org">
              element.io
            </a>{" "}
            and{" "}
            <a href="https://gitter.im/librewolf-community/librewolf">gitter</a>
            .
          </p>
        </div>
      </div>
      <style jsx>{`
        .features {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 850px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          width: 250px;
          margin: 10px;
        }
      `}</style>
    </div>
  );
}
