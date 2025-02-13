# subghz

Sub-GHz communication.

This module allows interaction with Sub-GHz frequencies for reading and transmitting data.

### Example

```js
const subghz = require("subghz");

// Set frequency to 433 MHz
subghz.setFrequency(433);

// Read incoming signal for 5 seconds
const receivedData = subghz.read(5);
console.log("Received Data:", receivedData);

// Transmit a stored signal file
const success = subghz.transmitFile("/plug1_on.sub");
if (success) {
  console.log("Transmission successful!");
}
```

<!-- index-start -->
## subghz functions

- [subghz.setFrequency()](#subghzsetfrequency)
- [subghz.read()](#subghzread)
- [subghz.readRaw()](#subghzreadraw)
- [subghz.transmitFile()](#subghztransmitfile)
<!-- index-end -->

## subghz.setFrequency()

```ts
subghz.setFrequency(freq: number): void;
```

Sets the frequency for Sub-GHz communication.

### Parameters

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| `freq`    | `number` | Frequency in MHz (e.g., 433 for 433 MHz). |

### Returns

`void`

---

## subghz.read()

```ts
subghz.read(timeoutSeconds: number): string;
```

Reads an incoming signal.

### Parameters

| Parameter        | Type     | Description                                   |
| ---------------- | -------- | --------------------------------------------- |
| `timeoutSeconds` | `number` | Maximum time in seconds to wait for a signal. |

### Returns

`string`

The received signal as a string.

---

## subghz.readRaw()

```ts
subghz.readRaw(timeoutSeconds: number): string;
```

Reads raw incoming signal data.

### Parameters

| Parameter        | Type     | Description                                   |
| ---------------- | -------- | --------------------------------------------- |
| `timeoutSeconds` | `number` | Maximum time in seconds to wait for a signal. |

### Returns

`string`

The raw received signal as a string.

---

## subghz.transmitFile()

```ts
subghz.transmitFile(filename: string): boolean;
```

Transmits a saved signal from a file.

### Parameters

| Parameter  | Type     | Description                                             |
| ---------- | -------- | ------------------------------------------------------- |
| `filename` | `string` | The path to the file containing the signal to transmit. |

### Returns

`boolean`

`true` if the transmission was successful, otherwise `false`.
