import { GetStaticProps } from "next";
import { useSSG } from "nextra/ssg";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export function WikiEntry() {
  const { wikiContent } = useSSG();

  return (
    <p className="root">
      {/* TODO: Custom <a> component which uses nexts.js's <Link> */}
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {wikiContent}
      </ReactMarkdown>
      <style jsx>{`
        // Makes sure to scroll to the right point on the page
        .root :global(h2) :global(a),
        .root :global(h3) :global(a[name^="q-"]),
        .root :global(h4) :global(a) {
          margin-top: 0;
          padding-top: 80px;
        }
      `}</style>
    </p>
  );
}

export const getStaticWikiEntryProps: (slug: string) => GetStaticProps =
  (slug) => (ctx) =>
    fetch(`https://gitlab.com/api/v4/projects/13852721/wikis/${slug}`)
      .then((res) => res.json())
      .then((res) => res.content)
      .then((content) => {
        return {
          props: {
            ssg: {
              wikiContent: content,
            },
          },
          // Revalidate every hour
          revalidate: 3600,
        };
      });
