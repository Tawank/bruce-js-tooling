# device

Show device information.

### Example

```js
const device = require("device");

console.log("Device Name:", device.getName());
console.log("Board:", device.getBoard());
console.log("Model:", device.getModel());
console.log("Battery Charge:", device.getBatteryCharge(), "%");

const memoryStats = device.getFreeHeapSize();
console.log("RAM Free:", memoryStats.ram_free);
console.log("PSRAM Free:", memoryStats.psram_free);
```

<!-- index-start -->
## device functions

- [device.getName()](#devicegetname)
- [device.getBoard()](#devicegetboard)
- [device.getModel()](#devicegetmodel)
- [device.getBatteryCharge()](#devicegetbatterycharge)
- [device.getFreeHeapSize()](#devicegetfreeheapsize)
<!-- index-end -->

## device.getName()

```ts
device.getName(): string;
```

Retrieves the device's name.

### Returns

`string`

The name of the device.

---

## device.getBoard()

```ts
device.getBoard(): string;
```

Retrieves the board type.

### Returns

`string`

The board identifier.

---

## device.getModel()

```ts
device.getModel(): string;
```

Retrieves the model name.

### Returns

`string`

The model of the device.

---

## device.getBatteryCharge()

```ts
device.getBatteryCharge(): number;
```

Retrieves the current battery charge level.

### Returns

`number`

The battery charge percentage (0-100).

---

## device.getFreeHeapSize()

```ts
device.getFreeHeapSize(): {
  ram_free: number;
  ram_min_free: number;
  ram_largest_free_block: number;
  ram_size: number;
  psram_free: number;
  psram_size: number;
};
```

Retrieves information about the device's memory usage.

### Returns

```ts
{
  ram_free: number;
  ram_min_free: number;
  ram_largest_free_block: number;
  ram_size: number;
  psram_free: number;
  psram_size: number;
}
```

An object containing RAM and PSRAM statistics:

- `ram_free`: Free RAM available (in bytes).
- `ram_min_free`: Minimum free RAM recorded (in bytes).
- `ram_largest_free_block`: Largest contiguous free RAM block (in bytes).
- `ram_size`: Total RAM size (in bytes).
- `psram_free`: Free PSRAM available (in bytes).
- `psram_size`: Total PSRAM size (in bytes).

| Name                     | Type     |
| ------------------------ | -------- |
| `ram_free`               | `number` |
| `ram_min_free`           | `number` |
| `ram_largest_free_block` | `number` |
| `ram_size`               | `number` |
| `psram_free`             | `number` |
| `psram_size`             | `number` |
