# dialog

Displays dialog messages and user interactions.

### Example

```js
const dialog = require("dialog");

dialog.message("Operation completed successfully.");
dialog.error("An error occurred!", true);

const options = ["Yes", "No", "Cancel"];
const selected = dialog.choice(options);

const filePath = dialog.pickFile("/documents", "txt");
dialog.viewFile(filePath);
```

<!-- index-start -->
## dialog functions

- [dialog.message()](#dialogmessage)
- [dialog.error()](#dialogerror)
- [dialog.choice()](#dialogchoice)
- [dialog.pickFile()](#dialogpickfile)
- [dialog.prompt()](#dialogprompt)
- [dialog.viewFile()](#dialogviewfile)
- [dialog.viewText()](#dialogviewtext)
- [dialog.createTextViewer()](#dialogcreatetextviewer)
<!-- index-end -->

## dialog.message()

```ts
dialog.message(
  message: string,
  options?:
    | boolean
    | {
        left: string;
        center: string;
        right: string;
      },
): void | "left" | "center" | "right";
```

Displays a message dialog.

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

| Parameter  | Type                                                                           | Description                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `message`  | `string`                                                                       | The message to display.                                                                                                            |
| `options`? | \| `boolean` \| \{ `left`: `string`; `center`: `string`; `right`: `string`; \} | If `true`, waits for a key press before closing (default: `false`). If an object, displays up to three buttons with custom labels. |

### Returns

`void` \| `"left"` \| `"center"` \| `"right"`

The button pressed (`"left"`, `"center"`, or `"right"`), or `void` if no buttons are used.

---

## dialog.error()

```ts
dialog.error(message: string, waitForKeyPress?: boolean): void;
```

Displays an error dialog.

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
dialog.choice(values: string[] | {}): string;
```

Displays a choice dialog and returns the selected option.

### Parameters

| Parameter | Type               | Description                         |
| --------- | ------------------ | ----------------------------------- |
| `values`  | `string`[] \| \{\} | An array of options to choose from. |

### Returns

`string`

The selected option as a string.

---

## dialog.pickFile()

```ts
dialog.pickFile(path?: string, extension?: string): string;
```

Opens a file picker dialog and returns the selected file path.

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
dialog.prompt(title: string, valueLength: number, value: string): string;
```

Opens an on-screen keyboard for user input.

### Parameters

| Parameter     | Type     | Description                        |
| ------------- | -------- | ---------------------------------- |
| `title`       | `string` | Title of the keyboard prompt.      |
| `valueLength` | `number` | Maximum length of the input value. |
| `value`       | `string` | Initial value to display.          |

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
  },
): TextViewer;
```

Creates a `TextViewer` instance, allowing manual control.
Unlike `viewText`, this does **not** block execution.
You must handle scrolling and closing yourself.

### Parameters

| Parameter           | Type                                                                                                       | Description              |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------ |
| `text`              | `string`                                                                                                   | The text to view.        |
| `options`?          | \{ `fontSize`: `number`; `startX`: `number`; `startY`: `number`; `width`: `number`; `height`: `number`; \} | The text viewer options. |
| `options.fontSize`? | `number`                                                                                                   | -                        |
| `options.startX`?   | `number`                                                                                                   | -                        |
| `options.startY`?   | `number`                                                                                                   | -                        |
| `options.width`?    | `number`                                                                                                   | -                        |
| `options.height`?   | `number`                                                                                                   | -                        |

### Returns

[`TextViewer`](dialog.md#textviewer)

A `TextViewer` instance with manual controls.
