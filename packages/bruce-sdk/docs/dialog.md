# dialog

Displays dialog messages and user interactions.

### Example

```js
const dialog = require("dialog");

dialog.success("Operation completed successfully.");
dialog.error("An error occurred!", true);

const options = ["Yes", "No", "Cancel"];
const selected = dialog.choice(options);

const filePath = dialog.pickFile("/documents", "txt");
dialog.viewFile(filePath);
```

<!-- index-start -->
## dialog functions

- [dialog.drawStatusBar()](#dialogdrawstatusbar)
- [dialog.message()](#dialogmessage)
- [dialog.info()](#dialoginfo)
- [dialog.success()](#dialogsuccess)
- [dialog.warning()](#dialogwarning)
- [dialog.error()](#dialogerror)
- [dialog.choice()](#dialogchoice)
- [dialog.pickFile()](#dialogpickfile)
- [dialog.prompt()](#dialogprompt)
- [dialog.viewFile()](#dialogviewfile)
- [dialog.viewText()](#dialogviewtext)
- [dialog.createTextViewer()](#dialogcreatetextviewer)
<!-- index-end -->

## dialog.drawStatusBar()

```ts
dialog.drawStatusBar(): void;
```

Draws Bruce's status bar

### Returns

`void`

---

## dialog.message()

```ts
dialog.message(
  message: string,
  buttons?: {
    left: string;
    center: string;
    right: string;
  },
): void | "left" | "center" | "right";
```

Displays a message dialog with up to three choices.

### Example

```js
const dialog = require("dialog");
dialog.message("Hello!"); // Just displays the message
dialog.message("Press any key...", true); // Blocks until a key is pressed
const choice = dialog.message("Choose:", {
  left: "No",
  center: "Maybe",
  right: "Yes",
});
if (choice === "right") console.log("User chose Yes!");
```

### Parameters

| Parameter         | Type                                                           | Description                                                                                                                        |
| ----------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `message`         | `string`                                                       | The message to display.                                                                                                            |
| `buttons`?        | \{ `left`: `string`; `center`: `string`; `right`: `string`; \} | If `true`, waits for a key press before closing (default: `false`). If an object, displays up to three buttons with custom labels. |
| `buttons.left`?   | `string`                                                       | -                                                                                                                                  |
| `buttons.center`? | `string`                                                       | -                                                                                                                                  |
| `buttons.right`?  | `string`                                                       | -                                                                                                                                  |

### Returns

`void` \| `"left"` \| `"center"` \| `"right"`

The button pressed (`"left"`, `"center"`, or `"right"`), or `void` if no buttons are used.

---

## dialog.info()

```ts
dialog.info(message: string, waitForKeyPress?: boolean): void;
```

Displays an info notification (Blue background).

### Example

```js
const dialog = require("dialog");
dialog.info("Operation completed successfully.");
```

### Parameters

| Parameter          | Type      | Description                                                         |
| ------------------ | --------- | ------------------------------------------------------------------- |
| `message`          | `string`  | The info message to display.                                        |
| `waitForKeyPress`? | `boolean` | If `true`, waits for a key press before closing (default: `false`). |

### Returns

`void`

---

## dialog.success()

```ts
dialog.success(message: string, waitForKeyPress?: boolean): void;
```

Displays an success notification (Green background).

### Example

```js
const dialog = require("dialog");
dialog.success("Operation completed successfully.");
```

### Parameters

| Parameter          | Type      | Description                                                         |
| ------------------ | --------- | ------------------------------------------------------------------- |
| `message`          | `string`  | The success message to display.                                     |
| `waitForKeyPress`? | `boolean` | If `true`, waits for a key press before closing (default: `false`). |

### Returns

`void`

---

## dialog.warning()

```ts
dialog.warning(message: string, waitForKeyPress?: boolean): void;
```

Displays an warning notification (Yellow background).

### Example

```js
const dialog = require("dialog");
dialog.warning("Warning!");
```

### Parameters

| Parameter          | Type      | Description                                                         |
| ------------------ | --------- | ------------------------------------------------------------------- |
| `message`          | `string`  | The warning message to display.                                     |
| `waitForKeyPress`? | `boolean` | If `true`, waits for a key press before closing (default: `false`). |

### Returns

`void`

---

## dialog.error()

```ts
dialog.error(message: string, waitForKeyPress?: boolean): void;
```

Displays an error notification (Red background).

### Example

```js
const dialog = require("dialog");
dialog.error("An error occurred!", true);
```

### Parameters

| Parameter          | Type      | Description                                                         |
| ------------------ | --------- | ------------------------------------------------------------------- |
| `message`          | `string`  | The error message to display.                                       |
| `waitForKeyPress`? | `boolean` | If `true`, waits for a key press before closing (default: `false`). |

### Returns

`void`

---

## dialog.choice()

```ts
dialog.choice(
  values: string[] | [string, string][] | {} | string[][],
): string;
```

Displays a choice dialog and returns the selected option.

### Example

```js
const dialog = require("dialog");
const options = ["Yes", "No", "Cancel"];
const selected = dialog.choice(options);
console.log("Selected:", selected); // it should print "Yes", "No" or "Cancel"

const optionsNestedArray = [
  ["Go Back", "go_back"],
  ["Cancel", "cancel"],
  ["Quit", "quit"],
];
const selectedNestedArray = dialog.choice(optionsNestedArray);
console.log("selectedNestedArray:", selectedNestedArray); // it should print "go_back", "cancel" or "quit"

const optionsObject = { "Go Back": "go_back", Cancel: "cancel", Quit: "quit" };
const selectedObject = dialog.choice(optionsObject);
console.log("selectedObject:", selectedObject); // it should print "go_back", "cancel" or "quit"
```

### Parameters

| Parameter | Type                                                           | Description                                                             |
| --------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `values`  | `string`[] \| \[`string`, `string`\][] \| \{\} \| `string`[][] | An array of options to choose from. Can also be nested array or object. |

### Returns

`string`

The selected option as a string.

---

## dialog.pickFile()

```ts
dialog.pickFile(path?: string, extension?: string): string;
```

Opens a file picker dialog and returns the selected file path.

### Example

```js
const dialog = require("dialog");
const filePath = dialog.pickFile("/documents", "txt");
dialog.viewFile(filePath);
```

### Parameters

| Parameter    | Type     | Description                            |
| ------------ | -------- | -------------------------------------- |
| `path`?      | `string` | The initial directory path (optional). |
| `extension`? | `string` | The file extension filter (optional).  |

### Returns

`string`

The selected file path or `null` if no file is chosen.

---

## dialog.prompt()

```ts
dialog.prompt(title?: string, valueLength?: number, value?: string): string;
```

Opens an on-screen keyboard for user input.

### Parameters

| Parameter      | Type     | Description                        |
| -------------- | -------- | ---------------------------------- |
| `title`?       | `string` | Title of the keyboard prompt.      |
| `valueLength`? | `number` | Maximum length of the input value. |
| `value`?       | `string` | Initial value to display.          |

### Returns

`string`

User input.

---

## dialog.viewFile()

```ts
dialog.viewFile(path: string): void;
```

Opens and displays a file in a viewer.
Displays a window where the user can scroll and exit.
Blocks execution until the user exits.

### Example

```js
const dialog = require("dialog");
const filePath = dialog.pickFile("/documents", "txt");
dialog.viewFile(filePath);
```

### Parameters

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| `path`    | `string` | The file path to view. |

### Returns

`void`

---

## dialog.viewText()

```ts
dialog.viewText(text: string, title?: string): void;
```

Opens and displays text in a viewer.
Displays a window where the user can scroll and exit.
Blocks execution until the user exits.

### Example

```js
const dialog = require("dialog");
dialog.viewText("text to display");
```

### Parameters

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| `text`    | `string` | The text to view.                        |
| `title`?  | `string` | The optional title of the viewer window. |

### Returns

`void`

---

## dialog.createTextViewer()

```ts
dialog.createTextViewer(
  text: string,
  options?: {
    fontSize: number;
    startX: number;
    startY: number;
    width: number;
    height: number;
    indentWrappedLines: boolean;
  },
): TextViewer;
```

Creates a `TextViewer` instance, allowing manual control.
Unlike `viewText`, this does **not** block execution.
You must handle scrolling and closing yourself.
Thanks to this you can implement: scrolling to section,
follow links in text, and much more.
You can find example of the implementation here:
https://github.com/Tawank/bruce-js-tooling/tree/master/examples/browser-bruce

### Example

```js
const dialog = require("dialog");
const textViewer = dialog.createTextViewer("long text");
while (true) {
  if (keyboard.getPrevPress()) {
    textViewer.scrollUp();
  }
  if (keyboard.getNextPress()) {
    textViewer.scrollDown();
  }
  textViewer.draw();
  delay(100);
}
```

### Parameters

| Parameter                     | Type                                                                                                                                        | Description              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `text`                        | `string`                                                                                                                                    | The text to view.        |
| `options`?                    | \{ `fontSize`: `number`; `startX`: `number`; `startY`: `number`; `width`: `number`; `height`: `number`; `indentWrappedLines`: `boolean`; \} | The text viewer options. |
| `options.fontSize`?           | `number`                                                                                                                                    | -                        |
| `options.startX`?             | `number`                                                                                                                                    | -                        |
| `options.startY`?             | `number`                                                                                                                                    | -                        |
| `options.width`?              | `number`                                                                                                                                    | -                        |
| `options.height`?             | `number`                                                                                                                                    | -                        |
| `options.indentWrappedLines`? | `boolean`                                                                                                                                   | -                        |

### Returns

`TextViewer`

A `TextViewer` instance with manual controls.
