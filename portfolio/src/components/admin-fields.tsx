import type { BlogPost, ResourceRecord } from "@/lib/types";

export const adminInputClass =
  "h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm font-semibold text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-lime-300 dark:focus:ring-lime-300/10";

export const adminAreaClass =
  "min-h-36 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold leading-7 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:border-lime-300 dark:focus:ring-lime-300/10";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
};

export function AdminField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
}: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className={adminInputClass}
      />
    </label>
  );
}

export function BlogFormFields({ post }: { post?: BlogPost }) {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <AdminField
          label="Title"
          name="title"
          required
          placeholder="API design note"
          defaultValue={post?.title}
        />
        <AdminField
          label="Slug"
          name="slug"
          placeholder="api-design-note"
          defaultValue={post?.slug}
        />
      </div>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          Excerpt
        </span>
        <textarea
          name="excerpt"
          required
          placeholder="Short search-friendly summary"
          defaultValue={post?.excerpt}
          className={adminAreaClass}
        />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <AdminField
          label="Cover Image URL"
          name="coverImage"
          placeholder="/assets/photos/server.jpg"
          defaultValue={post?.coverImage}
        />
        <AdminField
          label="Tags"
          name="tags"
          placeholder="Node.js, MongoDB"
          defaultValue={post?.tags.join(", ")}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <AdminField
          label="Cover Image Title"
          name="coverImageTitle"
          placeholder="Backend architecture cover"
        />
        <label className="grid gap-2">
          <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            Upload Cover Image
          </span>
          <input
            name="coverImageFile"
            type="file"
            accept="image/*"
            className={adminInputClass}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <AdminField label="SEO Title" name="seoTitle" defaultValue={post?.seoTitle} />
        <AdminField
          label="SEO Description"
          name="seoDescription"
          defaultValue={post?.seoDescription}
        />
      </div>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          Status
        </span>
        <select
          name="status"
          className={adminInputClass}
          defaultValue={post?.status ?? "published"}
        >
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          Content
        </span>
        <textarea
          name="content"
          required
          placeholder="# Title"
          defaultValue={post?.content}
          className={`${adminAreaClass} min-h-80 font-mono`}
        />
      </label>
    </>
  );
}

export function ResourceFormFields({ resource }: { resource?: ResourceRecord }) {
  return (
    <>
      <AdminField
        label="Title"
        name="title"
        required
        placeholder="Architecture diagram"
        defaultValue={resource?.title}
      />
      <div className="grid gap-5 md:grid-cols-2">
        <AdminField
          label="Category"
          name="category"
          placeholder="Docs"
          defaultValue={resource?.category}
        />
        <AdminField
          label="Tags"
          name="tags"
          placeholder="PDF, Diagram"
          defaultValue={resource?.tags.join(", ")}
        />
      </div>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          Description
        </span>
        <textarea
          name="description"
          placeholder="What this file contains"
          defaultValue={resource?.description}
          className={adminAreaClass}
        />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          File
        </span>
        <input
          name="file"
          type="file"
          required={!resource}
          className={adminInputClass}
        />
      </label>
    </>
  );
}
