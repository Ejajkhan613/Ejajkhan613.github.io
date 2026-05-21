type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const inverted = tone === "inverted";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={
          inverted
            ? "text-xs font-black uppercase tracking-[0.22em] text-lime-200"
            : "text-xs font-black uppercase tracking-[0.22em] text-teal-700 dark:text-lime-300"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          inverted
            ? "mt-3 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl"
            : "mt-3 text-balance text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            inverted
              ? "mt-4 text-pretty text-base leading-8 text-neutral-300"
              : "mt-4 text-pretty text-base leading-8 text-neutral-600 dark:text-neutral-300"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
