import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function ChangeOs() {
  const router = useRouter();
  const currentOs = useMemo(() => router.asPath.split("/")[2] || "", [router]);
  const [os, setOs] = useState(currentOs);

  useEffect(() => {
    if (os !== currentOs) router.push(`/installation/${os}`);
  }, [currentOs, os, router]);

  return (
    <div className="select">
      My operating system is
      <select
        value={os}
        onChange={(event) => setOs(event.target.value)}
        className="focus:ring"
      >
        <option value="" selected disabled hidden>
          ...
        </option>
        <option value="windows">Windows</option>
        <option value="archlinux">Arch Linux</option>
        <option value="debian">Debian</option>
        <option value="gentoo">Gentoo</option>
        <option value="linux">Other Linux</option>
        <option value="macos">macOS</option>
      </select>
      <style jsx>{`
        .select {
          margin-top: 40px;
        }

        select {
          background: transparent;
          border: 1px solid rgb(226, 232, 240);
          border-radius: 0.25rem;
          padding: 10px;
          margin-left: 10px;
        }

        :global(.dark) select {
          border: 1px solid rgba(45, 55, 72, var(--tw-border-opacity));
        }
      `}</style>
    </div>
  );
}
