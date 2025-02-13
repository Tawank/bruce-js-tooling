/**
 * Interacting with infrared (IR) signals.
 *
 * ### Example
 * ```js
 * const ir = require("ir");
 *
 * const signal = ir.read(5); // Waits up to 5 seconds for an IR signal
 * console.log("Received IR signal:", signal);
 *
 * const rawSignal = ir.readRaw(5);
 * console.log("Received raw IR signal:", rawSignal);
 *
 * const success = ir.transmitFile("/signals/power_on.ir");
 * console.log("Transmission successful:", success);
 * ```
 *
 * @module ir
 */
declare module 'ir' {
  /**
   * Reads an infrared signal within a given timeout.
   * @param timeoutSeconds Timeout duration in seconds.
   * @returns The received IR signal as a string.
   */
  export function read(timeoutSeconds: number): string;

  /**
   * Reads an infrared signal in raw format within a given timeout.
   * @param timeoutSeconds Timeout duration in seconds.
   * @returns The raw received IR signal as a string.
   */
  export function readRaw(timeoutSeconds: number): string;

  /**
   * Transmits an infrared signal stored in a file.
   * @param path Path to the IR signal file.
   * @returns `true` if the transmission was successful, otherwise `false`.
   */
  export function transmitFile(path: string): boolean;
}
