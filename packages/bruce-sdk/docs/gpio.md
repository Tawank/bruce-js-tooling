# gpio

GPIO (General Purpose Input/Output) ports

### Example

```js
const gpio = require("gpio");

const led = 26;
gpio.init(led, OUTPUT);

gpio.write(led, HIGH);
delay(1000);
gpio.write(led, LOW);
delay(1000);
```

<!-- index-start -->
## gpio functions

- [gpio.pinMode()](#gpiopinmode)
- [gpio.digitalWrite()](#gpiodigitalwrite)
- [gpio.digitalRead()](#gpiodigitalread)
- [gpio.analogWrite()](#gpioanalogwrite)
- [gpio.analogRead()](#gpioanalogread)
- [gpio.touchRead()](#gpiotouchread)
- [gpio.dacWrite()](#gpiodacwrite)
- [gpio.ledcSetup()](#gpioledcsetup)
- [gpio.ledcAttachPin()](#gpioledcattachpin)
- [gpio.ledcWrite()](#gpioledcwrite)
<!-- index-end -->

## gpio.pinMode()

```ts
gpio.pinMode(pin: string | number, mode: Mode): void;
```

Configures the specified pin mode.

### Parameters

| Parameter | Type                 | Description                                    |
| --------- | -------------------- | ---------------------------------------------- |
| `pin`     | `string` \| `number` | GPIO pin number or name (e.g., `26` or "G26"). |
| `mode`    | `Mode`               | Pin mode (`INPUT`, `OUTPUT`, `PULLUP`, etc.).  |

### Returns

`void`

---

## gpio.digitalWrite()

```ts
gpio.digitalWrite(pin: string | number, value: boolean | PinValue): void;
```

Writes a digital value to a pin.

### Parameters

| Parameter | Type                    | Description                     |
| --------- | ----------------------- | ------------------------------- |
| `pin`     | `string` \| `number`    | GPIO pin number or name.        |
| `value`   | `boolean` \| `PinValue` | `HIGH`/`LOW` or `true`/`false`. |

### Returns

`void`

---

## gpio.digitalRead()

```ts
gpio.digitalRead(pin: string | number): number;
```

Reads the digital state of a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |

### Returns

`number`

`1` for HIGH, `0` for LOW.

---

## gpio.analogWrite()

```ts
gpio.analogWrite(pin: string | number, value: number): void;
```

Writes an analog value (PWM) to a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |
| `value`   | `number`             | PWM duty cycle (0-255).  |

### Returns

`void`

---

## gpio.analogRead()

```ts
gpio.analogRead(pin: string | number): number;
```

Reads the analog value from a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |

### Returns

`number`

Analog value (0-4095 for ADC1, varies for ADC2).

---

## gpio.touchRead()

```ts
gpio.touchRead(pin: string | number): number;
```

Reads the capacitive touch sensor value from a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |

### Returns

`number`

Touch sensor value.

---

## gpio.dacWrite()

```ts
gpio.dacWrite(pin: string | number, value: number): void;
```

Writes a DAC (Digital-to-Analog) value to a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |
| `value`   | `number`             | DAC value (0-255).       |

### Returns

`void`

---

## gpio.ledcSetup()

```ts
gpio.ledcSetup(
  channel: number,
  freq: number,
  resolution_bits: number,
): number;
```

Configures an LEDC (PWM) channel with a specific frequency and resolution.

### Parameters

| Parameter         | Type     | Description                                        |
| ----------------- | -------- | -------------------------------------------------- |
| `channel`         | `number` | LEDC channel number (0–15).                        |
| `freq`            | `number` | PWM frequency in Hz.                               |
| `resolution_bits` | `number` | Resolution (1–16 bits, defining duty cycle range). |

### Returns

`number`

The actual frequency set.

---

## gpio.ledcAttachPin()

```ts
gpio.ledcAttachPin(pin: number, channel: number): number;
```

Attaches a GPIO pin to an LEDC (PWM) channel.

### Parameters

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| `pin`     | `number` | GPIO pin number.            |
| `channel` | `number` | LEDC channel number (0–15). |

### Returns

`number`

`0` on success, non-zero on failure.

---

## gpio.ledcWrite()

```ts
gpio.ledcWrite(channel: number, duty: number): number;
```

Sets the PWM duty cycle for a specific LEDC (PWM) channel.

### Parameters

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| `channel` | `number` | LEDC channel number (0–15).                |
| `duty`    | `number` | Duty cycle (0 to `2^resolution_bits - 1`). |

### Returns

`number`

`0` on success, non-zero on failure.
