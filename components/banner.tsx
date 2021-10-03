import Image from "next/image";
import React from "react";
import Button from "./button";
import Head from "next/head";

export default function Banner() {
  return (
    <div className="root">
      <Head>
        <title>LibreWolf</title>
      </Head>
      <div className="screenshot">
        <div className="hide-light">
          <Image
            src="/screenshot-dark.png"
            width={900}
            height={700}
            alt="Screeenshot"
          />
        </div>
        <div className="hide-dark">
          <Image
            src="/screenshot-light.png"
            className="hide-dark"
            width={900}
            height={700}
            alt="Screeenshot"
          />
        </div>
      </div>
      <div className="inner">
        <Image src="/icon.svg" height={120} width={120} alt="Logo" />
        <h1>LibreWolf</h1>
        <h4 className="text-gray-600">
          A fork of Firefox, focused on privacy, security and freedom.
        </h4>
        <div className="buttons">
          <Button big href="https://gitlab.com/librewolf-community/browser">
            Source Code
          </Button>
          <Button big href="/docs/faq">
            Documentation
          </Button>
          <Button big primary href="/installation">
            Installation
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
        }

        .inner {
          padding-top: 200px;
          width: 100%;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(255, 255, 255, var(--tw-bg-opacity)) 50%
          );
        }

        :global(.dark) .inner {
          background: linear-gradient(
            180deg,
            transparent 0%,
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
