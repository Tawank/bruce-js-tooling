# ir

Interacting with infrared (IR) signals.

### Example

```js
const ir = require("ir");

const signal = ir.read(5); // Waits up to 5 seconds for an IR signal
console.log("Received IR signal:", signal);

const rawSignal = ir.readRaw(5);
console.log("Received raw IR signal:", rawSignal);

const success = ir.transmitFile("/signals/power_on.ir");
console.log("Transmission successful:", success);
```

<!-- index-start -->
## ir functions

- [ir.read()](#irread)
- [ir.readRaw()](#irreadraw)
- [ir.transmitFile()](#irtransmitfile)
<!-- index-end -->

## ir.read()

```ts
ir.read(timeoutSeconds: number): string;
```

Reads an infrared signal within a given timeout.

### Parameters

| Parameter        | Type     | Description                  |
| ---------------- | -------- | ---------------------------- |
| `timeoutSeconds` | `number` | Timeout duration in seconds. |

### Returns

`string`

The received IR signal as a string.

---

## ir.readRaw()

```ts
ir.readRaw(timeoutSeconds: number): string;
```

Reads an infrared signal in raw format within a given timeout.

### Parameters

| Parameter        | Type     | Description                  |
| ---------------- | -------- | ---------------------------- |
| `timeoutSeconds` | `number` | Timeout duration in seconds. |

### Returns

`string`

The raw received IR signal as a string.

---

## ir.transmitFile()

```ts
ir.transmitFile(path: string): boolean;
```

Transmits an infrared signal stored in a file.

### Parameters

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| `path`    | `string` | Path to the IR signal file. |

### Returns

`boolean`

`true` if the transmission was successful, otherwise `false`.
