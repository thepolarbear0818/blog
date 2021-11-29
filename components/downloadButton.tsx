import { GetStaticProps } from "next";
import { useSSG } from "nextra/ssg";

import { useEffect, useState } from "react";
import Button from "./button";

export function DownloadButton() {
  const {
    projectId,
    initialDownloadName,
    initialDownloadLink,
    initialReleasesLink,
    endsWith,
    doesntEndWith
  } = useSSG();

  const [downloadName, setDownloadName] = useState(initialDownloadName);
  const [downloadLink, setDownloadLink] = useState(initialDownloadLink);
  const [releasesLink, setReleasesLink] = useState(initialReleasesLink);

  useEffect(() => {
    fetch(`https://gitlab.com/api/v4/projects/${projectId}/releases`)
      .then((res) => res.json())
      .then((res) => {
        const asset = res[0].assets.links.find(
          (asset) =>
            asset.name.endsWith(endsWith) &&
            (!doesntEndWith || !asset.name.endsWith(doesntEndWith))
        );
        setDownloadLink(asset.url);
        setDownloadName(asset.name);
        setReleasesLink(res[0]._links.self.replace(/\/[^\/]*$/, ""));
      })
      .catch();
  }, [doesntEndWith, endsWith, projectId]);

  return (
    <p>
      <Button primary href={downloadLink} margin={0}>
        Download <small>{downloadName}</small>
      </Button>
      <a href={releasesLink}>View all versions and release notes</a>
      <style jsx>{`
        p :global(.button) {
          white-space: nowrap;
          max-width: calc(100vw - 100px);
          overflow: hidden;
          margin-right: 15px;
        }

        a {
          margin-top: 7px;
          display: inline-block;
          vertical-align: top;
        }
      `}</style>
    </p>
  );
}

export function getStaticDownloadButtonProps(
  projectId: string,
  endsWith: string,
  doesntEndWith?: string
): GetStaticProps {
  return () =>
    fetch(`https://gitlab.com/api/v4/projects/${projectId}/releases`)
      .then((res) => res.json())
      .then((res) => {
        const asset = res[0].assets.links.find(
          (asset: { name: string; url: string }) =>
            asset.name.endsWith(endsWith) &&
            (!doesntEndWith || !asset.name.endsWith(doesntEndWith))
        );
        if (!asset)
          throw new Error(
            `Can't find any release asset for GitLab project ${projectId} with filter *${endsWith}`
          );
        return {
          props: {
            ssg: {
              projectId,
              initialDownloadName: asset.name,
              initialDownloadLink: asset.url,
              initialReleasesLink: res[0]._links.self.replace(/\/[^\/]*$/, ""),
              endsWith,
              ...(doesntEndWith ? { doesntEndWith } : {})
            }
          },
          // Revalidate every hour
          revalidate: 3600
        };
      });
}
