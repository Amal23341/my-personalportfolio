# Digital Marketing Portfolio Website

## Overview

This is a modern, responsive portfolio website for Amal Jandheer, a Digital Marketing Specialist. The application showcases professional experience, skills, projects, and provides a contact form for potential clients. Built as a full-stack web application with a React frontend and Express backend, it demonstrates expertise in SEO, PPC, social media marketing, and analytics through an interactive and visually appealing interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and component-based architecture
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture  
- **Framework**: Express.js with TypeScript for the REST API server
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Storage**: In-memory storage implementation with interface abstraction for future database integration
- **API Design**: RESTful endpoints with proper error handling and request logging middleware

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema Management**: Centralized schema in `shared/schema.ts` with Zod validation
- **Database Configuration**: Environment-based connection using Neon Database serverless adapter
- **Migrations**: Drizzle Kit for database schema migrations and version control

### Component Architecture
- **Design System**: Comprehensive UI component library with consistent styling patterns
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Responsive Design**: Mobile-first approach with adaptive layouts across all screen sizes
- **Animation System**: CSS transitions and transforms for smooth user interactions
- **Accessibility**: ARIA compliant components with keyboard navigation support

### Development Workflow
- **Type Safety**: Shared TypeScript configuration across client, server, and shared modules
- **Path Aliases**: Configured import aliases for clean module resolution
- **Asset Management**: Centralized asset handling with proper optimization
- **Development Tools**: Integrated error overlay and debugging tools for Replit environment

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod resolvers
- **Routing**: Wouter for lightweight client-side navigation
- **State Management**: TanStack React Query for server state and caching
- **HTTP Client**: Native fetch API with custom request wrapper

### UI and Styling
- **Component Library**: Radix UI primitives for accessible base components
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling
- **Animations**: Class Variance Authority for component variants

### Backend Infrastructure
- **Web Framework**: Express.js for REST API server
- **Database**: Drizzle ORM with PostgreSQL/Neon Database integration
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development and Build Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Database Tools**: Drizzle Kit for schema management and migrations  
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Type Checking**: TypeScript with strict configuration across all modules

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Validation**: Zod for runtime type validation and schema definitions
- **UI Enhancements**: Various utility libraries for carousels, command palettes, and interactive components