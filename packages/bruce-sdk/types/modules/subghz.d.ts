/**
 * Sub-GHz communication.
 *
 * This module allows interaction with Sub-GHz frequencies for reading and transmitting data.
 *
 * ### Example
 * ```js
 * const subghz = require("subghz");
 *
 * // Set frequency to 433 MHz
 * subghz.setFrequency(433);
 *
 * // Read incoming signal for 5 seconds
 * const receivedData = subghz.read(5);
 * console.log("Received Data:", receivedData);
 *
 * // Transmit a stored signal file
 * const success = subghz.transmitFile("/plug1_on.sub");
 * if (success) {
 *   console.log("Transmission successful!");
 * }
 * ```
 *
 * @module subghz
 */
declare module 'subghz' {
  /**
   * Sets the frequency for Sub-GHz communication.
   * @param freq Frequency in MHz (e.g., 433 for 433 MHz).
   */
  export function setFrequency(freq: number): void;

  /**
   * Reads an incoming signal.
   * @param timeoutSeconds Maximum time in seconds to wait for a signal.
   * @returns The received signal as a string.
   */
  export function read(timeoutSeconds: number): string;

  /**
   * Reads raw incoming signal data.
   * @param timeoutSeconds Maximum time in seconds to wait for a signal.
   * @returns The raw received signal as a string.
   */
  export function readRaw(timeoutSeconds: number): string;

  /**
   * Transmits a saved signal from a file.
   * @param filename The path to the file containing the signal to transmit.
   * @returns `true` if the transmission was successful, otherwise `false`.
   */
  export function transmitFile(filename: string): boolean;
}
