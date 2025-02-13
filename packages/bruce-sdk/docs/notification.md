# notification

Controls the notification LED.

### Example

```js
const notification = require("notification");

notification.blink(200); // Blinks the LED for 200ms
delay(1000);
notification.blink("short"); // Blinks using a predefined short duration
```

<!-- index-start -->
## notification functions

- [notification.blink()](#notificationblink)
<!-- index-end -->

## notification.blink()

```ts
notification.blink(durationMs: number | "short" | "long"): void;
```

Blinks the notification LED for a specified duration.

This function turns the LED on, waits for the given duration, and then turns it off.
Equivalent to:

```js
digitalWrite(19, HIGH);
delay(ms);
digitalWrite(19, LOW);
```

### Parameters

| Parameter    | Type                              | Description                                                 |
| ------------ | --------------------------------- | ----------------------------------------------------------- |
| `durationMs` | `number` \| `"short"` \| `"long"` | Duration in milliseconds for how long the LED should blink. |

### Returns

`void`
