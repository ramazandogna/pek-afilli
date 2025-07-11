# 🚀 Pek Afilli - Modern Blog Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.4-38B2AC)](https://tailwindcss.com/)
[![GraphQL](https://img.shields.io/badge/GraphQL-API-ff69b4)](https://graphql.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://pek-afilli.vercel.app/)

A modern, performant, and SEO-friendly blog platform. Uses WordPress backend with GraphQL API for content management.

**🌐 Live Demo:** [https://pek-afilli.vercel.app/](https://pek-afilli.vercel.app/)

## 📋 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Structure](#-api-structure)
- [SEO Optimization](#-seo-optimization)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎨 User Experience

- **Responsive Design**: Mobile, tablet, and desktop compatible
- **Modern UI/UX**: Elegant and user-friendly interface with Tailwind CSS
- **Smooth Animations**: Fluid animations with Framer Motion
- **Interactive Elements**: Hover effects and micro-interactions

### 🔍 Search & Filtering

- **Real-time Search**: Optimized search with debounce functionality
- **Category Filtering**: Filter content by categories
- **Modal Search**: User-friendly modal search interface
- **Smart Suggestions**: Related content recommendations

### 📝 Content Management

- **WordPress Backend**: Powerful CMS with GraphQL API
- **Dynamic Content**: Optimized page loading with SSR/SSG
- **Comment System**: User interaction through comments
- **Related Content**: Automatic related post suggestions

### 🚀 Performance

- **Next.js 14**: Modern React framework with App Router
- **Image Optimization**: Optimized images with Next.js Image component
- **Code Splitting**: Lazy loading with dynamic imports
- **Error Boundaries**: Error handling with user-friendly messages

### 🔧 Developer Experience

- **TypeScript**: Type safety and better IDE support
- **Constants Management**: Centralized constant value management
- **SEO Helpers**: Automatic meta tag and structured data generation
- **Modular Architecture**: Reusable component structure

## 🛠️ Technologies

### Frontend

- **Next.js 14.2.4** - React framework
- **TypeScript 5.5.2** - Type safety
- **Tailwind CSS 3.4.4** - Utility-first CSS framework
- **Framer Motion 11.3.12** - Animation library

### Backend & API

- **WordPress** - CMS backend
- **GraphQL** - API communication
- **Axios 1.7.2** - HTTP client

### Development Tools

- **ESLint** - Code quality
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
pek-afilli/
├── app/                    # Next.js App Router
│   ├── [post]/            # Dynamic post pages
│   ├── category/          # Category pages
│   ├── auth/              # Authentication
│   ├── api/               # API routes
│   └── layout.tsx         # Main layout
├── components/            # React components
│   ├── header/           # Site header
│   ├── footer/           # Site footer
│   ├── post/             # Post components
│   ├── modal/            # Modal components
│   ├── comments/         # Comment system
│   └── errorBoundary/    # Error handling
├── lib/                  # Utility functions
│   ├── getAllPosts.ts    # Post data fetching
│   ├── getSinglePost.ts  # Single post data fetching
│   └── graphqlRequest.ts # GraphQL requests
├── helpers/              # Helper functions
│   ├── seo.ts           # SEO helpers
│   └── functions/       # General functions
├── constants/            # Constants
│   └── index.ts         # Centralized constants
├── types/               # TypeScript type definitions
├── styles/              # CSS files
└── public/              # Static files
```

## 🚀 Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/ramazandogna/pek-afilli.git
cd pek-afilli
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Start development server**

```bash
pnpm dev
# or
npm run dev
```

5. **Open in browser**

```
http://localhost:3000
```

## 📖 Usage

### Development Commands

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Production server
pnpm start

# Type checking
pnpm type-check

# Linting
pnpm lint

# Code formatting
pnpm format
```

### Adding New Posts

1. Create new post from WordPress admin panel
2. Set categories and tags
3. Add featured image
4. Publish

### Category Management

The project supports these categories:

- **Activities** - Adventure and outdoor activities
- **Photography** - Photography tips and techniques
- **Travel Tips** - Travel advice and guides
- **Inspiration** - Inspirational content
- **Destinations** - Travel destinations

## 🔌 API Structure

### GraphQL Endpoint

```
endpoint/graphql
```

### Main Queries

#### Get All Posts

```graphql
query getAllPosts($endCursor: String, $search: String, $categoryName: String) {
  posts(
    after: $endCursor
    first: 5
    where: { orderby: { field: DATE, order: DESC }, search: $search, categoryName: $categoryName }
  ) {
    nodes {
      title
      slug
      excerpt
      date
      featuredImage {
        node {
          mediaDetails {
            sizes {
              sourceUrl
              width
              height
            }
          }
        }
      }
    }
  }
}
```

#### Get Single Post

```graphql
query getSinglePost($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    title
    content
    date
    modified
    author {
      node {
        name
      }
    }
  }
}
```

## 🔍 SEO Optimization

### Meta Tags

- Automatic title and description generation
- Open Graph and Twitter Cards support
- Canonical URLs
- Structured data (JSON-LD)

### Performance

- Next.js Image optimization
- Code splitting and lazy loading
- Static generation (SSG)
- Incremental Static Regeneration (ISR)

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader compatibility

## 🎯 Feature Details

### Search System

```typescript
// Optimized search with debounce
const [query, setQuery] = useState('');
useEffect(() => {
  const timeoutId = setTimeout(() => {
    fetchPosts();
  }, API.DEBOUNCE_DELAY); // 300ms
  return () => clearTimeout(timeoutId);
}, [query]);
```

### Error Boundary

```typescript
// Error handling with user-friendly messages
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### SEO Helper

```typescript
// Automatic meta tag generation
export const metadata = generateMetadata({
  title: 'Post Title',
  description: 'Post description',
  type: 'article'
});
```

## 🌐 Live Demo

Visit the live application: **[https://pek-afilli.vercel.app/](https://pek-afilli.vercel.app/)**

### Demo Features

- **Responsive Design**: Test on different screen sizes
- **Search Functionality**: Try the real-time search
- **Category Navigation**: Browse different content categories
- **Post Reading**: Experience the optimized reading experience

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Use TypeScript
- Follow ESLint rules
- Maintain code formatting with Prettier
- Define prop types for components

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Ramazan Doğan**

- GitHub: [@ramazandogna](https://github.com/ramazandogna)
- Website: [pekafilli](https://pek-afilli.vercel.app/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [WordPress](https://wordpress.org/) - CMS
- [GraphQL](https://graphql.org/) - API query language
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ If you like this project, please give it a star!
