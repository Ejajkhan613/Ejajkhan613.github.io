# Ejajul Ansari Portfolio

Next.js App Router portfolio with Tailwind CSS, SSR pages, MongoDB-backed blog publishing, admin login/signup, and resource uploads stored in `resources/`.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Set `MONGODB_URI`, `MONGODB_DB`, `ADMIN_SIGNUP_CODE`, and `NEXT_PUBLIC_SITE_URL`.
3. Run the development server:

```bash
npm run dev
```

## Main Routes

- `/` - SSR portfolio home
- `/projects` - project case studies
- `/blog` and `/blog/[slug]` - MongoDB-backed blog
- `/resources` - resource library
- `/admin` - protected dashboard with content analytics
- `/admin/blogs` - blog list, edit, delete, and publishing management
- `/admin/blogs/new` - create blog posts with optional cover image upload
- `/admin/resources` - resource list, edit, replace, download, and delete management
- `/admin/resources/new` - upload resources
- `/admin/profile` - update admin profile details and password
- `/admin/login` and `/admin/signup` - MongoDB-backed admin authentication
- `/api/blogs` - blog JSON API
- `/api/resources` - resource JSON/upload API

## Notes

If MongoDB is not configured, the public blog/resources pages render starter content so the UI stays reviewable. Admin signup, login, publishing, and uploads require `MONGODB_URI`.

The first admin account can be created without an invite code. After one admin user exists, signup requires `ADMIN_SIGNUP_CODE`.
