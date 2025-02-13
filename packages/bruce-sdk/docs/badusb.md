# badusb

Simulates USB keyboard input.

### Example

```js
const badusb = require("badusb");

badusb.setup();
badusb.press(0x04); // Presses the 'A' key
badusb.release(0x04); // Releases the 'A' key
badusb.println("Hello, world!"); // Types and presses Enter
```

<!-- index-start -->
## badusb functions

- [badusb.setup()](#badusbsetup)
- [badusb.press()](#badusbpress)
- [badusb.pressRaw()](#badusbpressraw)
- [badusb.hold()](#badusbhold)
- [badusb.release()](#badusbrelease)
- [badusb.releaseAll()](#badusbreleaseall)
- [badusb.print()](#badusbprint)
- [badusb.println()](#badusbprintln)
- [badusb.runFile()](#badusbrunfile)
<!-- index-end -->

## badusb.setup()

```ts
badusb.setup(): void;
```

Initializes the BadUSB module.

### Returns

`void`

---

## badusb.press()

```ts
badusb.press(keycode: number): void;
```

Simulates pressing a key using a keycode.

### Parameters

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `keycode` | `number` | HID keycode of the key to press. |

### Returns

`void`

---

## badusb.pressRaw()

```ts
badusb.pressRaw(hid_key: number): void;
```

Simulates pressing a key using a raw HID key value.

### Parameters

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| `hid_key` | `number` | Raw HID key value. |

### Returns

`void`

---

## badusb.hold()

```ts
badusb.hold(keycode: number): void;
```

Simulates holding down a key.

### Parameters

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| `keycode` | `number` | HID keycode of the key to hold. |

### Returns

`void`

---

## badusb.release()

```ts
badusb.release(keycode: number): void;
```

Releases a previously pressed key.

### Parameters

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| `keycode` | `number` | HID keycode of the key to release. |

### Returns

`void`

---

## badusb.releaseAll()

```ts
badusb.releaseAll(): void;
```

Releases all currently held keys.

### Returns

`void`

---

## badusb.print()

```ts
badusb.print(message: string): void;
```

Types a string as keyboard input.

### Parameters

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `message` | `string` | The text to type. |

### Returns

`void`

---

## badusb.println()

```ts
badusb.println(message: string): void;
```

Types a string followed by an "Enter" key press.

### Parameters

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `message` | `string` | The text to type. |

### Returns

`void`

---

## badusb.runFile()

```ts
badusb.runFile(filename: string): void;
```

Executes a script file from storage.

### Parameters

| Parameter  | Type     | Description                  |
| ---------- | -------- | ---------------------------- |
| `filename` | `string` | The path to the script file. |

### Returns

`void`
