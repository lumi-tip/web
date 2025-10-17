# replit.md

## Overview

LearnPack is a modern educational technology platform that enables users to create interactive learning packages in minutes. The application allows users to transform ideas into structured learning experiences that can be exported to various formats (SCORM, ePub, iFrame, etc.). Built as a full-stack web application with a focus on AI-powered content generation, the platform targets educators, trainers, and organizations looking to streamline their learning content creation process.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with a custom design system featuring dark theme as default
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interfaces
- **Routing**: Wouter for lightweight client-side routing with the following pages:
  - `/` - Homepage with hero, social proof, value props, video demo, skills showcase, how it works, stats, and final CTA
  - `/pricing` - Dedicated pricing page with BreathCode API-powered pricing tables
  - `/our-mission` - Company mission statement page
  - `/terms-and-conditions` - Terms and conditions legal page
  - `/privacy-policy` - Privacy policy legal page
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with `/api` prefix routing
- **Development**: Hot reload with Vite integration and custom error handling middleware

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition with Zod validation integration
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Design System
- **Color Palette**: Dark theme primary with deep charcoal background and vibrant purple accents
- **Typography**: Inter for UI elements, JetBrains Mono for code/technical content
- **Component System**: Glass-morphism effects, hover states, and consistent spacing using Tailwind primitives
- **Layout**: Container-based responsive design with 7xl max-width (1280px)

### Content Management
- **Static Content**: Markdown files served statically for legal pages (terms, privacy policy)
- **Asset Handling**: Organized asset management with dedicated attached_assets directory
- **SEO**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data

### Pricing System
- **API Integration**: Full BreathCode API integration for dynamic pricing tables at `/pricing` (public page, no authentication required)
- **Authentication**: Token-based authentication via `VITE_BREATHCODE_API_TOKEN` environment variable
- **Academy Configuration**: Configurable via `VITE_BREATHCODE_ACADEMY_ID` environment variable (defaults to 54)
- **API Endpoints**:
  - Plans: `GET /v1/payments/academy/plan?academy={ACADEMY_ID}`
  - Service Items: `GET /v2/payments/serviceitem?plan={PLAN_SLUG}&country_code={COUNTRY}`
  - Coupons: `GET /v2/payments/coupon?plan={PLAN_SLUG}`
- **Data Processing**: Template variable replacement system for localized content ({how_many}, {unit_price}, {service_title})
- **Feature Inheritance**: Tiered plan system (Learner → Teacher → School) with automatic feature inheritance from cheaper plans
- **Coupon Support**: Auto-applied coupons with strikethrough pricing and discount badges
- **Bilingual Support**: JSON configuration files (plan-features.en.json, plan-features.es.json) for English and Spanish locales
- **Graceful Degradation**: Features requiring missing service data are automatically skipped to prevent malformed text
- **UI/UX**: Monthly/Annual billing toggle, responsive 3-column grid, "Most Popular" badge on middle tier

### Authentication & Redirect Flow
- **Platform URL Configuration**: 
  - Authentication/signup flows use `VITE_LEARNPACK_PLATFORM` environment variable (defaults to https://app.learnpack.co)
  - Creator flows use `VITE_LEARNPACK_CREATOR` environment variable (defaults to https://app.learnpack.co)
- **Login/Signup Redirects**:
  - Sign In (Header): `{PLATFORM}/login`
  - Try Free (Header): `{PLATFORM}/signup`
  - Start Creating (Final CTA): `{PLATFORM}/signup`
  - Hero Form Submit: `{CREATOR}/creator?description={topic}&purpose={purpose}&new=true`
  - Docs (Header): `https://docs.learnpack.co/`
- **Plan Checkout Flow**:
  - When user selects a plan, constructs checkout path: `/plan-checkout?plan={slug}&name={encoded_title}&frequency={monthly|annual}`
  - Base64 encodes the checkout path
  - URL-encodes the base64 string for safe query parameter usage
  - Redirects to: `{PLATFORM}/login?next={url_encoded_base64_path}`
  - Platform should: URL-decode → Base64-decode → Parse checkout path

### URL Redirect System
- **Configuration File**: `client/public/redirects.yml` - YAML-based redirect rules
- **Implementation**: Automatic redirect handling on route changes via `RedirectHandler` component
- **Features**:
  - YAML configuration for easy redirect management
  - Query string parameter preservation (all params automatically carried over)
  - Support for both relative paths (`/pricing`) and absolute URLs (`https://example.com`)
  - Path normalization with trailing slash handling
  - SPA-friendly internal navigation (no page reload for relative redirects)
  - Full page navigation for external/absolute URLs
- **Configuration Format**:
  ```yaml
  redirects:
    - from: /old-path
      to: /new-path
    - from: /external-link
      to: https://example.com/page
  ```
- **Query String Handling**: 
  - Relative redirects append query params: `/old?x=1` → `/new?x=1`
  - Absolute redirects merge params (destination params take precedence)
- **Files**: `client/src/lib/redirects.ts`, `client/src/components/RedirectHandler.tsx`

### Internationalization & Translation System
- **Framework**: react-i18next with i18next-http-backend for dynamic loading
- **Supported Languages**: English (en) and Spanish (es) with English as fallback
- **Language Detection**: Automatic detection via query params (`?lang=es`), localStorage, browser settings, or HTML tag
- **Translation Files Structure**:
  - General translations: `client/public/locales/{lang}/common.json`
  - Pricing features: `client/public/plan-features.{lang}.json`
- **Dynamic Variables**: Template variable system supports `{how_many}`, `{unit_price}`, `{{year}}` replacements
- **Contribution Guide**: `CONTRIBUTE.md` provides detailed instructions for translating content via GitHub PRs
- **Testing**: Language can be forced via `?lang=XX` query parameter for testing
- **Files**: `client/src/i18n/index.ts`, `client/public/locales/`, `CONTRIBUTE.md`

### Development Workflow
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Strict TypeScript configuration with path aliases and shared types
- **Error Handling**: Custom error overlay for development with comprehensive logging

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter and JetBrains Mono via CDN

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form management with validation
- **Wouter**: Lightweight routing solution

### Database
- **PostgreSQL**: Primary database (configured via Drizzle but may need Postgres setup)
- **Neon Database**: Serverless PostgreSQL connection driver

### Analytics and Tracking
- **Custom Analytics**: Built-in event tracking system with stub implementations for development
- **Global Tracking**: Window-based analytics integration ready for production analytics services

### Build and Deployment
- **Vite**: Frontend build system with plugin ecosystem
- **esbuild**: Backend compilation for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions