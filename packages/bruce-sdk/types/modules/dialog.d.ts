/**
 * Displays dialog messages and user interactions.
 *
 * ### Example
 * ```js
 * const dialog = require("dialog");
 *
 * dialog.message("Operation completed successfully.");
 * dialog.error("An error occurred!", true);
 *
 * const options = ["Yes", "No", "Cancel"];
 * const selected = dialog.choice(options);
 *
 * const filePath = dialog.pickFile("/documents", "txt");
 * dialog.viewFile(filePath);
 * ```
 *
 * @module dialog
 */
declare module 'dialog' {
  /**
   * Displays a message dialog.
   *
   * @param message The message to display.
   * @param waitForKeyPress If `true`, waits for a key press before closing (default: `false`).
   */
  export function message(message: string, waitForKeyPress?: boolean): void;

  /**
   * Displays an error dialog.
   *
   * @param message The error message to display.
   * @param waitForKeyPress If `true`, waits for a key press before closing (default: `false`).
   */
  export function error(message: string, waitForKeyPress?: boolean): void;

  /**
   * Displays a choice dialog and returns the selected option.
   *
   * @param values An array of options to choose from.
   * @returns The selected option as a string.
   */
  export function choice(values: string[]): string;

  /**
   * Opens a file picker dialog and returns the selected file path.
   *
   * @param path The initial directory path (optional).
   * @param extension The file extension filter (optional).
   * @returns The selected file path or `null` if no file is chosen.
   */
  export function pickFile(path?: string, extension?: string): string | null;

  /**
   * Opens and displays a file in a viewer.
   *
   * @param path The file path to view.
   */
  export function viewFile(path: string): void;
}
