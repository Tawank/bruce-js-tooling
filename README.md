
<a name="readmemd"></a>

# Bruce JavaScript tooling

The Bruce JavaScript tooling provides tools and type definitions to help you build applications for the Bruce platform.
https://github.com/pr3y/Bruce

## Getting Started

To create a new Bruce application with **TypeScript support** and **modern JavaScript (ES6+) features**, use the interactive setup wizard (you need to have [node.js](https://nodejs.org/en) installed):

```sh
npx create-bruce-app@latest
```

Once the setup is complete, navigate to your project folder and start the application:

```sh
cd my-bruce-app
npm run start
```

You can use `pnpm` or `yarn` instead of `npm` if preferred.

### Important: JavaScript Compatibility

If you **use the setup wizard (`npx create-bruce-app@latest`)**, your project will support **TypeScript** and **modern JavaScript features** like:

- ✅ **TypeScript support** – Write safer, more maintainable code.
- ✅ **Function IntelliSense** – See available functions, expected parameters, and documentation directly in your editor.
- ✅ **Error checking** – Get warnings and errors when using functions incorrectly.
- ✅ **Modern JavaScript features** like:
  - ✅ `let` and `const`.
  - ✅ `for...of` loops.
  - ✅ Arrow functions (`() => {}`).
  - ✅ External npm module imports (`import isEven from "is-even";`).
  - ❌ **No** `Object.entries()`, `Promise`, `async/await`, `setInterval`, `setTimeout` (for now).

However, if you **upload scripts directly** without using the setup wizard, they **must be written in ES5**. This means:

- ❌ **No TypeScript or IntelliSense** – No function suggestions or error checking.
- ❌ **No modern JavaScript features** – Use only ES5 syntax:
  - ❌ **No** `let` (use `var` instead).
  - ❌ **No** `for...of` loops (use traditional `for` loops with indexes).
  - ❌ **No** Arrow functions `() => {}` (use `function` instead).
  - ❌ **No** `import ir from 'ir'` import syntax use `const ir = require('ir');` instead.
  - ❌ **No** External npm module imports.
  - ❌ **No** `Object.entries()`, `Promise`, `async/await`, `setInterval`, `setTimeout` (for now).

### Uploading Your Scripts to Bruce

When uploading scripts to Bruce, keep in mind:

- **Only JavaScript (`.js`) files can be uploaded.**
- If you have **TypeScript (`.ts`)** files, you must first **compile it to JavaScript** (`.js`).
- The setup wizard automatically compiles TypeScript to JavaScript when you build your project. The `.js` file will be in `bundle/` folder.

If you need **TypeScript** or **modern JavaScript features**, always create your project using the setup wizard.

## Documentation

https://github.com/Tawank/bruce-js-tooling/blob/master/packages/bruce-sdk/DOCS.md