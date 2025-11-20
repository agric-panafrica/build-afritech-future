# How to Run the Code

This guide explains how to run the Afritech Capital Ghana web application locally.

## Prerequisites

- **Node.js** (v18 or higher recommended) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** (comes with Node.js)

## Quick Start

Follow these steps to run the application on your local machine:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including React, Vite, TypeScript, Tailwind CSS, and other dependencies.

### 2. Start the Development Server

```bash
npm run dev
```

The application will start and be available at:
- **Local**: http://localhost:8080/
- **Network**: http://[your-ip]:8080/

You should see output similar to:
```
VITE v5.4.19  ready in 431 ms

➜  Local:   http://localhost:8080/
➜  Network: http://10.1.0.100:8080/
```

### 3. View the Application

Open your web browser and navigate to `http://localhost:8080/`

The development server includes:
- ✅ Hot Module Replacement (HMR) - changes appear instantly
- ✅ Fast refresh for React components
- ✅ TypeScript type checking

## Additional Commands

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

### Lint the Code

```bash
npm run lint
```

Runs ESLint to check code quality and style.

### Build for Development

```bash
npm run build:dev
```

Creates a development build with source maps.

## Technology Stack

- **Vite** - Fast build tool and development server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library
- **React Router DOM** - Client-side routing

## Troubleshooting

### Port Already in Use

If port 8080 is already in use, Vite will automatically try the next available port (8081, 8082, etc.).

### Dependencies Not Installed

If you see module-related errors, ensure you've run `npm install` first.

### Clear Cache

If you encounter unexpected issues, try clearing the cache:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (Home, About, etc.)
│   ├── contexts/       # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── dist/               # Production build output
```

## Development Workflow

1. Run `npm run dev` to start the development server
2. Make changes to files in the `src/` directory
3. Changes will automatically reflect in the browser (HMR)
4. Run `npm run lint` periodically to check code quality
5. Run `npm run build` to test production builds

## Need Help?

For more information about the project, see the [README.md](./README.md) file.
