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
   * @returns `true` if the button was pressed, otherwise `false`.
   */
  export function getPrevPress(): boolean;

  /**
   * Checks if the "select" button was pressed.
   * @returns `true` if the button was pressed, otherwise `false`.
   */
  export function getSelPress(): boolean;

  /**
   * Checks if the "next" button was pressed.
   * @returns `true` if the button was pressed, otherwise `false`.
   */
  export function getNextPress(): boolean;

  /**
   * Checks if any button was pressed.
   * @returns `true` if any button was pressed, otherwise `false`.
   */
  export function getAnyPress(): boolean;

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
