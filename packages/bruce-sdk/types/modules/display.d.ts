/**
 * Controls the TFT Display
 *
 * ### Example
 * ```js
 * const display = require("display");
 *
 * const black = display.color(0, 0, 0);
 * const white = display.color(255, 255, 255);
 *
 * display.fill(black);
 * display.drawFillRect(20, 20, 50, 50, white);
 *
 * delay(2000);
 * ```
 *
 * @module display
 */
declare module 'display' {
  /**
   * Converts RGB values to a display-compatible color format.
   * @param r Red (0-255)
   * @param g Green (0-255)
   * @param b Blue (0-255)
   * @returns A numeric representation of the color.
   */
  export function color(r: number, g: number, b: number): number;

  /**
   * Fills the entire screen with the specified color.
   * @param color Color value (use `display.color(r, g, b)` to generate one).
   */
  export function fill(color: number): void;

  /**
   * Sets the text color.
   * @param color Text color (use `display.color(r, g, b)` to generate one).
   */
  export function setTextColor(color: number): void;

  /**
   * Sets the text alignment and baseline for rendering text.
   *
   * ### Example
   * ```js
   * display.setTextAlign(1, 2); // Center align, bottom baseline
   * display.drawText(50, 50, "Hello!");
   * ```
   *
   * @param align Horizontal alignment of the text:
   * - `0` - Left
   * - `1` - Center
   * - `2` - Right
   *
   * @param baseline Vertical alignment of the text:
   * - `0` - Top
   * - `1` - Middle
   * - `2` - Bottom
   * - `3` - Alphabetic baseline
   */
  export function setTextAlign(
    align: 0 | 1 | 2,
    baseline?: 0 | 1 | 2 | 3,
  ): void;

  /**
   * Sets the text size.
   * @param size Text size.
   */
  export function setTextSize(size: number): void;

  /**
   * Draws text at the specified position.
   * @param text The text to display.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   */
  export function drawText(
    text: string | number | boolean,
    x: number,
    y: number,
  ): void;

  /**
   * Draws a string at the specified position (alias for `drawText`).
   */
  export function drawString(
    text: string | number | boolean,
    x: number,
    y: number,
  ): void;

  /**
   * Sets the cursor position for text rendering.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   */
  export function setCursor(x: number, y: number): void;

  /**
   * Prints text at the current cursor position.
   * It also prints text to the Serial Monitor for devices without screen.
   * @param args Text content.
   */
  export function print(...args: any[]): void;

  /**
   * Prints text followed by a newline at the current cursor position.
   * It also prints text to the Serial Monitor for devices without screen.
   * @param args Text content.
   */
  export function println(...args: any[]): void;

  /**
   * Draws a single pixel on the display.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param color Pixel color (use `display.color(r, g, b)` to generate one).
   */
  export function drawPixel(x: number, y: number, color: number): void;

  /**
   * Draws a line between two points.
   * @param x Start X-coordinate.
   * @param y Start Y-coordinate.
   * @param x2 End X-coordinate.
   * @param y2 End Y-coordinate.
   * @param color Line color (use `display.color(r, g, b)` to generate one).
   */
  export function drawLine(
    x: number,
    y: number,
    x2: number,
    y2: number,
    color: number,
  ): void;

  /**
   * Draws a rectangle outline.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param width Rectangle width.
   * @param height Rectangle height.
   * @param color Outline color (use `display.color(r, g, b)` to generate one).
   */
  export function drawRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
  ): void;

  /**
   * Draws a filled rectangle.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param width Rectangle width.
   * @param height Rectangle height.
   * @param color Outline color (use `display.color(r, g, b)` to generate one).
   */
  export function drawFillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
  ): void;

  /**
   * Draws a monochrome bitmap (X Bitmap) at the specified position on the screen.
   *
   * @param x X-coordinate for the bitmap.
   * @param y Y-coordinate for the bitmap.
   * @param bitmap The bitmap data stored in an ArrayBuffer (1-bit per pixel).
   * @param width The width of the bitmap in pixels.
   * @param height The height of the bitmap in pixels.
   * @param fgColor The foreground color (used for `1` bits in the bitmap).
   * @param bgColor (Optional) The background color (used for `0` bits in the bitmap).
   */
  export function drawXBitmap(
    x: number,
    y: number,
    bitmap: ArrayBuffer,
    width: number,
    height: number,
    fgColor: number,
    bgColor?: number,
  ): void;

  /**
   * Draws a JPG image on the display.
   * @param filesystem File source (e.g., `sd` or `littlefs`).
   * @param filename Image file path.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   */
  export function drawJpg(
    filesystem: FileSystem,
    filename: string,
    x: number,
    y: number,
  ): void;

  /**
   * Draws a GIF image on the display.
   * @param filesystem File source (e.g., `sd` or `littlefs`).
   * @param filename Image file path.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param center Whether to center the image.
   * @param playDurationMs Duration to play the GIF.
   */
  export function drawGif(
    filesystem: FileSystem,
    filename: string,
    x: number,
    y: number,
    center: boolean,
    playDurationMs: number,
  ): void;

  /**
   * Opens a GIF for manual frame playback.
   * @param filesystem File source (e.g., `sd` or `littlefs`).
   * @param path File path.
   * @returns A `Gif` object for controlling playback.
   */
  export function gifOpen(filesystem: FileSystem, path: string): Gif;

  /**
   * Gets the display width.
   * @returns Display width in pixels.
   */
  export function width(): number;

  /**
   * Gets the display height.
   * @returns Display height in pixels.
   */
  export function height(): number;

  /**
   * Controls sprite-related functions.
   * @ignore
   */
  export const sprite: {
    /**
     * Deletes the currently active sprite.
     */
    deleteSprite(): void;

    /**
     * Draws the sprite on the screen at the specified coordinates.
     * @param x X-coordinate on the screen. default = 0
     * @param y Y-coordinate on the screen. default = 0
     */
    pushSprite(x?: number, y?: number): void;
  } & Omit<typeof import('display'), 'drawJpg' | 'drawGif' | 'gifOpen'>;

  /**
   * Module for controlling the TFT Display
   *
   * ### Example
   * ```js
   * const display = require("display");
   *
   * const black = display.color(0, 0, 0);
   * const white = display.color(255, 255, 255);
   *
   * display.fill(black);
   * display.drawFillRect(20, 20, 50, 50, white);
   * ```
   *
   * @ignore
   * @module display
   */
  const display: {
    /**
     * Creates a sprite (a temporary image buffer for drawing).
     * @param width Sprite width.
     * @param height Sprite height.
     * @param colorDepth Color depth. default = 16
     * @param frames Number of frames. default = 1
     * @returns A sprite object.
     *
     * @ignore
     */
    createSprite(
      width?: number,
      height?: number,
      colorDepth?: 1 | 4 | 8 | 16,
      frames?: number,
    ): typeof sprite;
  } & typeof import('display');

  /**
   * @ignore
   */
  export default display;
}

/**
 * Represents a GIF animation object.
 */
interface Gif {
  /**
   * Plays the next frame of the GIF.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   */
  playFrame(x: number, y: number): void;

  /**
   * Gets the dimensions of the GIF.
   * @returns An object containing width and height.
   */
  dimensions(): { width: number; height: number };

  /**
   * Resets the GIF animation.
   */
  reset(): void;

  /**
   * Closes and releases the GIF object.
   */
  close(): void;
}
