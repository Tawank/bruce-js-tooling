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
   * Draws Bruce's status bar
   */
  export function drawStatusBar():void;

  /**
   * Fills the entire screen with the specified color.
   * @param color Color value (use `display.color(r, g, b)` to generate one).
   */
  export function fill(color: number): void;

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
   * @param align Horizontal alignment of the text.
   * @param baseline Vertical alignment of the text.
   */
  export function setTextAlign(
    align: 'left' | 'center' | 'right' | number,
    baseline?: 'top' | 'middle' | 'bottom' | 'alphabetic' | number,
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
   * @param color Color (use `display.color(r, g, b)` to generate one).
   */
  export function drawFillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
  ): void;

  /**
   * Draws a filled gradient rectangle.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param width Rectangle width.
   * @param height Rectangle height.
   * @param color1 Color 1 (use `display.color(r, g, b)` to generate one).
   * @param color2 Color 2 (use `display.color(r, g, b)` to generate one).
   * @param direction `'horizontal'` or `'vertical'`.
   */
  export function drawFillRectGradient(
    x: number,
    y: number,
    width: number,
    height: number,
    color1: number,
    color2: number,
    direction: 'horizontal' | 'vertical',
  ): void;

  /**
   * Draws a round rectangle.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param width Rectangle width.
   * @param height Rectangle height.
   * @param radius Rectangle radius.
   * @param color Outline color (use `display.color(r, g, b)` to generate one).
   */
  export function drawRoundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    color: number,
  ): void;

  /**
   * Draws a filled round rectangle.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param width Rectangle width.
   * @param height Rectangle height.
   * @param radius Rectangle radius.
   * @param color Color (use `display.color(r, g, b)` to generate one).
   */
  export function drawFillRoundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    color: number,
  ): void;

  /**
   * Draws a circle.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param r Circle radius.
   * @param color Outline color (use `display.color(r, g, b)` to generate one).
   */
  export function drawCircle(
    x: number,
    y: number,
    r: number,
    color: number,
  ): void;

  /**
   * Draws a filled circle.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param r Circle radius.
   * @param color Color (use `display.color(r, g, b)` to generate one).
   */
  export function drawFillCircle(
    x: number,
    y: number,
    r: number,
    color: number,
  ): void;

  /**
   * Draws a monochrome bitmap (XBM Bitmap) at the specified position on the screen.
   * You can convert images to this format using this online converter:
   * https://www.online-utility.org/image/convert/to/XBM
   *
   * @param x X-coordinate for the bitmap.
   * @param y Y-coordinate for the bitmap.
   * @param bitmap The bitmap data stored in an ArrayBuffer (1-bit per pixel).
   * @param width The width of the bitmap in pixels.
   * @param height The height of the bitmap in pixels.
   * @param fgColor The foreground color (used for `1` bits in the bitmap).
   * @param bgColor (Optional) The background color (used for `0` bits in the bitmap).
   *                If not provided then the background is transparent.
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
   * Draws a bitmap at the specified position on the screen.
   *
   * @param x X-coordinate for the bitmap.
   * @param y Y-coordinate for the bitmap.
   * @param bitmap The bitmap data stored in an `ArrayBuffer`. The format depends on `bpp`:
   *   - `16 bpp`: Each pixel is a 16-bit color value (RGB565).
   *   - `8 bpp`: Each pixel is an 8-bit color value (RGB332).
   *   - `4 bpp`: Each pixel is a 4-bit index into `palette` (2 pixels per byte).
   *   - `1 bpp`: Each pixel is a 1-bit index into `palette` (8 pixels per byte).
   * @param width The width of the bitmap in pixels.
   * @param height The height of the bitmap in pixels.
   * @param bpp Bits per pixel (16, 8, 4, or 1).
   * @param palette A color palette used **only** when `bpp` is 4 or 1. Each entry is a 16-bit color (RGB565).
   */
  export function drawBitmap(
    x: number,
    y: number,
    bitmap: ArrayBuffer,
    width: number,
    height: number,
    bpp: 16 | 8 | 4 | 1,
    palette?: ArrayBuffer, // Only used for 4 bpp and 1 bpp
  ): void;

  /**
   * Draws a JPG image on the display.
   * @param path The path to the JPG file. Supports:
   *   - A string path (e.g., "/images/photo.jpg").
   *   - A `Path` object specifying storage { fs: "sd", path: "/images/photo.jpg" }.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   */
  export function drawJpg(
    path: string | Path,
    x?: number,
    y?: number,
    center?: boolean,
  ): void;

  /**
   * Draws a GIF image on the display.
   * @param path The path to the GIF file. Supports:
   *   - A string path (e.g., "/images/anim.gif").
   *   - A `Path` object specifying storage { fs: "sd", path: "/images/anim.gif" }.
   * @param x X-coordinate.
   * @param y Y-coordinate.
   * @param center Whether to center the image.
   * @param playDurationMs Duration to play the GIF.
   */
  export function drawGif(
    path: string | Path,
    x?: number,
    y?: number,
    center?: boolean,
    playDurationMs?: number,
  ): void;

  /**
   * Opens a GIF for manual frame playback.
   * @param path The path to the GIF file. Supports:
   *   - A string path (e.g., "/images/anim.gif").
   *   - A `Path` object specifying storage { fs: "sd", path: "/images/anim.gif" }.
   * @returns A `Gif` object for controlling playback.
   */
  export function gifOpen(path: string | Path): Gif;

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

  /**
   * Represents a GIF animation object.
   * @ignore
   */
  interface Gif {
    /**
     * Plays the next frame of the GIF.
     * @param x X-coordinate.
     * @param y Y-coordinate.
     * @param sync If `false`, the frame will be played as fast as possible, ignoring any frame delays.
     *             If `true` or omitted, the frame will follow the GIF’s natural timing.
     *             Default: `true`.
     */
    playFrame(x?: number, y?: number, sync?: boolean): void;

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
}
