# Lakeside Savings - Website

Official website for Lakeside Savings, a family-owned discount store in Port Dover, Ontario, serving the community since 2014.

**Website**: https://lakesidesavings.ca

## About

Lakeside Savings offers quality products at unbeatable prices, including:

- Electronics
- Health & Beauty
- Hardware
- Houseware
- Kitchen & Cleaning Supplies
- Stationary & Craft
- Toys
- Confectionery
- Party Supplies
- Seasonal Items

## Location

331 Main St, Port Dover, ON N0A 1N0

**Store Hours:**

- Monday - Saturday: 9:00 AM - 6:00 PM
- Sunday: 10:00 AM - 5:00 PM

## Technologies

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **React Router** - Client-side routing
- **Embla Carousel** - Accessible carousel component

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd lakesidesavings-webapp

# Install dependencies
npm install
# or
bun install
```

### Development

Start the development server:

```bash
npm run dev
# or
bun dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
bun run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
bun run preview
```

## Project Structure

```
lakesidesavings-webapp/
├── public/              # Static assets (images, favicon)
│   └── images/         # Category and promotional images
├── src/
│   ├── components/     # React components
│   │   ├── layout/    # Header, Footer, ClosureBanner
│   │   ├── sections/  # Hero, Categories, Features, Contact, SaleBanner
│   │   └── ui/        # shadcn/ui components
│   ├── pages/         # Page components (Index, Location, NotFound)
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utility functions
├── index.html         # HTML template
└── package.json       # Dependencies and scripts
```

## Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Navigation** - Section scrolling with hash navigation
- **Promotional Carousel** - Auto-playing slider for seasonal promotions
- **Store Hours** - Dynamic display with holiday closure handling
- **Location Page** - Interactive map, address, and store information
- **Accessibility** - ARIA labels and keyboard navigation support

## Deployment

The site is deployed on Vercel and configured via `vercel.json`.

## License

© 2024 Lakeside Savings. All rights reserved.
