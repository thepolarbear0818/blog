import { ReactNode } from "react";
import Link from "next/link";

export default function Button({
  children,
  primary = false,
  href,
  big,
  margin = 10
}: {
  children: ReactNode;
  primary?: boolean;
  href: string;
  big?: boolean;
  margin?: number;
}) {
  return (
    <>
      <Link href={href} passHref>
        <a
          className={`button text-gray focus:ring ${primary ? "primary" : ""} ${
            big ? "big" : ""
          }`}
        >
          {children}
        </a>
      </Link>
      <style jsx>{`
        .button {
          text-decoration: none;
          padding: 8px 20px;
          margin: ${margin}px;
          margin-left: 0;
          border-radius: 0.25rem;
          border: 1px solid rgb(226, 232, 240);
          transition: background-color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .button.big {
          padding: 12px 25px;
          margin-left: 10px;
        }

        :global(.dark) .button {
          border: 1px solid rgb(45, 55, 72);
        }

        .button:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }

        :global(.dark) .button:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }

        .button.primary {
          background-color: var(--primary);
          color: white;
          border: none;
        }

        .button.primary:hover {
          background-color: var(--primary-alt);
        }
      `}</style>
    </>
  );
}
