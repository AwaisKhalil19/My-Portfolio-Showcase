# Alex Morgan — Developer Portfolio

A production-ready developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Intersection Observer**: react-intersection-observer

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, CSS variables, utilities
│   ├── layout.tsx           # Root layout with metadata & SEO
│   └── page.tsx             # Main page — composes all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Responsive nav with scroll-aware active state
│   │   ├── Footer.tsx       # Footer with social links
│   │   ├── ScrollProgress.tsx # Top progress bar
│   │   ├── BackToTop.tsx    # Floating back-to-top button
│   │   └── LoadingScreen.tsx # Animated loading overlay
│   ├── providers/
│   │   └── ThemeProvider.tsx # Dark/light mode context
│   ├── sections/
│   │   ├── Hero.tsx         # Typewriter hero with animated avatar
│   │   ├── About.tsx        # Stats + info cards
│   │   ├── Skills.tsx       # Filterable skills with progress bars
│   │   ├── Projects.tsx     # Filterable project cards
│   │   ├── Services.tsx     # Service offering cards
│   │   ├── Experience.tsx   # Alternating timeline
│   │   ├── Testimonials.tsx # Animated carousel
│   │   └── Contact.tsx      # Form with validation
│   └── ui/
│       ├── SectionHeading.tsx  # Reusable animated section header
│       ├── AnimatedCounter.tsx # Count-up number animation
│       └── TechBadge.tsx       # Technology tag with color coding
├── lib/
│   └── data.ts              # All portfolio content (single source of truth)
├── types/
│   └── index.ts             # TypeScript type definitions
└── tailwind.config.ts       # Extended theme with custom tokens
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

All content lives in `lib/data.ts`:
- **projects** — Add/edit your project cards
- **skills** — Set skill names, levels (0–100), and categories
- **experiences** — Timeline entries (work + education)
- **testimonials** — Client reviews
- **services** — Service offerings
- **stats** — Hero stats

### Color scheme (`tailwind.config.ts`)
```
background: #0A0F1E (deep navy)
primary:    #6366F1 (indigo)
secondary:  #8B5CF6 (violet)
accent:     #22D3EE (cyan)
```

## Key Features

- ✅ App Router (Next.js 15)
- ✅ TypeScript throughout
- ✅ Dark/light mode with `localStorage` persistence
- ✅ Framer Motion animations (scroll-triggered, hover, typewriter)
- ✅ Glassmorphism UI elements
- ✅ Animated scroll progress indicator
- ✅ Skill filter by category
- ✅ Project filter by technology
- ✅ Testimonial carousel with keyboard navigation
- ✅ Contact form with client-side validation
- ✅ Back-to-top button
- ✅ Loading screen animation
- ✅ Responsive mobile-first design
- ✅ SEO & OpenGraph metadata
- ✅ `prefers-reduced-motion` support
- ✅ Accessible focus states and ARIA labels
- ✅ Custom scrollbar
- ✅ Smooth scroll with section-aware navbar

## Deployment

Deploy to Vercel in one command:
```bash
npx vercel --prod
```

Or connect your GitHub repo at vercel.com for automatic deployments.
