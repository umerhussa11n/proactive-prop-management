# Frontend - Next.js Application

Next.js application with React, TypeScript, Tailwind CSS, React Testing Library, and Cypress.

## 📁 Folder Structure

```
apps/frontend/
├── public/                              # Static assets
│   ├── favicon.ico
│   └── images/
│       └── logo.png
│
├── src/
│   ├── app/                             # Next.js App Router
│   │   ├── globals.css                  # Tailwind imports
│   │   ├── layout.tsx                   # Root layout
│   │   ├── page.tsx                     # Home page
│   │   ├── loading.tsx                  # Loading UI
│   │   ├── error.tsx                    # Error UI
│   │   ├── not-found.tsx                # 404 page
│   │   │
│   │   ├── api/                         # API routes
│   │   │   └── [resource]/
│   │   │       └── route.ts             # CRUD endpoints
│   │   │
│   │   └── [feature]/                   # Feature pages
│   │       ├── page.tsx                 # List page
│   │       ├── create/
│   │       │   └── page.tsx             # Create page
│   │       └── [id]/
│   │           ├── page.tsx             # Detail page
│   │           └── edit/
│   │               └── page.tsx         # Edit page
│   │
│   ├── components/                      # React components
│   │   ├── ui/                          # Generic UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.test.tsx
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Card.test.tsx
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Input.test.tsx
│   │   │   └── index.ts                 # Exports
│   │   │
│   │   ├── layout/                      # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Header.test.tsx
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx
│   │   │       └── Footer.test.tsx
│   │   │
│   │   └── [feature]/                   # Feature components
│   │       ├── FeatureCard/
│   │       │   ├── FeatureCard.tsx
│   │       │   └── FeatureCard.test.tsx
│   │       └── FeatureList/
│   │           ├── FeatureList.tsx
│   │           └── FeatureList.test.tsx
│   │
│   ├── lib/                             # Utils & API
│   │   ├── api.ts                       # API functions
│   │   ├── utils.ts                     # Utilities
│   │   └── constants.ts                 # Constants
│   │
│   ├── hooks/                           # Custom hooks
│   │   ├── useApi.ts
│   │   └── useLocalStorage.ts
│   │
│   └── types/                           # TypeScript types
│       ├── index.ts
│       └── [feature].ts
│
├── __tests__/                           # Test config
│   ├── setup.ts                         # Jest setup
│   └── test-utils.tsx                   # Test utilities
│
├── cypress/                             # E2E tests
│   ├── e2e/
│   │   ├── home.cy.ts
│   │   └── [feature].cy.ts
│   ├── fixtures/
│   │   └── data.json
│   └── support/
│       └── commands.ts
│
├── .env.local                           # Environment variables
├── cypress.config.ts                    # Cypress config
├── jest.config.js                       # Jest config
├── next.config.js                       # Next.js config
├── tailwind.config.js                   # Tailwind config
├── tsconfig.json                        # TypeScript config
├── package.json                         # Dependencies
└── README.md                            # Documentation
```

## 🎯 Conventions

**Files:** PascalCase components (`Button.tsx`), camelCase utils (`api.ts`)
**Tests:** Co-located with `.test.tsx` suffix
**Pages:** Use `page.tsx` in feature folders
**API:** RESTful routes in `api/[resource]/route.ts`

## 🧪 Testing

```bash
yarn test              # Unit tests (RTL)
yarn test:watch        # Watch mode
yarn cypress:open      # E2E tests GUI
yarn cypress:run       # E2E tests CLI
```

## 🚀 Key Features

- **App Router** for modern Next.js routing
- **Co-located tests** with components  
- **TypeScript** for type safety
- **Tailwind** for styling
- **Feature-based** organization