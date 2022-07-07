import Button from "./button";
import Head from "next/head";

export default function Banner() {
  return (
    <div className="root">
      <Head>
        <title>overfl0w's blog</title>
      </Head>
      <div className="screenshot">
        <div className="hide-light">
          <img src="/homebanner.jpg" alt="random home banner" />
        </div>
        <div className="hide-dark">
          <img src="/homebanner.jpg" className="hide-dark" alt="Screeenshot" />
        </div>
      </div>
      <div className="inner">
        <img src="/avatars/overfl0w.png" alt="Logo" />
        <h1>overfl0w's blog</h1>
        <h4 className="text-gray">
          The massive container for all my google docs, now in a website
        </h4>
        <div className="buttons">
          <Button big href="https://github.com/thepolarbear0818">
            My Github
          </Button>
          <Button big primary href="/docs/faq">
            The Blogs
          </Button>
          <Button big href="/installation">
            The OS Opinions
          </Button>
        </div>
      </div>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: 60px 0;
        }

        .screenshot {
          z-index: -1;
          margin-bottom: -600px;
        }

        .screenshot :global(img) {
          border-radius: 5px;
          height: 600px;
        }

        .inner {
          padding-top: 200px;
          width: 100%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, var(--tw-bg-opacity)) 50%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .inner img {
          width: 120px;
          height: 120px;
        }

        :global(.dark) .inner {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(17, 17, 17, 0.8) 25%,
            rgba(17, 17, 17, 0.9) 30%,
            rgba(17, 17, 17, var(--tw-bg-opacity)) 40%
          );
        }

        @media (max-width: 800px) {
          .screenshot {
            display: none;
          }

          .inner {
            padding-top: 0;
          }
        }

        @media (max-width: 600px) {
          .buttons {
            display: flex;
            flex-direction: column;
          }
        }

        h1 {
          margin-top: 40px;
          font-size: 50px;
        }

        h4 {
          font-weight: 400;
        }

        .buttons {
          margin: 50px 0;
        }
      `}</style>
    </div>
  );
}
