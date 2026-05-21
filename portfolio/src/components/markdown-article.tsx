import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownArticle({ content }: { content: string }) {
  return (
    <div className="prose-portfolio">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <Link
              href={href ?? "#"}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noreferrer" : undefined}
            >
              {children}
            </Link>
          ),
          img: ({ src, alt }) => {
            const imageSrc = typeof src === "string" ? src : "";

            return imageSrc ? (
              <span className="relative my-8 block h-80 overflow-hidden rounded-[1.5rem] border border-black/10 dark:border-white/10">
                <Image
                  src={imageSrc}
                  alt={alt ?? ""}
                  fill
                  sizes="(min-width: 768px) 760px, 100vw"
                  className="object-cover"
                />
              </span>
            ) : null;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
