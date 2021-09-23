import Image from "next/image";
import Button from "./button";

export default function Banner() {
  return (
    <div className="root">
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
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 120px;
          margin-bottom: 60px;
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
