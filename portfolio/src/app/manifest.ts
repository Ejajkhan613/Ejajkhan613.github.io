import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ejajul Ansari Portfolio",
    short_name: "Ejajul",
    description:
      "My portfolio as an AI backend developer, predictive analyst, and IBM trainer.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a08",
    theme_color: "#bef264",
    icons: [
      {
        src: "/assets/myImage.JPG",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
