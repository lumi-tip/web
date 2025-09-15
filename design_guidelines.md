# LearnPack Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Notion and Linear for productivity tools, with modern SaaS landing page aesthetics. This approach suits LearnPack's developer-focused utility nature while maintaining visual appeal for conversion.

## Core Design Elements

### A. Color Palette
**Dark Theme Primary**:
- Background: 222 47% 11% (deep charcoal)
- Surface: 220 13% 18% (elevated cards)
- Primary brand: 268 83% 58% (vibrant purple)
- Text primary: 210 40% 98% (near white)
- Text secondary: 215 20% 65% (muted gray)

**Accent & Gradients**:
- Success green: 142 71% 45%
- Subtle gradients from primary purple to deeper violet for hero backgrounds
- Card overlays with purple/blue gradient hints

### B. Typography
**Google Fonts via CDN**:
- Primary: Inter (headings, UI) - weights 400, 500, 600, 700
- Secondary: JetBrains Mono (code snippets, package names) - weight 400
- Hero headlines: 3.5rem (56px), bold
- Section headers: 2rem (32px), semibold
- Body text: 1rem (16px), regular

### C. Layout System
**Tailwind Spacing Primitives**: 4, 8, 12, 16, 24
- Container max-width: 7xl (1280px)
- Section padding: py-24, px-4
- Component spacing: gap-8, gap-12
- Card padding: p-8

### D. Component Library

**Navigation**: Sticky header with logo, minimal nav links, and CTA button
**Hero Section**: Large textarea (h-48) with purple gradient backdrop, floating UI elements
**Feature Cards**: Glass-morphism effect with subtle borders and hover states
**Statistics Display**: Large numbers with animated counters and contextual descriptions
**Process Steps**: Numbered circles with connecting lines and descriptive content
**Toast Notifications**: Slide-in from top-right with success/error states

**Critical Constraint**: Maximum 6 sections total - Hero, Value Props, How It Works, Proof, Use Cases, Final CTA. Each section must drive conversion.

## Images
**Hero Background**: Abstract geometric pattern or subtle code-inspired texture overlay behind the package creation form. Not a large hero image, but a textured background.
**Feature Icons**: Use Heroicons via CDN for consistency - code, lightning bolt, shield icons for the three main value propositions.
**Process Illustrations**: Simple line drawings or icons representing the three-step workflow.

## Key Design Principles
1. **Developer-First Aesthetics**: Clean, terminal-inspired design with subtle technical elements
2. **Conversion-Focused Layout**: Each section builds urgency and value proposition
3. **Performance-Optimized**: Minimal animations, optimized images, efficient CSS
4. **Accessibility**: High contrast ratios, proper ARIA labels, keyboard navigation
5. **Cohesive Branding**: Consistent purple theme throughout with strategic accent usage