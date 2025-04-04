# Bruce JavaScript tooling

The Bruce JavaScript tooling provides tools and type definitions to help you build applications for the Bruce platform.

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

### Code Examples in Documentation

- **All code examples in this documentation will run directly on Bruce.** No need to compile it.

## Documentation

https://github.com/Tawank/bruce-js-tooling/blob/master/packages/bruce-sdk/DOCS.md

## Modules

| Module                          | Description                                           |
| ------------------------------- | ----------------------------------------------------- |
| [globals](globals.md)           | Global variables and functions available in bruce js. |
| [audio](audio.md)               | Controls the audio.                                   |
| [badusb](badusb.md)             | Simulates USB keyboard input.                         |
| [device](device.md)             | Show device information.                              |
| [dialog](dialog.md)             | Displays dialog messages and user interactions.       |
| [display](display.md)           | Controls the TFT Display                              |
| [gpio](gpio.md)                 | GPIO (General Purpose Input/Output) ports             |
| [ir](ir.md)                     | Interacting with infrared (IR) signals.               |
| [keyboard](keyboard.md)         | Access the keyboard input.                            |
| [notification](notification.md) | Controls the notification LED.                        |
| [serial](serial.md)             | Serial communication.                                 |
| [storage](storage.md)           | File storage operations.                              |
| [subghz](subghz.md)             | Sub-GHz communication.                                |
| [wifi](wifi.md)                 | Wi-Fi connection and HTTP requests.                   |
