# [harrisonliddiard.com](https://harrisonliddiard.com)

## Deployment notes (for me)

Site is configured in Next.js config for static export. It's deployed on Amazon S3 using its static website hosting feature. The bucket is "harrisonliddiard.com".

The bucket MUST be configured using the ACL (Access Control List) policy for public read.

The assets uploaded to S3 SHOULD NOT be compressed because Cloudflare sits in front of the S3 bucket and does its own compression and caching.

## Todos

- [ ] Improve CSS: It's currently split between Tailwind and a standalone stylesheet which isn't ideal. There's also some `float` holdover from previous codebase migrations that should ideally use CSS grid.
