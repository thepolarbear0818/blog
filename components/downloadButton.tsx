import { GetStaticProps } from "next";
import { useSSG } from "nextra/ssg";
import React from "react";
import Button from "./button";

export function DownloadButton() {
  const { downloadLink, downloadName, releasesLink } = useSSG();
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

export const getStaticDownloadButtonProps: (
  projectId: string,
  linkMatch: (link: string) => boolean
) => GetStaticProps = (projectId, linkMatch) => (ctx) =>
  fetch(`https://gitlab.com/api/v4/projects/${projectId}/releases`)
    .then((res) => res.json())
    .then((res) => {
      const asset = res[0].assets.links.find(linkMatch);
      return {
        props: {
          ssg: {
            downloadName: asset.name,
            downloadLink: asset.url,
            releasesLink: res[0]._links.self.replace(/\/[^\/]*$/, ""),
          },
        },
        // Revalidate every hour
        revalidate: 3600,
      };
    });
