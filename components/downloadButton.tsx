import { GetStaticProps } from "next";
import { useSSG } from "nextra/ssg";
import { useEffect, useState } from "react";
import Button from "./button";

export type Download = {
  id: string;
  name: string;
  url: string;
  otherDownloadsUrl?: string;
  otherDownloadsString?: string;
  data?: any;
  sha256?: string;
};
export type DownloadPromise = {
  id: string;
  getDownload: () => Promise<Download>;
};

export function DownloadButton({
  downloadPromise
}: {
  downloadPromise: DownloadPromise;
}) {
  const { initialDownloads } = useSSG();
  const [download, setDownload] = useState<Download>(
    initialDownloads[downloadPromise.id]
  );

  useEffect(() => {
    downloadPromise
      .getDownload()
      .then(setDownload)
      .catch(() => {});
  }, [downloadPromise]);

  return (
    <>
      <p>
        <Button primary href={download.url} margin={0}>
          Download <small>{download.name}</small>
        </Button>
        {download.otherDownloadsUrl && (
          <a href={download.otherDownloadsUrl}>
            {download.otherDownloadsString || "View all versions"}
          </a>
        )}

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
      {download.sha256 && (
        <small>
          SHA256: <code>{download.sha256}</code>
        </small>
      )}
    </>
  );
}

export function getStaticDownloadButtonProps(
  downloadPromises: DownloadPromise[]
): GetStaticProps {
  return async () => {
    const initialDownloads: Record<string, Download> = {};
    await Promise.all(
      downloadPromises.map(async (downloadPromise) => {
        initialDownloads[downloadPromise.id] =
          await downloadPromise.getDownload();
      })
    );
    Object.values(initialDownloads).forEach((download) => {
      Object.keys(download).forEach((key) => {
        if (!download[key]) delete download[key];
      });
    });
    return {
      props: {
        ssg: {
          initialDownloads
        }
      },
      // Revalidate every hour
      revalidate: 3600
    };
  };
}
