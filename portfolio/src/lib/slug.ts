export function createSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function splitTags(input: FormDataEntryValue | null) {
  if (!input) {
    return [];
  }

  return input
    .toString()
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function readingMinutes(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
