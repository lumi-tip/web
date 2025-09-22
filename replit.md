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
- **Routing**: Wouter for lightweight client-side routing
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