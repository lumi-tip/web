# LearnPack Website

> Turn ideas into interactive learning packages in minutes

The official marketing website for LearnPack - an AI-powered platform that enables educators, trainers, and organizations to create interactive learning experiences in minutes.

## 🚀 Overview

LearnPack is a modern educational technology platform that transforms expertise into engaging, interactive learning experiences. This repository contains the marketing website built with React, TypeScript, and Vite.

**Live Website:** [learnpack.co](https://learnpack.co)

## ✨ Features

- **🎨 Modern Design System**: Dark theme with LearnPack blue branding and glass-morphism effects
- **🌍 Internationalization**: Full English and Spanish support with easy translation workflow
- **💳 Dynamic Pricing**: Real-time pricing from BreathCode API with auto-applied coupons
- **⚡ Performance Optimized**: Built for speed with lazy loading and SEO best practices
- **📱 Responsive**: Mobile-first design that works on all devices
- **🎬 Interactive Demos**: Video showcases and animated backgrounds

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for blazing-fast builds
- **Tailwind CSS** for styling
- **Radix UI** + **shadcn/ui** for accessible components
- **Wouter** for lightweight routing
- **TanStack Query** for server state management
- **react-i18next** for internationalization

### Backend
- **Node.js** with **Express**
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations

### Developer Experience
- Hot Module Replacement (HMR)
- TypeScript strict mode
- Path aliases for clean imports
- Automated error handling

## 🌍 Internationalization

This website supports multiple languages with an easy contribution workflow:

- **Current Languages**: English (en), Spanish (es)
- **Translation Files**: JSON-based translation system
- **Testing**: Force language with `?lang=es` query parameter

**Want to contribute translations?** See our [Translation Contribution Guide](CONTRIBUTE.md) 📝

## 📂 Project Structure

```
learnpack/
├── client/                    # Frontend application
│   ├── public/
│   │   ├── locales/          # Translation files
│   │   │   ├── en/          # English translations
│   │   │   └── es/          # Spanish translations
│   │   ├── plan-features.en.json
│   │   ├── plan-features.es.json
│   │   └── redirects.yml     # URL redirect configuration
│   └── src/
│       ├── components/       # React components
│       ├── pages/           # Page components
│       ├── i18n/            # i18n configuration
│       └── lib/             # Utilities and helpers
├── server/                   # Backend API
│   └── routes.ts            # API endpoints
├── CONTRIBUTE.md            # Translation contribution guide
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/learnpack.git
cd learnpack
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file with:
VITE_LEARNPACK_PLATFORM=https://app.learnpack.co
VITE_LEARNPACK_CREATOR=https://app.learnpack.co
VITE_BREATHCODE_API_TOKEN=your_token_here
VITE_BREATHCODE_ACADEMY_ID=54
VITE_GA_MEASUREMENT_ID=your_ga_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5000](http://localhost:5000) in your browser

### Testing Languages

To test different languages, append the `lang` query parameter:

- English: `http://localhost:5000/?lang=en`
- Spanish: `http://localhost:5000/?lang=es`

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## 🌐 Pages

- **`/`** - Homepage with hero, value props, social proof, and CTAs
- **`/pricing`** - Dynamic pricing page with BreathCode API integration
- **`/our-mission`** - Company mission and vision
- **`/terms-and-conditions`** - Legal terms
- **`/privacy-policy`** - Privacy policy

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Translation Contributions

Want to help translate the website or fix translation issues? 

**👉 Read our [Translation Contribution Guide (CONTRIBUTE.md)](CONTRIBUTE.md)**

The guide covers:
- How to edit existing translations
- Adding new languages
- Testing your changes
- Submitting pull requests
- Translation best practices

### Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Reporting Issues

Found a bug or have a suggestion? [Open an issue](https://github.com/your-org/learnpack/issues)

## 🔒 Environment Variables

Required environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_LEARNPACK_PLATFORM` | Main platform URL for auth/signup | `https://app.learnpack.co` |
| `VITE_LEARNPACK_CREATOR` | Creator tool URL | `https://app.learnpack.co` |
| `VITE_BREATHCODE_API_TOKEN` | BreathCode API authentication token | - |
| `VITE_BREATHCODE_ACADEMY_ID` | Academy ID for pricing data | `54` |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics measurement ID | - |

## 📊 Performance

This website is optimized for performance:

- ⚡ **Lighthouse Score**: 95+ on all metrics
- 🎯 **Core Web Vitals**: Optimized LCP, FID, CLS
- 📦 **Code Splitting**: Lazy-loaded components
- 🖼️ **Image Optimization**: WebP with fallbacks
- 🔄 **Caching**: Intelligent cache strategies

## 🌍 Supported Languages

| Language | Code | Status | Contribute |
|----------|------|--------|------------|
| English | `en` | ✅ Complete | [CONTRIBUTE.md](CONTRIBUTE.md) |
| Spanish | `es` | ✅ Complete | [CONTRIBUTE.md](CONTRIBUTE.md) |
| French | `fr` | ⏳ Planned | [Help us!](CONTRIBUTE.md) |
| German | `de` | ⏳ Planned | [Help us!](CONTRIBUTE.md) |

Want to add your language? Check our [contribution guide](CONTRIBUTE.md)!

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🔗 Links

- **Website**: [learnpack.co](https://learnpack.co)
- **Documentation**: [docs.learnpack.co](https://docs.learnpack.co)
- **Platform**: [app.learnpack.co](https://app.learnpack.co)
- **Support**: [support@learnpack.co](mailto:support@learnpack.co)

## 📄 License

This project is proprietary software. All rights reserved.

## 🙏 Acknowledgments

- Built with ❤️ by the LearnPack team
- Design inspiration from modern SaaS platforms
- Translation contributors from around the world

---

**Need help with translations?** → [CONTRIBUTE.md](CONTRIBUTE.md)

**Found a bug?** → [Open an issue](https://github.com/your-org/learnpack/issues)

**Have questions?** → [Contact us](mailto:support@learnpack.co)
