# LearnPack replit.md

## Overview

LearnPack is an educational technology platform designed to help users create interactive learning packages rapidly. It supports the transformation of ideas into structured learning experiences, exportable to formats like SCORM, ePub, and iFrame. This full-stack web application leverages AI for content generation, targeting educators, trainers, and organizations aiming to streamline content creation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React with TypeScript (Vite).
- **Styling**: Tailwind CSS, custom design system, dark theme default.
- **UI Components**: Radix UI primitives with shadcn/ui.
- **Routing**: Wouter for client-side routing, Supabase-inspired multi-level navigation.
- **State Management**: TanStack Query for server state.
- **Forms**: React Hook Form with Zod validation.
- **SEO**: `react-helmet-async` for dynamic meta tags, localized SEO, and JSON-LD schema.
- **Internationalization**: `react-i18next` for English and Spanish, dynamic loading, and namespace management.
- **Redirects**: YAML-based configuration for automatic URL redirects with query parameter preservation.

### Backend
- **Runtime**: Node.js with Express.js.
- **Language**: TypeScript with ES modules.
- **API**: RESTful API, `/api` prefix.
- **Database ORM**: Drizzle ORM for type-safe operations, Drizzle Kit for migrations.
- **Authentication**: BreathCode API-based for admin access, token storage in localStorage (to be migrated to HttpOnly cookies).
- **Session Management**: Express sessions with PostgreSQL store.

### Design System
- **Color Palette**: Dark theme with charcoal background and purple accents.
- **Typography**: Inter (UI), JetBrains Mono (code).
- **Components**: Glass-morphism effects, consistent spacing.
- **Layout**: Container-based responsive design (7xl max-width).

### Feature Specifications
- **Navigation**: Multi-level header with dropdowns (Product, About), direct links.
  - **Product Dropdown**: 2-column layout with Features (left) and Use Cases (right), Platform Overview at top, "LearnPack vs Competition" at bottom with separator
  - **About Dropdown**: Single column with nested Company submenu (Mission, Vision, Timeline), Blog/Insights, and Contact
  - **Hover Bridges**: Invisible divs between buttons and dropdowns prevent gap issues during mouse movement
  - **Accessibility**: Full keyboard navigation (Tab + Enter/Space), touch support for mobile
- **Pricing System**: Full BreathCode API integration for dynamic pricing, tiered plans, coupon support, and bilingual configuration.
- **Authentication & Redirect Flow**: Configurable platform URLs for login/signup, creator flows, and plan checkout redirects with Base64 encoding.
- **Admin System**: Protected routes, `AuthContext`, `ProtectedRoute`, and `Login` components for admin access control with "webmaster" capability.

## External Dependencies

- **UI and Styling**: Radix UI, Tailwind CSS, Lucide React, Google Fonts.
- **Development Tools**: Drizzle Kit, TanStack Query, React Hook Form, Wouter.
- **Database**: PostgreSQL, Neon Database.
- **API Integration**: BreathCode API (for pricing and authentication).
- **Internationalization**: `react-i18next`, `i18next-http-backend`.
- **Build Tools**: Vite, esbuild, PostCSS.
- **Session Store**: `connect-pg-simple`.