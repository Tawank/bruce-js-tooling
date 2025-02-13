/**
 * Serial communication.
 *
 * ### Example
 * ```js
 * const serial = require("serial");
 *
 * serial.println("Hello, Serial Port!");
 * const input = serial.readln();
 * console.log("Received:", input);
 * ```
 *
 * @module serial
 */
declare module 'serial' {
  /**
   * Sends a message over the serial connection without a newline.
   * @param args The values to print.
   */
  export function print(...args: any[]): void;

  /**
   * Sends a message over the serial connection with a newline at the end.
   * @param args The values to print.
   */
  export function println(...args: any[]): void;

  /**
   * Reads a line of input from the serial connection.
   * @returns The received string.
   */
  export function readln(): string;
}
