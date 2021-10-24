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
    endsWith
  } = useSSG();

  const [downloadName, setDownloadName] = useState(initialDownloadName);
  const [downloadLink, setDownloadLink] = useState(initialDownloadLink);
  const [releasesLink, setReleasesLink] = useState(initialReleasesLink);

  useEffect(() => {
    fetch(`https://gitlab.com/api/v4/projects/${projectId}/releases`)
      .then((res) => res.json())
      .then((res) => {
        const asset = res[0].assets.links.find((asset) =>
          asset.name.endsWith(endsWith)
        );
        setDownloadLink(asset.url);
        setDownloadName(asset.name);
        setReleasesLink(res[0]._links.self.replace(/\/[^\/]*$/, ""));
      })
      .catch();
  }, [endsWith, projectId]);

  return (
    <p>
      <Button primary href={downloadLink} margin={0}>
        Download <small>{downloadName}</small>
      </Button>
      <a href={releasesLink}>View all versions and release notes</a>
      <style jsx>{`
        a {
          margin-left: 15px;
        }
      `}</style>
    </p>
  );
}

export function getStaticDownloadButtonProps(
  projectId: string,
  endsWith: string
): GetStaticProps {
  return () =>
    fetch(`https://gitlab.com/api/v4/projects/${projectId}/releases`)
      .then((res) => res.json())
      .then((res) => {
        const asset = res[0].assets.links.find(
          (asset: { name: string; url: string }) =>
            asset.name.endsWith(endsWith)
        );
        return {
          props: {
            ssg: {
              projectId,
              initialDownloadName: asset.name,
              initialDownloadLink: asset.url,
              initialReleasesLink: res[0]._links.self.replace(/\/[^\/]*$/, ""),
              endsWith
            }
          },
          // Revalidate every hour
          revalidate: 3600
        };
      });
}
