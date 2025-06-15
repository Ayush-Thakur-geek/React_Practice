# 🧠 React & SPA – Core Concepts

## ⚡ Single-Page Application (SPA):

- SPA is a one-page website where content updates without full page reloads.

- More efficient than traditional websites (no repeated loading of common elements like headers/footers).

- Popular for fast, scalable, and flexible web apps.

- Often used with React, especially for dynamic UIs (e.g., search content updates without URL change).

# ⚙️ React Basics:

## 🔹 Component-Based Architecture:

- Core idea in React — UIs are built using reusable, self-contained components.

- Each component manages its own HTML, CSS, and JS logic.

- Components can be composed to create complex UIs.

- Enables independent development and better collaboration.

- Example: Checkout page split into Header, Payment Section, Sidebar — each as a component.

### ✅ Benefits of Components:

- Reusability

- Better code organization

- Independent development

- Easier maintenance and testing

## 🌳 DOM vs Virtual DOM:

### 🔹 DOM (Document Object Model):

- Tree-like structure of HTML elements.

- Manipulating it directly was complex (led to spaghetti code).

### 🔹 Virtual DOM (React’s Solution):

- In-memory copy of the real DOM.

- React updates the real DOM only when necessary, using minimal changes.

- Improves performance and simplifies UI updates.

