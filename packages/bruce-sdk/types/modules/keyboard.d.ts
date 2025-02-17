/**
 * Access the keyboard input.
 *
 * ### Example
 * ```js
 * const keyboard = require("keyboard");
 *
 * while (true) {
 *   if (keyboard.getAnyPress()) {
 *     break; // Exits the loop when a button is pressed.
 *   }
 * }
 * ```
 *
 * @module keyboard
 */
declare module 'keyboard' {
  /**
   * Gets a list of currently pressed keys.
   * @returns An array of key names.
   */
  export function getKeysPressed(): string[];

  /**
   * Checks if the "previous" button was pressed.
   * @param hold If `true`, returns `true` as long as any button is held down.
   *             If `false` or omitted, returns `true` only on press and repeats every X ms.
   *             Default: `false`.
   * @returns `true` if the button was pressed, otherwise `false`.
   */
  export function getPrevPress(hold?: boolean): boolean;

  /**
   * Checks if the "select" button was pressed.
   * @param hold If `true`, returns `true` as long as any button is held down.
   *             If `false` or omitted, returns `true` only on press and repeats every X ms.
   *             Default: `false`.
   * @returns `true` if the button was pressed, otherwise `false`.
   */
  export function getSelPress(hold?: boolean): boolean;

  /**
   * Checks if the "next" button was pressed.
   * @param hold If `true`, returns `true` as long as any button is held down.
   *             If `false` or omitted, returns `true` only on press and repeats every X ms.
   *             Default: `false`.
   * @returns `true` if the button was pressed, otherwise `false`.
   */
  export function getNextPress(hold?: boolean): boolean;

  /**
   * Checks if any button was pressed.
   * @param hold If `true`, returns `true` as long as any button is held down.
   *             If `false` or omitted, returns `true` only on press and repeats every X ms.
   *             Default: `false`.
   * @returns `true` if any button was pressed, otherwise `false`.
   */
  export function getAnyPress(hold?: boolean): boolean;

  /**
   * Opens an on-screen keyboard for user input.
   * @param title Title of the keyboard prompt.
   * @param valueLength Maximum length of the input value.
   * @param value Initial value to display.
   */
  export function keyboard(
    title: string,
    valueLength: number,
    value: string,
  ): void;
}
