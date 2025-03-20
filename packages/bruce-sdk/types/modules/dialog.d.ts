/**
 * Displays dialog messages and user interactions.
 *
 * ### Example
 * ```js
 * const dialog = require("dialog");
 *
 * dialog.success("Operation completed successfully.");
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
   * Displays a message dialog with up to three choices.
   *
   * ### Example
   * ```js
   * const dialog = require('dialog');
   * dialog.message("Hello!"); // Just displays the message
   * dialog.message("Press any key...", true); // Blocks until a key is pressed
   * const choice = dialog.message("Choose:", { left: "No", center: "Maybe", right: "Yes" });
   * if (choice === "right") console.log("User chose Yes!");
   * ```
   *
   * @param message The message to display.
   * @param buttons If `true`, waits for a key press before closing (default: `false`).
   *                If an object, displays up to three buttons with custom labels.
   * @returns The button pressed (`"left"`, `"center"`, or `"right"`), or `void` if no buttons are used.
   */
  export function message(
    message: string,
    buttons?: { left?: string; center?: string; right?: string },
  ): 'left' | 'center' | 'right' | void;

  /**
   * Displays an info notification (Blue background).
   *
   * ### Example
   * ```js
   * const dialog = require('dialog');
   * dialog.info("Operation completed successfully.");
   * ```
   *
   * @param message The info message to display.
   * @param waitForKeyPress If `true`, waits for a key press before closing (default: `false`).
   */
  export function info(message: string, waitForKeyPress?: boolean): void;

  /**
   * Displays an success notification (Green background).
   *
   * ### Example
   * ```js
   * const dialog = require('dialog');
   * dialog.success("Operation completed successfully.");
   * ```
   *
   * @param message The success message to display.
   * @param waitForKeyPress If `true`, waits for a key press before closing (default: `false`).
   */
  export function success(message: string, waitForKeyPress?: boolean): void;

  /**
   * Displays an warning notification (Yellow background).
   *
   * ### Example
   * ```js
   * const dialog = require('dialog');
   * dialog.warning("Warning!");
   * ```
   *
   * @param message The warning message to display.
   * @param waitForKeyPress If `true`, waits for a key press before closing (default: `false`).
   */
  export function warning(message: string, waitForKeyPress?: boolean): void;

  /**
   * Displays an error notification (Red background).
   * ### Example
   * ```js
   * const dialog = require('dialog');
   * dialog.error("An error occurred!", true);
   * ```
   *
   * @param message The error message to display.
   * @param waitForKeyPress If `true`, waits for a key press before closing (default: `false`).
   */
  export function error(message: string, waitForKeyPress?: boolean): void;

  /**
   * Displays a choice dialog and returns the selected option.
   *
   * ### Example
   * ```js
   * const dialog = require("dialog");
   * const options = ["Yes", "No", "Cancel"];
   * const selected = dialog.choice(options);
   * console.log("Selected:", selected); // it should print "Yes", "No" or "Cancel"
   *
   * const optionsNestedArray = [["Go Back", "go_back"], ["Cancel", "cancel"], ["Quit", "quit"]];
   * const selectedNestedArray = dialog.choice(optionsNestedArray);
   * console.log("selectedNestedArray:", selectedNestedArray); // it should print "go_back", "cancel" or "quit"
   *
   * const optionsObject = {"Go Back": "go_back", "Cancel": "cancel", "Quit": "quit"};
   * const selectedObject = dialog.choice(optionsObject);
   * console.log("selectedObject:", selectedObject); // it should print "go_back", "cancel" or "quit"
   * ```
   *
   * @param values An array of options to choose from. Can also be nested array or object.
   * @returns The selected option as a string.
   */
  export function choice(
    values:
      | string[]
      | Array<[string, string]>
      | { [key: string]: string }
      | string[][],
  ): string;

  /**
   * Opens a file picker dialog and returns the selected file path.
   *
   * ### Example
   * ```js
   * const dialog = require("dialog");
   * const filePath = dialog.pickFile("/documents", "txt");
   * dialog.viewFile(filePath);
   * ```
   *
   * @param path The initial directory path (optional).
   * @param extension The file extension filter (optional).
   * @returns The selected file path or `null` if no file is chosen.
   */
  export function pickFile(path?: string, extension?: string): string | null;

  /**
   * Opens an on-screen keyboard for user input.
   * @param title Title of the keyboard prompt.
   * @param valueLength Maximum length of the input value.
   * @param value Initial value to display.
   * @returns User input.
   */
  export function prompt(
    title?: string,
    valueLength?: number,
    value?: string,
  ): string;

  /**
   * Opens and displays a file in a viewer.
   * Displays a window where the user can scroll and exit.
   * Blocks execution until the user exits.
   *
   * ### Example
   * ```js
   * const dialog = require("dialog");
   * const filePath = dialog.pickFile("/documents", "txt");
   * dialog.viewFile(filePath);
   * ```
   *
   * @param path The file path to view.
   */
  export function viewFile(path: string): void;

  /**
   * Opens and displays text in a viewer.
   * Displays a window where the user can scroll and exit.
   * Blocks execution until the user exits.
   *
   * ### Example
   * ```js
   * const dialog = require("dialog");
   * dialog.viewText("text to display");
   * ```
   *
   * @param text The text to view.
   * @param title The optional title of the viewer window.
   */
  export function viewText(text: string, title?: string): void;

  /**
   * Creates a `TextViewer` instance, allowing manual control.
   * Unlike `viewText`, this does **not** block execution.
   * You must handle scrolling and closing yourself.
   * Thanks to this you can implement: scrolling to section,
   * follow links in text, and much more.
   * You can find example of the implementation here:
   * https://github.com/Tawank/bruce-js-tooling/tree/master/examples/browser-bruce
   *
   * ### Example
   * ```js
   * const dialog = require("dialog");
   * const textViewer = dialog.createTextViewer("long text");
   * while (true) {
   *   if (keyboard.getPrevPress()) {
   *     textViewer.scrollUp();
   *   }
   *   if (keyboard.getNextPress()) {
   *     textViewer.scrollDown();
   *   }
   *   textViewer.draw();
   *   delay(100);
   * }
   * ```
   *
   * @param text The text to view.
   * @param options The text viewer options.
   * @returns A `TextViewer` instance with manual controls.
   */
  export function createTextViewer(
    text: string,
    options?: {
      fontSize: number;
      startX: number;
      startY: number;
      width: number;
      height: number;
      indentWrappedLines: boolean;
    },
  ): TextViewer;

  /**
   * Represents a manually controlled text viewer.
   * @ignore
   */
  interface TextViewer {
    /**
     * Renders or updates the text viewer on the screen.
     */
    draw(): void;

    /**
     * Scrolls the text viewer up by one step.
     */
    scrollUp(): void;

    /**
     * Scrolls the text viewer down by one step.
     */
    scrollDown(): void;

    /**
     * Instantly scrolls to a specific line in the text viewer.
     * @param lineNumber The target line index (0-based).
     */
    scrollToLine(lineNumber: number): void;

    /**
     * Retrieves the content of a specific line.
     * @param lineNumber The line index (0-based).
     * @returns The text content of the specified line.
     */
    getLine(lineNumber: number): string;

    /**
     * Gets the total number of lines in the text viewer.
     * @returns The total line count.
     */
    getMaxLines(): number;

    /**
     * Retrieves the currently visible portion of the text.
     * @returns A string containing all visible lines.
     */
    getVisibleText(): string;

    /**
     * Sets new text content for the text viewer, replacing the existing content.
     * This resets the scroll position to the top.
     * @param text The new text to display.
     */
    setText(text: string): void;

    /**
     * Removes the text from the viewer.
     */
    clear(): void;

    /**
     * Closes and removes the text viewer from the screen.
     */
    close(): void;
  }
}
