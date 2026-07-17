# AGENTS.md — Fontaine

Instructions for any AI coding agent (Claude Code, Cursor, AI Studio, Copilot,
etc.) working in this repository. Read this file fully before making any
change. If something here conflicts with a prompt given to you in-chat, this
file is the source of truth for standing project rules — chat instructions
override it only for the specific task at hand.

## Framework version warning

<!-- BEGIN:nextjs-agent-rules -->
This project pins specific major versions of Next.js and React (see Tech
Stack below). APIs, conventions, and file structure may differ from what you
recall from training data. Before writing any code that touches
routing, data fetching, caching, or Server Actions, check
`node_modules/next/dist/docs/` (or the installed package's own
CHANGELOG/README if that path doesn't exist in this install) for the actual
current API. Heed any deprecation notices you find there. If local docs
aren't available, say so explicitly rather than silently falling back to
possibly-outdated assumptions.
<!-- END:nextjs-agent-rules -->

## What this project is

Fontaine is a production-ready e-commerce web app for a premium herbal
medicine brand. **Critical product fact:** Fontaine sells RAW, WHOLE DRIED
HERBS in premium retail packaging only (e.g. a pouch of dried borage flower,
a box of dried thyme). It does NOT sell processed remedies — no pills,
capsules, tinctures, extracts, powders, blends, or supplements. Every
product is a single raw dried herb. This affects the data model (no
multi-ingredient relations needed), product copy (no "dosage" language, use
"brewing"/"steeping" instead), and imagery guidance (packaging + herb
texture, never medicine bottles or capsule blister packs).

## Tech stack

- Next.js 16, App Router
- React 19
- TypeScript — strict mode, `any` is never allowed
- Tailwind CSS v4 (no CSS Modules)
- Prisma ORM + PostgreSQL
- Kinde Authentication
- React Hook Form + Zod
- shadcn/ui, Lucide React, Framer Motion
- TanStack Query — client-side server-state only
- Zustand — global UI state only, never server data

## Architecture — read before creating any file

Feature-based structure:

```
src/
  app/
    (storefront)/   <- customer routes: landing, shop, product, cart,
                        checkout, profile, orders, wishlist
    (admin)/        <- admin dashboard routes, separate layout
  features/
    products/
    cart/
    checkout/
    auth/
    orders/
    categories/
    wishlist/
    reviews/
  components/       <- shared/reusable UI only, never feature-specific
  lib/
  services/
  hooks/
  types/
prisma/
```

- `(storefront)` and `(admin)` are separate Route Groups with separate
  layouts. They only share truly global providers (auth, query client,
  toaster). Do not merge their layouts for convenience.
- Feature-specific components, hooks, services, and validation schemas live
  inside that feature's folder (`features/<name>/components`,
  `features/<name>/lib`, etc.), not in the shared `components/` folder.
- Before adding a new component, check whether an equivalent already exists
  in `components/` or in another feature. Reuse or extend before creating
  new.

## Non-negotiable coding rules

1. Strict TypeScript everywhere. Never use `any`.
2. Server Components by default. Only use a Client Component when you
   genuinely need interactivity, hooks, or browser APIs — mark it with
   `"use client"` at the top and keep it as small/leaf as possible.
