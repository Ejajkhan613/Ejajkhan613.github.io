import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { MarkdownArticle } from "@/components/markdown-article";
import { getPostBySlug, getPublishedPosts } from "@/lib/blogs";
import { absoluteUrl, siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.name],
      images: post.coverImage
        ? [
            {
              url: absoluteUrl(post.coverImage),
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      images: post.coverImage ? [absoluteUrl(post.coverImage)] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const date = post.publishedAt ?? post.createdAt;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt ?? post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: post.coverImage ? absoluteUrl(post.coverImage) : undefined,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0">
            <Image
              src={post.coverImage ?? "/assets/photos/server.jpg"}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,10,8,0.95),rgba(9,10,8,0.62))]" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-black text-lime-200 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Blog
            </Link>
            <div className="mt-8 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-lime-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-tight sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-9 text-neutral-200">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-bold text-neutral-300">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" />
                {new Intl.DateTimeFormat("en", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(date))}
              </span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <MarkdownArticle content={post.content} />
          </div>
        </section>
      </article>
    </>
  );
}
