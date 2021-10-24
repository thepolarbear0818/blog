import { GetStaticProps } from "next";
import { useSSG } from "nextra/ssg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import NextLink from "next/link";

export function WikiEntry() {
  const { wikiContent } = useSSG();

  return (
    <p className="root">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: (props) => {
            let href = props.href;

            [
              "https://librewolf-community.gitlab.io",
              "https://librewolf.net"
            ].forEach((url) => {
              if (href.startsWith(url)) href = href.replace(url, "");
            });

            return href.startsWith("/") ? (
              <NextLink href={href} passHref>
                <a {...props} />
              </NextLink>
            ) : (
              <a {...props} />
            );
          }
        }}
      >
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

export function getStaticWikiEntryProps(slug: string): GetStaticProps {
  return () =>
    fetch(`https://gitlab.com/api/v4/projects/13852721/wikis/${slug}`)
      .then((res) => res.json())
      .then((res) => res.content)
      .then((content) => ({
        props: {
          ssg: {
            wikiContent: content
          }
        },
        // Revalidate every hour
        revalidate: 3600
      }));
}
