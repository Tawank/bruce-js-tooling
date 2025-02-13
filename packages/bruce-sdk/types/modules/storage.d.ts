/**
 * File storage operations.
 *
 * ### Example
 * ```js
 * const storage = require("storage");
 *
 * // Write data to a file
 * const success = storage.write("/data/log.txt", "Hello, world!");
 * if (success) {
 *   console.log("File written successfully!");
 * }
 *
 * // Read data from a file
 * const content = storage.read("/data/log.txt");
 * console.log("File content:", content);
 * ```
 *
 * @module storage
 */
declare module 'storage' {
  /**
   * Reads the content of a file.
   * @param path The file path (e.g., "/data/log.txt").
   * @returns The file content as a string.
   */
  export function read(path: string, binary?: false): string;
  export function read(path: string, binary: true): Uint8Array;

  /**
   * Writes data to a file.
   * @param path The file path (e.g., "/data/log.txt").
   * @param data The string data to write.
   * @returns `true` if the write operation was successful, otherwise `false`.
   */
  export function write(path: string, data: string): boolean;
}
