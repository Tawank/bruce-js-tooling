/**
 * Simulates USB keyboard input.
 *
 * ### Example
 * ```js
 * const badusb = require("badusb");
 *
 * badusb.setup();
 * badusb.press(0x04); // Presses the 'A' key
 * badusb.release(0x04); // Releases the 'A' key
 * badusb.println("Hello, world!"); // Types and presses Enter
 * ```
 *
 * @module badusb
 */
declare module 'badusb' {
  /**
   * Initializes the BadUSB module.
   */
  export function setup(): void;

  /**
   * Simulates pressing a key using a keycode.
   *
   * @param keycode HID keycode of the key to press.
   */
  export function press(keycode: number): void;

  /**
   * Simulates pressing a key using a raw HID key value.
   *
   * @param hid_key Raw HID key value.
   */
  export function pressRaw(hid_key: number): void;

  /**
   * Simulates holding down a key.
   *
   * @param keycode HID keycode of the key to hold.
   */
  export function hold(keycode: number): void;

  /**
   * Releases a previously pressed key.
   *
   * @param keycode HID keycode of the key to release.
   */
  export function release(keycode: number): void;

  /**
   * Releases all currently held keys.
   */
  export function releaseAll(): void;

  /**
   * Types a string as keyboard input.
   *
   * @param message The text to type.
   */
  export function print(message: string): void;

  /**
   * Types a string followed by an "Enter" key press.
   *
   * @param message The text to type.
   */
  export function println(message: string): void;

  /**
   * Executes a script file from storage.
   *
   * @param filename The path to the script file.
   */
  export function runFile(filename: string): void;
}
