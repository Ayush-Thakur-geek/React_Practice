# 🧠 React Functional Components & JSX – Key Notes

## 🔹 JavaScript Functions vs React Components

- JavaScript functions: reusable blocks of code that take input → process → return output.

- Functional React components behave similarly, but return JSX (UI) instead of just data.

## 🔹 Types of Components in React

- Functional Components (focus for now)

- Class Components (learn later)

- Every React app must have a root component (usually App) — imported and rendered in index.js.

## 🔹 Rendering Components

- Components are rendered like self-closing HTML tags in JSX:

```jsx
<App />
```

- root component renders inside:

```html
<div id="root"></div>
```

## 🔹 JSX (JavaScript XML)

- A syntax extension to JavaScript that looks like HTML.

- Used to describe UI in React components.

- JSX allows embedding JavaScript expressions using {}.

```jsx
const title = "Hello";
return <h1>{title}</h1>;
```

### ✅ Important JSX Rules

- Component names must be capitalized (e.g., Heading)
➤ Lowercase is interpreted as a native HTML tag.

- JSX must return a single parent element.

- JSX is not HTML — but very similar in syntax.

## 🔹 Creating a Functional Component

Example Heading.js:

```jsx
function Heading() {
  const title = "This is some heading text";
  return <h1>{title}</h1>;
}

export default Heading;
```

## 🔹 Transpiling

- JSX is not valid JavaScript, so it must be converted into JavaScript using transpilation.

- React uses tools like Babel to transpile JSX into React.createElement() calls.

- This process allows the browser to understand JSX code.