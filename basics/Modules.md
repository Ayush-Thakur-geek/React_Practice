# JavaScript modules, imports - exports

This reading will cover the three main concepts:

1. JavaScript modules
2. Module exports
3. Module imports

## JavaScript modules

The purpose of a module is to have more modular code, where you can work with smaller files, and import and export them so that the apps you build are more customizable and have more composable parts.

A module can be as simple as a single function in a separate file.

Consider the following function declaration:

```js
function addTwo(a, b) {
    console.log(a + b);
}
```

Say that you have a file named **addTwo.js** that contains only the above code.

How would you make this file a JavaScript module?

All that you would need to do to make it a JavaScript module is use the export syntax.

## Module Exports

There is more than one way to export a module in JavaScript.

While all the various syntactical differences are not listed, here are a few examples that will cover all the ways that the importing and exporting of JavaScript modules will be done in this course.

In general, there are two ways to export modules in JavaScript:

1. Using default exports 

2. Using named exports

### Default Exports

You can have **one default export** per JavaScript module.

Using the above **addTwo.js** file as an example, here are two ways to perform a default export:

```js
export default function addTwo(a, b) {
    console.log(a + b);
}
```

So, in the above example, you’re adding the `export default` keywords in front of the `addTwo` function declaration.

Here's an alternative syntax:

```js
function addTwo(a, b) {
    console.log(a + b);
}

export default addTwo;
```

### Named Exports

Named exports are a way to export only certain parts of a given JavaScript file.

In contrast with default exports, you can export as many items from any JavaScript file as you want.

In other words, there can be only one default export, but as many named exports as you want.

For example:

```js
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}
```

If you want to export both the `addTwo` and the `addThree` functions as named exports, one way to do it would be the following:

```js
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c) {
    console.log(a + b + c);
}
```

Here's another way you could do it:

```js
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

export { addTwo, addThree };
```

## Importing Modules

Just like when exporting modules in JavaScript, there are several ways to import them.

The exact syntax depends on how the module was exported.

Say that you have two modules in a folder.

The first module is **addTwo.js** and the second module is **mathOperations.js**.

You want to import the **addTwo.js** module into the **mathOperations.js** module.

### Importing a Module that was Exported as Default

Consider the previous example of exporting the addTwo function as a default module:

```js
// addTwo.js module:
function addTwo(a, b) {
    console.log(a + b);
}

export default addTwo;
```

To import it into the mathOperations.js module, you could use the following syntax:

```js
import addTwo from "./addTwo";

// the rest of the mathOperations.js code goes here
```

So, you could start this `import` with the import keyword, then the name under which you’ll use this imported code inside the **mathOperations.js** file. You would then type the keyword `from`, and finally the location of the file, *without the .js extension*.

Contrast the above import of the default addTwo export with the different import syntax if the addTwo function was instead a named export: