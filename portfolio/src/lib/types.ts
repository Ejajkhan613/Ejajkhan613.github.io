export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  outcome: string;
  tech: string[];
  image: string;
  imageAlt: string;
  github?: string;
  live?: string;
};

export type SkillGroup = {
  title: string;
  focus: string;
  skills: string[];
};

export type Service = {
  title: string;
  description: string;
  proof: string;
};

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  points: string[];
};

export type BlogStatus = "draft" | "published";

export type BlogPost = {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
  status: BlogStatus;
  seoTitle?: string;
  seoDescription?: string;
  readingMinutes: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
};

export type ResourceRecord = {
  _id?: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  originalName: string;
  storedName: string;
  mimeType: string;
  size: number;
  createdAt: string;
  downloadUrl: string;
};

export type AdminUser = {
  _id: string;
  name: string;
  email: string;
  role: "admin";
  createdAt: string;
  updatedAt: string;
};
