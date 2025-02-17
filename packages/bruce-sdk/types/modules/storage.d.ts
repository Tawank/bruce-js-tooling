/**
 * File storage operations.
 *
 * This module provides functions for reading, writing, listing, renaming, and deleting files on different storage types.
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
 *
 * // Rename a file
 * const renamed = storage.rename("/data/log.txt", "/data/log_old.txt");
 * console.log("Rename successful:", renamed);
 *
 * // Delete a file
 * const deleted = storage.delete("/data/log_old.txt");
 * console.log("Delete successful:", deleted);
 *
 * // List directory contents
 * const files = storage.readdir("/data", { withFileTypes: true });
 * console.log("Files:\n", JSON.stringify(files, null, 2));
 *
 * // Create a new directory
 * storage.mkdir("/data/newdir");
 *
 * // Remove a directory
 * storage.rmdir("/data/newdir");
 * ```
 *
 * @module storage
 */
declare module 'storage' {
  /**
   * Reads the content of a file.
   * @param path The path to the file. Supports:
   *   - A string path (e.g., `"/file.txt"`).
   *   - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`.
   * @param binary If `true`, returns the file content as a `Uint8Array` (default: `false`).
   * @returns The file content as:
   *   - A `string` if `binary` is `false` or omitted.
   *   - A `Uint8Array` if `binary` is `true`.
   */
  export function read(path: string | Path, binary?: false): string;
  export function read(path: string | Path, binary: true): Uint8Array;

  /**
   * Writes data to a file.
   * @param path The path to the file. Supports:
   *   - A string path (e.g., `"/file.txt"`).
   *   - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`.
   * @param data The data to write. Supports both `string` and `Uint8Array`.
   * @returns `true` if the write operation was successful, otherwise `false`.
   */
  export function write(
    path: string | Path,
    data: string | Uint8Array,
  ): boolean;

  /**
   * Lists the contents of a directory.
   * @param path The directory path. Supports:
   *   - A string path (e.g., `"/file.txt"`).
   *   - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`.
   * @returns An array of files and directories names in the directory.
   */
  export function readdir(
    path: string | Path,
    options?: { withFileTypes?: false },
  ): string[];

  /**
   * Directory entry representing a file or directory.
   */
  export interface Dirent {
    name: string;
    size: number;
    isDirectory: boolean;
  }

  /**
   * Lists the contents of a directory.
   * @param path The directory path. Supports:
   *   - A string path (e.g., `"/file.txt"`).
   *   - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`.
   * @param options If `{ withFileTypes: true }`, returns an array of `Dirent` objects with file type info.
   * @returns An array of filenames or `Dirent` objects if `withFileTypes` is `true`.
   */
  export function readdir(
    path: string | Path,
    options: { withFileTypes: true },
  ): Dirent[];

  /**
   * Renames a file or directory.
   * @param oldPath The current path of the file or directory. Supports:
   *   - A string path (e.g., `"/file.txt"`).
   *   - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`.
   * @param newPath The new path.
   * @returns `true` if the rename operation was successful, otherwise `false`.
   */
  export function rename(oldPath: string | Path, newPath: string): boolean;

  /**
   * Deletes a file or directory.
   * @param path The path of the file or directory to delete. Supports:
   *   - A string path (e.g., `"/file.txt"`).
   *   - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`.
   * @returns `true` if the delete operation was successful, otherwise `false`.
   */
  export function remove(path: string | Path): boolean;

  /**
   * Creates a directory, including parent directories if necessary.
   * @param path The path to the directory.
   * @returns `true` if the directory was successfully created, otherwise `false`.
   */
  export function mkdir(path: string | Path): boolean;

  /**
   * Removes an empty directory.
   * @param path The path to the directory.
   * @returns `true` if the directory was successfully removed, otherwise `false`.
   */
  export function rmdir(path: string | Path): boolean;
}
