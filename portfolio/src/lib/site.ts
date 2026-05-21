export const siteConfig = {
  name: "Ejajul Ansari",
  title: "Ejajul Ansari | AI Backend Developer & IBM Trainer",
  description:
    "I am Ejajul Ansari, an AI backend developer, predictive analyst, cloud computing trainer, and full stack engineer from Delhi.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ejajkhan613.github.io",
  locale: "en_US",
  email: "ejajul.masai@gmail.com",
  phone: "+91 9891640628",
  github: "https://github.com/Ejajkhan613",
  linkedin: "https://www.linkedin.com/in/ejajul-ansari-39168b242",
  instagram: "https://www.instagram.com/ejajkhan613",
  x: "https://x.com/ejajkhan613",
  resume: "/Ejajul_Ansari_Backend_Developer_Resume.pdf",
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
