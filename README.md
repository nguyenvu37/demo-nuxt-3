# Nuxt 3 Project

## Introduction

This is a modern **Nuxt 3** web application built with TypeScript, explicitly configured for scalability and developer experience. It features a robust tech stack including **Tailwind CSS** for utility-first styling, **SCSS** for structural/theme styling, **Pinia** for state management, and **Storybook** for UI component development.

## Features

- **Framework**: [Nuxt 3](https://nuxt.com) (Vue 3)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/) for utilities.
  - **SCSS** architecture with a strict file mirroring convention.
- **State Management**: [Pinia](https://pinia.vuejs.org/).
- **Component Library**: [Storybook](https://storybook.js.org/) integration.
- **Code Quality**:
  - [ESLint](https://eslint.org/) for linting.
  - [Prettier](https://prettier.io/) for formatting.
  - [Husky](https://typicode.github.io/husky/) & [Lint-Staged](https://github.com/okonet/lint-staged) for pre-commit hooks.

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (Latest LTS version recommended)
- **Yarn** (This project prefers Yarn over npm/pnpm)

## Setup & Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**

    ```bash
    yarn install
    ```

3.  **Environment Configuration:**
    Copy the example environment file and configure your local variables.
    ```bash
    cp .env.example .env
    ```
    _Update the `.env` file with the necessary `PROJECT_NAME` and other variables if added._

## Development

### Start Development Server

To start the Nuxt development server with hot-module replacement:

```bash
yarn dev
```

The application will be available at `http://localhost:3000` (or the port defined in your `.env`).

### Run Storybook

To interactively develop and test UI components in isolation:

```bash
yarn storybook
```

Storybook typically opens at `http://localhost:6006`.

## Building for Production

To build the application for production deployment:

```bash
yarn build
```

This creates a `.output` directory ready to be deployed on any node.js hosting environment.

To preview the production build locally:

```bash
yarn preview
```

## Code Quality & Linting

We enforce strict code quality rules. Before committing, it is recommended to run:

- **Linting**:

  ```bash
  yarn lint
  ```

  To automatically fix linting errors:

  ```bash
  yarn lint:fix
  ```

- **Formatting**:
  ```bash
  yarn prettier
  ```

_Note: Husky is configured to automatically run these checks on staged files before every commit._

## Project Structure & Conventions

### SCSS Architecture

We use a specific convention for SCSS to keep styles modular and predictable.

- **Location**: All styles reside in `/assets/scss/`.
- **Mirroring**: The directory structure in `assets/scss` mirrors `components/` and `pages/`.
- **Naming**: All SCSS files and directories must use **kebab-case**.
  - Example: `components/base/modal.vue` -> `assets/scss/components/base/modal.scss`.

### Components & Stories

- Components are located in `components/`.
- **Rule**: When creating a new base component (e.g., in `components/base/`), you **must** create a corresponding `.stories.ts` file alongside it to document it in Storybook.

---

For more detailed information on Nuxt 3, check out the [Nuxt 3 documentation](https://nuxt.com/docs).
