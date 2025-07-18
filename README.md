# proactive-prop-management
## Proactive Property Maintinance

### Aiminng to create a SAAS Product which helps small portfolio managers / landlords with a few properties to manager their property maintinance needs.. 

### Features:  
- Tickets logging by tenennts 
- Storing of Certificates like EPC / Tenancy Agrements etc
- History of property maintiance tasks & trades people used
- Proactive suggestions from AI 

### Architecture
- Frontend (NextJs, React / TypeScript)
- Backend (NextJs API Routes, Node.Js, Express.Js, Azure function Apps)
- Styling (Tailwind)
- Testing (Jest, React Test Library)
- Deployment (Azure Kubernetes Service i.e. AKS)
- Cloud (Azure: WebApps, FUnction Apps, COSMOS DB, API Management)
- CI/CD (Azure Dev/Ops)

### Project Setup 
- validation of git commits via githooks, husky, commitlint (conventional commits enforced)..
- turborepo for parallel builds and speeding up development
- 📦 Shared ESLint config (@repo/eslint-config)
- 📦 Shared TypeScript config (@repo/typescript-config)
- 🎨 Prettier formatting (consistent code style)
- 🔧 Pre-commit hooks (format check, lint, type check)
- ⚡ Turbo scripts for running across all apps
