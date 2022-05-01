import { useSSG } from "nextra/ssg";
import { Download, DownloadButton, DownloadPromise } from "./downloadButton";

export function getGitlabDownloadProp(
  projectId: string,
  endsWith: string,
  doesntEndWith?: string
): DownloadPromise {
  return {
    id: projectId,
    getDownload: () =>
      fetch(`https://gitlab.com/api/v4/projects/${projectId}/releases`)
        .then((res) => res.json())
        .then(async (res) => {
          const asset = res[0].assets.links.find(
            (asset: { name: string; url: string }) =>
              asset.name.endsWith(endsWith) &&
              (!doesntEndWith || !asset.name.endsWith(doesntEndWith))
          );
          if (!asset)
            throw new Error(
              `Can't find any release asset for GitLab project ${projectId} with filter *${endsWith}`
            );
          const download: Download = {
            id: projectId,
            name: asset.name,
            url: asset.url,
            otherDownloadsUrl: res[0]._links.self.replace(/\/[^\/]*$/, ""),
            otherDownloadsString: "View all versions and release notes",
            data: {
              projectId,
              endsWith,
              ...(doesntEndWith ? { doesntEndWith } : {})
            }
          };
          async function fetchSha256(url: string) {
            const response = await fetch(url);
            if (!response.ok) return;
            download.sha256 = (await response.text()).split(" ")[0];
          }
          await Promise.all([
            fetchSha256(`${download.url}.sha256`),
            fetchSha256(`${download.url}.sha256sum`)
          ]);
          return download;
        })
  };
}

export function GitlabDownloadButton({ projectId }: { projectId: string }) {
  const { initialDownloads } = useSSG();
  const download: Download = initialDownloads[projectId];

  return (
    <DownloadButton
      downloadPromise={getGitlabDownloadProp(
        projectId,
        download.data.endsWith,
        download.data.doesntEndWith
      )}
    />
  );
}
