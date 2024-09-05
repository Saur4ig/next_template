# Basic next.js temple for a simple Apps

## Dependencies

### Production Dependencies

- [@auth/prisma-adapter](https://github.com/nextauthjs/prisma-adapter) (v2.4.2): Prisma adapter for NextAuth.js authentication.
- [@prisma/client](https://github.com/prisma/prisma) (v5.19.0): Auto-generated query builder for Prisma ORM.
- [cookies-next](https://github.com/andreizanik/cookies-next) (v4.2.1): A simple cookie library for Next.js.
- [next](https://nextjs.org/) (v14.2.7): React framework for building web applications.
- [next-auth](https://next-auth.js.org/) (v5.0.0-beta.20): Authentication for Next.js applications.
- [react](https://reactjs.org/) (v18): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html) (v18): React package for working with the DOM.
- [zustand](https://github.com/pmndrs/zustand) (v4.5.5): Small, fast, and scalable state management solution.

### Development Dependencies

- [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped) (v20.16.2): TypeScript definitions for Node.js.
- [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped) (v18): TypeScript definitions for React.
- [@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped) (v18): TypeScript definitions for React DOM.
- [daisyui](https://daisyui.com/) (v4.12.10): Tailwind CSS component library.
- [eslint](https://eslint.org/) (v8): Linting utility for JavaScript and TypeScript.
- [eslint-config-next](https://nextjs.org/docs/basic-features/eslint) (v14.2.7): ESLint configuration used by Next.js.
- [postcss](https://postcss.org/) (v8): Tool for transforming CSS with JavaScript.
- [prisma](https://www.prisma.io/) (v5.19.0): Next-generation ORM for Node.js and TypeScript.
- [tailwindcss](https://tailwindcss.com/) (v3.4.1): Utility-first CSS framework.
- [ts-node](https://github.com/TypeStrong/ts-node) (v10.9.2): TypeScript execution environment and REPL for Node.js.
- [typescript](https://www.typescriptlang.org/) (v5.5.4): Typed superset of JavaScript that compiles to plain JavaScript.

## Scripts

### NPM Scripts

- `dev`: Run the development server
- `build`: Build the application for production
- `start`: Start the production server
- `lint`: Run ESLint to check for code quality issues

### Makefile Scripts

This project includes a Makefile with the following commands:

- `make run`: Run the development server (equivalent to `npm run dev`)
- `make db-fmt`: Format the Prisma schema file
- `make db-gen`: Generate Prisma client

To use these commands, ensure you have `make` installed on your system. Then you can run them from the terminal in the project root directory. For example:

```
make run
```

These Makefile scripts provide quick shortcuts for common development tasks, especially those related to database management with Prisma.