3. All mutations go through Server Actions.
4. Every Server Action must validate its input with a dedicated Zod schema
   (co-located in the feature's `lib/validations` or `schemas` file) BEFORE
   touching Prisma. Never trust client input directly.
5. No duplicated logic — extract shared code into `lib/` or `services/`.
   Prefer composition over inheritance.
6. Keep components small and single-purpose.
7. Business logic stays out of UI components — put it in `services/` or a
   feature's own `lib/`.
8. Never rewrite existing working code unless the task requires it. Extend,
   don't replace, unless explicitly asked to refactor.

## State & data-fetching rules

- Server Components handle initial data fetching for read-heavy pages
  (Shop, Product Details, Order History).
- TanStack Query handles client-side reads that need re-fetching or
  filtering without a full navigation (Shop filters, live search, cart
  contents).
- Zustand is for pure UI state only (drawer/modal open state, mobile nav
  toggle). Never put server-fetched data (products, cart, orders) into
  Zustand.
- For mutations with immediate visual feedback (Add to Cart, Add to
  Wishlist, quantity change), use React 19's `useOptimistic` wrapped in
  `startTransition`, and always let it revert to server truth once the
  Server Action resolves. Watch for stale closures in async handlers.
- `React.memo` without `useCallback` does nothing useful — function
  references are recreated every render. If the React Compiler
  (`babel-plugin-react-compiler`) is enabled in this project, prefer letting
  it handle memoization over manual `memo`/`useCallback`/`useMemo`.

## Caching & revalidation

- Product Details and Shop listing pages: ISR with tag-based revalidation
  (`revalidateTag`), invalidated whenever an admin creates/edits/deletes a
  product.
- Category pages: same tag-based ISR approach.
- Cart, Checkout, Order History, Wishlist: always dynamic, no caching —
  this is user-specific data.
- Match cache lifetime to data volatility. Don't cache anything
  user-specific or anything that changes on every request.

## Authentication & authorization

- Kinde Authentication for Login, Register, Logout, Session Management.
- Two roles: `Admin` and `Customer`.
- Auth logic is isolated inside the `auth` feature.
- `(admin)` routes must be protected at the middleware/layout level — never
  rely on hiding admin UI as the only protection.
- Guest users can use Cart and Wishlist without an account (persisted
  client-side via cookie/localStorage in a Client Component). On
  login/registration, merge the guest cart/wishlist into the user's
  database-backed records, de-duplicated by product id.

## Database

- Prisma + PostgreSQL, normalized schema, proper relations/indexes/enums.
- Core entities: User, Product, Category, ProductImage, Review, Order,
  OrderItem, Coupon, Wishlist, Address.
- `Product` represents a single raw herb — fields like `originRegion`,
  `harvestNotes`, `usageInstructions` belong here, not an "ingredients"
  relation.
- Package size/weight variants (e.g. 50g / 100g / 250g) should be modeled
  explicitly — either fields on `Product` or a `ProductVariant` table if a
  herb is sold in multiple sizes.
- RLS-equivalent checks: since this stack uses Prisma/Postgres directly (not
  Supabase), enforce row-level authorization in the Server Action / service
  layer itself — never assume the client-sent user id is trustworthy.

## File & image storage

- Product images are uploaded by admins and stored via the project's chosen
  storage provider (see the project's current `.env`/config for which one —
  do not assume a provider). Only store the resulting URL in
  `ProductImage`; never store binary data in PostgreSQL.
- Uploads happen through a Server Action that returns the hosted URL.

## Payments

- No payment gateway may be hardcoded into Checkout UI or order logic.
- All payment logic goes through a `PaymentProvider` interface in
  `features/checkout/services` (e.g. `createPaymentIntent()`,
  `confirmPayment()`, `handleWebhook()`).
- Until a real gateway is wired in, use the `MockPaymentProvider`
  implementation so the full checkout flow (order creation, status
  transitions, success/failure pages) stays testable end-to-end.
- Order status must model realistic states: Pending, Paid, Failed, Refunded,
  Shipped, Delivered, Cancelled.
- When a real gateway (e.g. Stripe) is added, it should be a drop-in
  replacement behind the same interface — no changes to UI components or
  order Server Actions.

## Localization, currency, direction

- LTR only — do not add RTL styles or logic.
- Currency is Euro (EUR). Format with `Intl.NumberFormat('...', { style:
  'currency', currency: 'EUR' })`. Store monetary values in the smallest
  unit (cents) in the database; format to EUR only at the display layer.

## SEO

- Use the Next.js Metadata API on every storefront page (title, description,
  Open Graph, Twitter card).
- Maintain `sitemap.ts` and `robots.ts`.
- Product pages need dynamic metadata generated from product data.

## Content & compliance

- Since Fontaine sells raw herbs, any product copy you write or generate
  (benefits, usage text) must avoid definitive medical/therapeutic claims
  (no "cures", "treats disease X"). Frame benefits as traditional/historical
  use, not medical guarantees. This applies to placeholder/seed data too.

## Styling

- Tailwind CSS only, no CSS Modules.
- Use shadcn/ui components where appropriate, restyled to match the
  project's design tokens (colors, typography, spacing, radius) — do not
  invent a new palette or override established tokens without being asked.
- Design tokens should live in central place (`globals.css`) that all features pull from.

## When implementing a design (Stitch exports or similar)

1. Analyze the design and identify which components already exist vs. what's
   net-new.
2. Implement pixel-perfect UI using the established design tokens — don't
   improvise colors/spacing.
3. Place new components in the correct feature folder or shared
   `components/`, following the architecture above.
4. Connect UI to the existing architecture (Server Components, Server
   Actions, TanStack Query, Zustand) per the rules above.
5. Never break existing code from a previous stage.
6. State clearly where every new file was placed and why.
7. If a design detail is missing or ambiguous, say so and flag it for
   confirmation — do not silently guess and move on.

## General agent behavior

- Do not generate placeholder architecture that won't actually be used.
- If you believe a better architectural approach exists than what's
  documented here, explain the tradeoff before implementing it — don't
  silently deviate from this file.
- Favor small, reviewable changes over large rewrites.
- When a change touches multiple features, call out each affected feature
  explicitly rather than bundling everything into one vague summary.
