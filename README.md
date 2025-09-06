# Learn React

## Overview
The repository is organized as a step-by-step React learning path. Each numbered folder represents a topic, moving from basic interactivity toward full application patterns and routing.

## Key Modules
- **01-interactive** – Compares DOM manipulation in vanilla JavaScript and React. The vanilla example updates text via `querySelector` and event listeners, while the React version uses `useState` and a click handler to render changes declaratively.
- **02-components** – Focuses on building reusable components and passing data via props. It gradually introduces prop spreading and the `children` prop for flexible component content.
- **03-javascript** – Refresher on modern JavaScript essentials: variables, control flow, DOM manipulation, and asynchronous patterns like callback hell and its promise/async‑await solutions.
- **04-lifting-state-up** – Demonstrates lifting shared state to a common parent. A counter example shows how a parent coordinates child components through props and callbacks.
- **05-side-effects** – Introduces `useEffect` for data fetching and other side effects. A `useCart` hook persists cart state in `localStorage` while computing totals and quantities.
- **06-context-and-redux** – Compares React’s Context API and Redux for global state. Context suits small, simple shared state, while Redux scales for complex apps with predictable reducers and debugging tools.
- **07-router** – Covers client-side routing fundamentals. It contrasts a manual History API approach with a React Router setup that uses `<BrowserRouter>`, `<Routes>`, and `<NavLink>` for navigation.

## Points to Know
- Many folders contain both HTML/CDN examples and Vite projects; the latter have `node_modules` and full tooling.
- Exercises and solutions are provided to reinforce each concept, such as building profile cards, handling asynchronous JavaScript, or implementing a shopping cart.

## Next Steps
- Explore **TypeScript** for type safety in React components.
- Learn **testing with Jest and React Testing Library** to validate component behavior.
- Dive into **performance optimization** (memoization, code splitting, lazy loading).
- Experiment with **data-fetching libraries** (e.g., React Query) or move toward **Next.js** for server-side rendering and routing.
- Investigate **advanced patterns** like Suspense, error boundaries, and accessibility best practices.
