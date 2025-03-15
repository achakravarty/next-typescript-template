# Next.js TypeScript Template

A modern, feature-rich starter template for building web applications with Next.js, TypeScript, Tailwind CSS, Shadcn UI, Prettier, and ESLint.

## Features

- **Next.js 14** - The React framework for production
- **React 19** - The library for web and native user interfaces
- **TypeScript** - Strongly typed programming language that builds on JavaScript
- **Tailwind CSS** - A utility-first CSS framework
- **Shadcn UI** - Re-usable components built with Radix UI and Tailwind CSS
- **ESLint** - Pluggable JavaScript linter
- **Prettier** - Opinionated code formatter
- **App Router** - Next.js App Router for file-based routing
- **Dark Mode Support** - Built-in dark mode support
- **Client & Server Components** - Properly structured for Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/next-typescript-template.git my-project
   cd my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
next-typescript-template/
├── public/              # Static assets
├── src/
│   ├── app/             # App router pages
│   ├── components/      # React components
│   │   └── ui/          # Shadcn UI components
│   └── lib/             # Utility functions
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Adding Shadcn UI Components

This template uses [Shadcn UI](https://ui.shadcn.com/) for UI components. You can add more components using the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:

```bash
npx shadcn@latest add dropdown-menu
npx shadcn@latest add avatar
```

### Styling

This template uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

### TypeScript

TypeScript configuration is in `tsconfig.json`. You can customize it to fit your project's needs.

## GitHub Workflows

This template includes several GitHub workflows to automate common tasks:

### CI/CD

- **Lint**: Automatically runs ESLint to check code quality on push and pull requests
- **TypeCheck**: Verifies TypeScript types on push and pull requests
- **Build**: Ensures the project builds successfully on push and pull requests
- **Format**: Automatically formats code with Prettier on push to main

### Dependency Management

- **Dependabot**: Automatically creates pull requests for dependency updates weekly
  - Groups minor and patch updates together
  - Ignores major updates to avoid breaking changes

To use these workflows, make sure your repository has the appropriate permissions:
1. Go to Settings > Actions > General
2. Ensure "Read and write permissions" is selected under "Workflow permissions"

## Understanding Client and Server Components

This template follows Next.js App Router's model of using Server Components by default, with Client Components where needed for interactivity.

### Server Components (Default)
- Render on the server
- Don't include client-side JavaScript
- Can't use hooks or event handlers
- Better performance for static content

### Client Components
- Include the `'use client'` directive at the top
- Support interactivity with hooks and event handlers
- Used for interactive UI elements

When adding interactivity:
1. Create a Client Component with the `'use client'` directive
2. Add your interactive logic (event handlers, hooks)
3. Import and use it within your Server Components

For more information, see the [Next.js documentation on Client and Server Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components).

## Deployment

You can deploy this template to any platform that supports Next.js, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
