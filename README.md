# Investment Calculator

A React-based web application that calculates and displays year-by-year investment growth using compound interest. Users can input their initial investment, annual contributions, expected return rate, and investment duration to see a detailed breakdown of their portfolio performance over time.

## Technologies Used

### Core

- **[React](https://react.dev/) v19** — UI library using functional components and the `useState` hook for state management. User input is handled via controlled components with state lifted to the root `App` component.
- **[React DOM](https://react.dev/) v19** — Renders the React component tree to the browser DOM.

### Build Tooling

- **[Vite](https://vitejs.dev/) v4** — Fast development server with hot module replacement (HMR) and optimized production bundling.
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** — Vite plugin enabling React Fast Refresh and JSX transformation.

### Linting

- **[ESLint](https://eslint.org/) v8** — Static analysis tool for catching problematic patterns in JavaScript.
- **eslint-plugin-react** — React-specific linting rules.
- **eslint-plugin-react-hooks** — Enforces the Rules of Hooks.
- **eslint-plugin-react-refresh** — Validates component compatibility with React Fast Refresh.

### Styling

- **Plain CSS** with CSS Grid for the two-column input layout and a dark-themed radial gradient design.
- **[Google Fonts](https://fonts.google.com/)** — Quicksand (body text) and Roboto Condensed (labels, headings, and table data).

### APIs & Standards

- **JavaScript (ES Modules / JSX)** — Modern JavaScript with JSX syntax for component templates.
- **Intl.NumberFormat** — Built-in browser API used to format calculated values as USD currency.

## Project Structure

```
Investment Calculator/
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── src/
│   ├── index.jsx               # React entry point (renders App)
│   ├── index.css               # Global styles
│   ├── App.jsx                 # Root component (state + logic)
│   ├── assets/                 # Static assets (logo)
│   ├── Components/
│   │   ├── Header.jsx          # Logo and title
│   │   ├── UserInput.jsx       # Controlled input form (4 fields)
│   │   └── ResultTable.jsx     # Year-by-year results table
│   └── util/
│       └── investment.js       # Compound interest calculation + currency formatter
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)

### Installation

```bash
git clone https://github.com/devMo76/Investment-Calculator-.git
cd Investment-Calculator-
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across the project        |
