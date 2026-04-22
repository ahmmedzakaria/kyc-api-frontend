# Project Structure

## Overview

This repository is an Angular 19 frontend application using standalone components, lazy-loaded routes, SCSS styling, Angular Material, and Bootstrap.

The application is organized around three main areas:

- `core`: infrastructure and application-wide concerns
- `pages`: route-level feature screens
- `shared`: reusable UI components and helpers

## Root Layout

```text
frontend/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── app/
│       ├── app.component.*
│       ├── app.routes.ts
│       ├── core/
│       ├── pages/
│       └── shared/
└── node_modules/
```

## Entry Points

- `src/main.ts`
  - Bootstraps the Angular app with `bootstrapApplication`
  - Registers router and HTTP interceptors
  - Imports animation and snackbar providers

- `src/app/app.component.ts`
  - Root standalone component
  - Chooses authenticated vs public layout state based on token presence

- `src/app/app.routes.ts`
  - Defines lazy-loaded application routes
  - Protects authenticated pages with `authGuard`
  - Prevents logged-in users from revisiting login with `loginGuard`

## Source Organization

### `src/app/core`

Holds cross-cutting concerns and application infrastructure.

#### `core/api`

- `api-endpoints.ts`: centralized API endpoint definitions
- `api.service.ts`: shared HTTP POST wrapper and error handling
- `environment.ts`: base API URLs
- `model/`: API response and domain transport models

#### `core/interceptors`

- `jwt.interceptor.ts`
  - Attaches the bearer token from `localStorage`

- `api-response.interceptor.ts`
  - Normalizes wrapped API responses
  - Displays messages through Angular Material snackbars

#### `core/services`

- `auth/`
  - `auth.service.ts`: login, logout, token decode, role checks
  - `auth.guard.ts`: protects authenticated routes
  - `login.guard.ts`: redirects logged-in users away from `/login`

- Other services
  - `layout.service.ts`: signal-based UI layout state
  - `kyc.service.ts`: KYC CRUD/search operations
  - `person.service.ts`: person CRUD/search operations
  - `gis.service.ts`: location-related backend access

#### `core/layout`

Authenticated application shell components:

- `layout/`: main page shell
- `sidebar/`: side navigation
- `topbar/`: top navigation/header

### `src/app/pages`

Contains route-level screens and feature entry points.

- `login/`: authentication screen
- `dashboard/`: authenticated landing page
- `person/`: person management screens and model
- `kyc-list/`: KYC listing page
- `kyc-create/`: KYC creation page
- `profile/`: profile screen

These are primarily loaded through route-level lazy imports.

### `src/app/shared`

Reusable UI building blocks and support utilities.

#### `shared/components`

Contains form and UI components such as:

- `button`
- `textbox`
- `textarea`
- `checkbox`
- `radio-group`
- `dropdown`
- `smart-dropdown`
- `date-picker`
- `file-upload`
- `password-group`
- `card-selector`
- `kyc-form`
- `kyc-table`

#### `shared/services`

- `validation-message.service.ts`: shared validation helper logic

## Routing Structure

The routing model is:

- `/login`
  - Public route
  - Guarded by `loginGuard`

- `/`
  - Authenticated layout shell
  - Guarded by `authGuard`
  - Child routes:
    - `/dashboard`
    - `/person`
    - `/kyc`

- `**`
  - Redirects to `dashboard`

## Styling and UI Stack

- Global styles live in `src/styles.scss`
- SCSS is the default styling format
- Angular Material theme is included through `angular.json`
- Bootstrap and Font Awesome are included globally
- Bootstrap JS bundle and Popper are loaded through `angular.json`

## Build and Tooling

Defined in `package.json`:

- `npm start`: runs Angular dev server
- `npm run build`: production build
- `npm run watch`: development build in watch mode
- `npm test`: Karma test runner

Key tooling:

- Angular CLI 19
- TypeScript 5.7
- Karma + Jasmine

## Current Observations

- The project follows a reasonable `core/pages/shared` separation.
- Standalone components and lazy loading are used consistently at the route level.
- API integration is centralized, which reduces duplication.
- There is no visible `public/` directory even though `angular.json` references it as an asset input.
- There are no `*.spec.ts` files currently present.
- `core/api/api.service2.ts` appears to be a duplicate or unused alternative service and should be reviewed.
- API URLs are hardcoded in `core/api/environment.ts` rather than split by environment configuration.

## Suggested Next Cleanup Areas

- Add proper Angular environment file separation for local/staging/production
- Remove or document duplicate/unused service files
- Add tests for guards, services, and route-level components
- Verify asset configuration in `angular.json`
- Document API response contracts and feature ownership by module
