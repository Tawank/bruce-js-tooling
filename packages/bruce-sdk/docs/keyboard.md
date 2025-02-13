# keyboard

Access the keyboard input.

### Example

```js
const keyboard = require("keyboard");

while (true) {
  if (keyboard.getAnyPress()) {
    break; // Exits the loop when a button is pressed.
  }
}
```

<!-- index-start -->
## keyboard functions

- [keyboard.getKeysPressed()](#keyboardgetkeyspressed)
- [keyboard.getPrevPress()](#keyboardgetprevpress)
- [keyboard.getSelPress()](#keyboardgetselpress)
- [keyboard.getNextPress()](#keyboardgetnextpress)
- [keyboard.getAnyPress()](#keyboardgetanypress)
- [keyboard.keyboard()](#keyboardkeyboard)
<!-- index-end -->

## keyboard.getKeysPressed()

```ts
keyboard.getKeysPressed(): string[];
```

Gets a list of currently pressed keys.

### Returns

`string`[]

An array of key names.

---

## keyboard.getPrevPress()

```ts
keyboard.getPrevPress(): boolean;
```

Checks if the "previous" button was pressed.

### Returns

`boolean`

`true` if the button was pressed, otherwise `false`.

---

## keyboard.getSelPress()

```ts
keyboard.getSelPress(): boolean;
```

Checks if the "select" button was pressed.

### Returns

`boolean`

`true` if the button was pressed, otherwise `false`.

---

## keyboard.getNextPress()

```ts
keyboard.getNextPress(): boolean;
```

Checks if the "next" button was pressed.

### Returns

`boolean`

`true` if the button was pressed, otherwise `false`.

---

## keyboard.getAnyPress()

```ts
keyboard.getAnyPress(): boolean;
```

Checks if any button was pressed.

### Returns

`boolean`

`true` if any button was pressed, otherwise `false`.

---

## keyboard.keyboard()

```ts
keyboard.keyboard(title: string, valueLength: number, value: string): void;
```

Opens an on-screen keyboard for user input.

### Parameters

| Parameter     | Type     | Description                        |
| ------------- | -------- | ---------------------------------- |
| `title`       | `string` | Title of the keyboard prompt.      |
| `valueLength` | `number` | Maximum length of the input value. |
| `value`       | `string` | Initial value to display.          |

### Returns

`void`
