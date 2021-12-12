import { DownloadButton, DownloadPromise } from "./downloadButton";
import escapeRegex from "lib/escapeRegex";
import compareVersions from "compare-versions";

export function getFreshDownloadProp(
  endsWith: string,
  showOtherVersions = true
): DownloadPromise {
  return {
    id: endsWith,
    getDownload: async () => {
      let response = await fetch(`https://fresh.librewolf.io/`);
      let text = await response.text();
      const matches = text.matchAll(/href="librewolf-(.*?)\/"/g);
      let librewolfVersion: string;
      for (const match of matches) {
        if (
          !librewolfVersion ||
          compareVersions(match[1], librewolfVersion) === 1
        ) {
          librewolfVersion = match[1];
        }
      }
      response = await fetch(
        `https://fresh.librewolf.io/librewolf-${librewolfVersion}/`
      );
      text = await response.text();
      const regex = new RegExp(
        `href="(librewolf-${escapeRegex(librewolfVersion)}(?:.*?)${escapeRegex(
          endsWith
        )})"`
      );
      const match = regex.exec(text);
      if (match)
        return {
          id: endsWith,
          name: match[1],
          url: `https://fresh.librewolf.io/librewolf-${librewolfVersion}/${match[1]}`,
          ...(showOtherVersions
            ? { otherDownloadsUrl: "https://fresh.librewolf.io/" }
            : {})
        };
      throw new Error(
        `Could not find fresh.librewolf.io download for ${endsWith}`
      );
    }
  };
}

export function FreshDownloadButton({ endsWith }: { endsWith: string }) {
  return <DownloadButton downloadPromise={getFreshDownloadProp(endsWith)} />;
}
