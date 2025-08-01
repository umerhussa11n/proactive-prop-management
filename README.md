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


## 🛠️ Development Setup

This project includes VS Code settings for optimal development experience:
- 🎨 - bradlc.vscode-tailwindcss - Tailwind CSS IntelliSense with autocomplete
- 📝 - usernamehw.errorlens - TypeScript configuration with path aliases
- ✨ - esbenp.prettier-vscode - Code formatting (Prettier)
- 🔧 - ms-vscode.vscode-typescript-next	- Recommended extensions for team consistency
- 📄 - ms-vscode.vscode-json	- Better Json Editing
- 🔧 - dbaeumer.vscode-eslint	- Code quality and linting

### Quick Start
1. Open project in VS Code
2. Install recommended extensions (popup will appear)
3. Restart VS Code for full IntelliSense support

### Manually check and Install all Extentions Or  Quick Verfication of Extentions

1. To check Installed Extentions
`code --list-extensions | grep -E "(tailwind|errorlens|prettier|typescript|eslint)"`

2. To Install All at once..
`code --install-extension bradlc.vscode-tailwindcss usernamehw.errorlens esbenp.prettier-vscode ms-vscode.vscode-typescript-next ms-vscode.vscode-json dbaeumer.vscode-eslint`
