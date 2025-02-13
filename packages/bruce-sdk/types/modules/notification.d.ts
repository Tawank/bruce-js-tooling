/**
 * Controls the notification LED.
 *
 * ### Example
 * ```js
 * const notification = require("notification");
 *
 * notification.blink(200); // Blinks the LED for 200ms
 * delay(1000);
 * notification.blink("short"); // Blinks using a predefined short duration
 * ```
 *
 * @module notification
 */
declare module 'notification' {
  /**
   * Blinks the notification LED for a specified duration.
   *
   * This function turns the LED on, waits for the given duration, and then turns it off.
   * Equivalent to:
   * ```js
   * digitalWrite(19, HIGH);
   * delay(ms);
   * digitalWrite(19, LOW);
   * ```
   *
   * @param durationMs Duration in milliseconds for how long the LED should blink.
   */
  export function blink(durationMs: number | 'short' | 'long'): void;
}
