# serial

Serial communication.

### Example

```js
const serial = require("serial");

serial.println("Hello, Serial Port!");
const input = serial.readln();
console.log("Received:", input);
```

<!-- index-start -->
## serial functions

- [serial.print()](#serialprint)
- [serial.println()](#serialprintln)
- [serial.readln()](#serialreadln)
- [serial.cmd()](#serialcmd)
<!-- index-end -->

## serial.print()

```ts
serial.print(...args: any[]): void;
```

Sends a message over the serial connection without a newline.

### Parameters

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| ...`args` | `any`[] | The values to print. |

### Returns

`void`

---

## serial.println()

```ts
serial.println(...args: any[]): void;
```

Sends a message over the serial connection with a newline at the end.

### Parameters

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| ...`args` | `any`[] | The values to print. |

### Returns

`void`

---

## serial.readln()

```ts
serial.readln(timeoutInMiliseconds?: number): string;
```

Reads a line of input from the serial connection.

### Parameters

| Parameter               | Type     | Description                                                        |
| ----------------------- | -------- | ------------------------------------------------------------------ |
| `timeoutInMiliseconds`? | `number` | The time (in miliseconds) to wait for a connection before failing. |

### Returns

`string`

The received string.

---

## serial.cmd()

```ts
serial.cmd(command: string): boolean;
```

Executes a serial command list: https://github.com/pr3y/Bruce/wiki/Serial.

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `command` | `string` |

### Returns

`boolean`

`true` if the command was successful, otherwise `false`.
