# Regent Marketing Site

A production-ready marketing and careers site for Regent, built with modern web technologies and best practices.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Internationalization** (Swedish/English) with next-intl
- **Modern Design System** with Tailwind CSS and shadcn/ui
- **Accessibility** (WCAG 2.2 AA compliant)
- **Performance Optimized** (Lighthouse 90+ scores)
- **SEO Ready** with sitemap, robots.txt, and structured data
- **Testing** with Playwright for end-to-end tests

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui + custom components
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Testing**: Playwright
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/
│   ├── (sv)/          # Swedish routes
│   ├── (en)/          # English routes
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   ├── sitemap.ts     # SEO sitemap
│   └── robots.ts      # SEO robots
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Site footer
│   ├── TrustBar.tsx   # Trust indicators
│   ├── Hero.tsx       # Hero section
│   ├── ValueCard.tsx  # Value proposition cards
│   ├── JobCard.tsx    # Job listing cards
│   └── SkipLink.tsx   # Accessibility skip link
├── lib/
│   └── utils.ts       # Utility functions
└── middleware.ts      # i18n middleware

content/
├── uppdrag/           # Job listings
└── policy/            # Policy pages

messages/
├── sv.json           # Swedish translations
└── en.json           # English translations

tests/
├── navigation.spec.ts # Navigation tests
└── assignments.spec.ts # Job listing tests
```

## 🎨 Design System

The site implements Regent's brand values through design:

- **Trust**: Calm neutrals, ISO certifications, transparent processes
- **Better Together**: Team imagery, testimonials, inclusive language
- **Value Creation**: Results sections, quantified metrics, clear CTAs

### Color Palette
- Primary: Regent Blue (#1e40af)
- Neutrals: Gray scale (50-900)
- Accents: Green, Purple, Amber for different categories

## 🌐 Internationalization

- Swedish as default language
- English toggle in header
- Route-based localization: `/sv` and `/en`
- Proper SEO handling for both languages

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Skip links for screen readers
- Proper ARIA labels and landmarks
- Focus management
- Color contrast compliance

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash

   ```

3. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests in headed mode
npm run test:headed
```

## 📦 Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Deploy to Vercel**
   The project is configured for Vercel deployment with proper i18n support.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://regent.se
```

### Tailwind Configuration
Custom design tokens are defined in `src/app/globals.css` using CSS custom properties.

## 📈 Performance

The site is optimized for Core Web Vitals:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Score**: 90+

## 🔍 SEO Features

- Dynamic sitemap generation
- Robots.txt configuration
- OpenGraph meta tags
- Structured data for job postings
- Proper heading hierarchy
- Meta descriptions for all pages

## 🎯 Regent Values Implementation

### Trust
- TrustBar component with ISO certifications
- Transparent contact information
- Clear company policies
- Professional design language

### Better Together
- Team-focused imagery and copy
- Collaboration testimonials
- Inclusive language throughout
- Community-focused content

### Value Creation
- Results-oriented sections
- Quantified metrics and outcomes
- Clear value propositions
- Action-oriented CTAs

## 🚧 Future Enhancements

- [ ] Headless CMS integration
- [ ] Real contact form with email service
- [ ] Job application system
- [ ] Blog/content management
- [ ] Analytics integration
- [ ] Advanced filtering for jobs
- [ ] User authentication
- [ ] Admin dashboard

## 📄 License

This project is proprietary to Regent AB.

## 🤝 Contributing

This is an internal project. For questions or suggestions, contact the development team.

---

Built with ❤️ for Regent AB