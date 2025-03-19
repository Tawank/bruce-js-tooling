# display

Controls the TFT Display

### Example

```js
const display = require("display");

const black = display.color(0, 0, 0);
const white = display.color(255, 255, 255);

display.fill(black);
display.drawFillRect(20, 20, 50, 50, white);

delay(2000);
```


<!-- index-start -->
## display functions

- [display.color()](#displaycolor)
- [display.fill()](#displayfill)
- [display.setCursor()](#displaysetcursor)
- [display.print()](#displayprint)
- [display.println()](#displayprintln)
- [display.setTextColor()](#displaysettextcolor)
- [display.setTextAlign()](#displaysettextalign)
- [display.setTextSize()](#displaysettextsize)
- [display.drawText()](#displaydrawtext)
- [display.drawString()](#displaydrawstring)
- [display.drawPixel()](#displaydrawpixel)
- [display.drawLine()](#displaydrawline)
- [display.drawRect()](#displaydrawrect)
- [display.drawFillRect()](#displaydrawfillrect)
- [display.drawFillRectGradient()](#displaydrawfillrectgradient)
- [display.drawRoundRect()](#displaydrawroundrect)
- [display.drawFillRoundRect()](#displaydrawfillroundrect)
- [display.drawCircle()](#displaydrawcircle)
- [display.drawFillCircle()](#displaydrawfillcircle)
- [display.drawXBitmap()](#displaydrawxbitmap)
- [display.drawBitmap()](#displaydrawbitmap)
- [display.drawJpg()](#displaydrawjpg)
- [display.drawGif()](#displaydrawgif)
- [display.gifOpen()](#displaygifopen)
- [display.width()](#displaywidth)
- [display.height()](#displayheight)
<!-- index-end -->

## display.color()

```ts
display.color(r: number, g: number, b: number): number;
```

Converts RGB values to a display-compatible color format.

### Parameters

| Parameter | Type     | Description   |
| --------- | -------- | ------------- |
| `r`       | `number` | Red (0-255)   |
| `g`       | `number` | Green (0-255) |
| `b`       | `number` | Blue (0-255)  |

### Returns

`number`

A numeric representation of the color.

---

## display.fill()

```ts
display.fill(color: number): void;
```

Fills the entire screen with the specified color.

### Parameters

| Parameter | Type     | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| `color`   | `number` | Color value (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.setCursor()

```ts
display.setCursor(x: number, y: number): void;
```

Sets the cursor position for text rendering.

### Parameters

| Parameter | Type     | Description   |
| --------- | -------- | ------------- |
| `x`       | `number` | X-coordinate. |
| `y`       | `number` | Y-coordinate. |

### Returns

`void`

---

## display.print()

```ts
display.print(...args: any[]): void;
```

Prints text at the current cursor position.
It also prints text to the Serial Monitor for devices without screen.

### Parameters

| Parameter | Type    | Description   |
| --------- | ------- | ------------- |
| ...`args` | `any`[] | Text content. |

### Returns

`void`

---

## display.println()

```ts
display.println(...args: any[]): void;
```

Prints text followed by a newline at the current cursor position.
It also prints text to the Serial Monitor for devices without screen.

### Parameters

| Parameter | Type    | Description   |
| --------- | ------- | ------------- |
| ...`args` | `any`[] | Text content. |

### Returns

`void`

---

## display.setTextColor()

```ts
display.setTextColor(color: number): void;
```

Sets the text color.

### Parameters

| Parameter | Type     | Description                                                |
| --------- | -------- | ---------------------------------------------------------- |
| `color`   | `number` | Text color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.setTextAlign()

```ts
display.setTextAlign(
  align: number | "left" | "center" | "right",
  baseline?: number | "top" | "middle" | "bottom" | "alphabetic",
): void;
```

Sets the text alignment and baseline for rendering text.

### Example

```js
display.setTextAlign(1, 2); // Center align, bottom baseline
display.drawText(50, 50, "Hello!");
```

### Parameters

| Parameter   | Type                                                              | Description                       |
| ----------- | ----------------------------------------------------------------- | --------------------------------- |
| `align`     | `number` \| `"left"` \| `"center"` \| `"right"`                   | Horizontal alignment of the text. |
| `baseline`? | `number` \| `"top"` \| `"middle"` \| `"bottom"` \| `"alphabetic"` | Vertical alignment of the text.   |

### Returns

`void`

---

## display.setTextSize()

```ts
display.setTextSize(size: number): void;
```

Sets the text size.

### Parameters

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `size`    | `number` | Text size.  |

### Returns

`void`

---

## display.drawText()

```ts
display.drawText(text: string | number | boolean, x: number, y: number): void;
```

Draws text at the specified position.

### Parameters

| Parameter | Type                              | Description          |
| --------- | --------------------------------- | -------------------- |
| `text`    | `string` \| `number` \| `boolean` | The text to display. |
| `x`       | `number`                          | X-coordinate.        |
| `y`       | `number`                          | Y-coordinate.        |

### Returns

`void`

---

## display.drawString()

```ts
display.drawString(
  text: string | number | boolean,
  x: number,
  y: number,
): void;
```

Draws a string at the specified position (alias for `drawText`).

### Parameters

| Parameter | Type                              |
| --------- | --------------------------------- |
| `text`    | `string` \| `number` \| `boolean` |
| `x`       | `number`                          |
| `y`       | `number`                          |

### Returns

`void`

---

## display.drawPixel()

```ts
display.drawPixel(x: number, y: number, color: number): void;
```

Draws a single pixel on the display.

### Parameters

| Parameter | Type     | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| `x`       | `number` | X-coordinate.                                               |
| `y`       | `number` | Y-coordinate.                                               |
| `color`   | `number` | Pixel color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.drawLine()

```ts
display.drawLine(
  x: number,
  y: number,
  x2: number,
  y2: number,
  color: number,
): void;
```

Draws a line between two points.

### Parameters

| Parameter | Type     | Description                                                |
| --------- | -------- | ---------------------------------------------------------- |
| `x`       | `number` | Start X-coordinate.                                        |
| `y`       | `number` | Start Y-coordinate.                                        |
| `x2`      | `number` | End X-coordinate.                                          |
| `y2`      | `number` | End Y-coordinate.                                          |
| `color`   | `number` | Line color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.drawRect()

```ts
display.drawRect(
  x: number,
  y: number,
  width: number,
  height: number,
  color: number,
): void;
```

Draws a rectangle outline.

### Parameters

| Parameter | Type     | Description                                                   |
| --------- | -------- | ------------------------------------------------------------- |
| `x`       | `number` | X-coordinate.                                                 |
| `y`       | `number` | Y-coordinate.                                                 |
| `width`   | `number` | Rectangle width.                                              |
| `height`  | `number` | Rectangle height.                                             |
| `color`   | `number` | Outline color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.drawFillRect()

```ts
display.drawFillRect(
  x: number,
  y: number,
  width: number,
  height: number,
  color: number,
): void;
```

Draws a filled rectangle.

### Parameters

| Parameter | Type     | Description                                           |
| --------- | -------- | ----------------------------------------------------- |
| `x`       | `number` | X-coordinate.                                         |
| `y`       | `number` | Y-coordinate.                                         |
| `width`   | `number` | Rectangle width.                                      |
| `height`  | `number` | Rectangle height.                                     |
| `color`   | `number` | Color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.drawFillRectGradient()

```ts
display.drawFillRectGradient(
  x: number,
  y: number,
  width: number,
  height: number,
  color1: number,
  color2: number,
  direction: "horizontal" | "vertical",
): void;
```

Draws a filled gradient rectangle.

### Parameters

| Parameter   | Type                           | Description                                             |
| ----------- | ------------------------------ | ------------------------------------------------------- |
| `x`         | `number`                       | X-coordinate.                                           |
| `y`         | `number`                       | Y-coordinate.                                           |
| `width`     | `number`                       | Rectangle width.                                        |
| `height`    | `number`                       | Rectangle height.                                       |
| `color1`    | `number`                       | Color 1 (use `display.color(r, g, b)` to generate one). |
| `color2`    | `number`                       | Color 2 (use `display.color(r, g, b)` to generate one). |
| `direction` | `"horizontal"` \| `"vertical"` | `'horizontal'` or `'vertical'`.                         |

### Returns

`void`

---

## display.drawRoundRect()

```ts
display.drawRoundRect(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  color: number,
): void;
```

Draws a round rectangle.

### Parameters

| Parameter | Type     | Description                                                   |
| --------- | -------- | ------------------------------------------------------------- |
| `x`       | `number` | X-coordinate.                                                 |
| `y`       | `number` | Y-coordinate.                                                 |
| `width`   | `number` | Rectangle width.                                              |
| `height`  | `number` | Rectangle height.                                             |
| `radius`  | `number` | Rectangle radius.                                             |
| `color`   | `number` | Outline color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.drawFillRoundRect()

```ts
display.drawFillRoundRect(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  color: number,
): void;
```

Draws a filled round rectangle.

### Parameters

| Parameter | Type     | Description                                           |
| --------- | -------- | ----------------------------------------------------- |
| `x`       | `number` | X-coordinate.                                         |
| `y`       | `number` | Y-coordinate.                                         |
| `width`   | `number` | Rectangle width.                                      |
| `height`  | `number` | Rectangle height.                                     |
| `radius`  | `number` | Rectangle radius.                                     |
| `color`   | `number` | Color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.drawCircle()

```ts
display.drawCircle(x: number, y: number, r: number, color: number): void;
```

Draws a circle.

### Parameters

| Parameter | Type     | Description                                                   |
| --------- | -------- | ------------------------------------------------------------- |
| `x`       | `number` | X-coordinate.                                                 |
| `y`       | `number` | Y-coordinate.                                                 |
| `r`       | `number` | -                                                             |
| `color`   | `number` | Outline color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.drawFillCircle()

```ts
display.drawFillCircle(x: number, y: number, r: number, color: number): void;
```

Draws a filled circle.

### Parameters

| Parameter | Type     | Description                                           |
| --------- | -------- | ----------------------------------------------------- |
| `x`       | `number` | X-coordinate.                                         |
| `y`       | `number` | Y-coordinate.                                         |
| `r`       | `number` | -                                                     |
| `color`   | `number` | Color (use `display.color(r, g, b)` to generate one). |

### Returns

`void`

---

## display.drawXBitmap()

```ts
display.drawXBitmap(
  x: number,
  y: number,
  bitmap: ArrayBuffer,
  width: number,
  height: number,
  fgColor: number,
  bgColor?: number,
): void;
```

Draws a monochrome bitmap (XBM Bitmap) at the specified position on the screen.
You can convert images to this format using this online converter:
https://www.online-utility.org/image/convert/to/XBM

### Parameters

| Parameter  | Type          | Description                                                                                                            |
| ---------- | ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `x`        | `number`      | X-coordinate for the bitmap.                                                                                           |
| `y`        | `number`      | Y-coordinate for the bitmap.                                                                                           |
| `bitmap`   | `ArrayBuffer` | The bitmap data stored in an ArrayBuffer (1-bit per pixel).                                                            |
| `width`    | `number`      | The width of the bitmap in pixels.                                                                                     |
| `height`   | `number`      | The height of the bitmap in pixels.                                                                                    |
| `fgColor`  | `number`      | The foreground color (used for `1` bits in the bitmap).                                                                |
| `bgColor`? | `number`      | (Optional) The background color (used for `0` bits in the bitmap). If not provided then the background is transparent. |

### Returns

`void`

---

## display.drawBitmap()

```ts
display.drawBitmap(
  x: number,
  y: number,
  bitmap: ArrayBuffer,
  width: number,
  height: number,
  bpp: 1 | 4 | 8 | 16,
  palette?: ArrayBuffer,
): void;
```

Draws a bitmap at the specified position on the screen.

### Parameters

| Parameter  | Type                      | Description                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x`        | `number`                  | X-coordinate for the bitmap.                                                                                                                                                                                                                                                                                                                    |
| `y`        | `number`                  | Y-coordinate for the bitmap.                                                                                                                                                                                                                                                                                                                    |
| `bitmap`   | `ArrayBuffer`             | The bitmap data stored in an `ArrayBuffer`. The format depends on `bpp`: - `16 bpp`: Each pixel is a 16-bit color value (RGB565). - `8 bpp`: Each pixel is an 8-bit color value (RGB332). - `4 bpp`: Each pixel is a 4-bit index into `palette` (2 pixels per byte). - `1 bpp`: Each pixel is a 1-bit index into `palette` (8 pixels per byte). |
| `width`    | `number`                  | The width of the bitmap in pixels.                                                                                                                                                                                                                                                                                                              |
| `height`   | `number`                  | The height of the bitmap in pixels.                                                                                                                                                                                                                                                                                                             |
| `bpp`      | `1` \| `4` \| `8` \| `16` | Bits per pixel (16, 8, 4, or 1).                                                                                                                                                                                                                                                                                                                |
| `palette`? | `ArrayBuffer`             | A color palette used **only** when `bpp` is 4 or 1. Each entry is a 16-bit color (RGB565).                                                                                                                                                                                                                                                      |

### Returns

`void`

---

## display.drawJpg()

```ts
display.drawJpg(
  path: string | Path,
  x?: number,
  y?: number,
  center?: boolean,
): void;
```

Draws a JPG image on the display.

### Parameters

| Parameter | Type                                  | Description                                                                                                                                                      |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`    | `string` \| [`Path`](globals.md#path) | The path to the JPG file. Supports: - A string path (e.g., "/images/photo.jpg"). - A `Path` object specifying storage \{ fs: "sd", path: "/images/photo.jpg" \}. |
| `x`?      | `number`                              | X-coordinate.                                                                                                                                                    |
| `y`?      | `number`                              | Y-coordinate.                                                                                                                                                    |
| `center`? | `boolean`                             | -                                                                                                                                                                |

### Returns

`void`

---

## display.drawGif()

```ts
display.drawGif(
  path: string | Path,
  x?: number,
  y?: number,
  center?: boolean,
  playDurationMs?: number,
): void;
```

Draws a GIF image on the display.

### Parameters

| Parameter         | Type                                  | Description                                                                                                                                                    |
| ----------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`            | `string` \| [`Path`](globals.md#path) | The path to the GIF file. Supports: - A string path (e.g., "/images/anim.gif"). - A `Path` object specifying storage \{ fs: "sd", path: "/images/anim.gif" \}. |
| `x`?              | `number`                              | X-coordinate.                                                                                                                                                  |
| `y`?              | `number`                              | Y-coordinate.                                                                                                                                                  |
| `center`?         | `boolean`                             | Whether to center the image.                                                                                                                                   |
| `playDurationMs`? | `number`                              | Duration to play the GIF.                                                                                                                                      |

### Returns

`void`

---

## display.gifOpen()

```ts
display.gifOpen(path: string | Path): Gif;
```

Opens a GIF for manual frame playback.

### Parameters

| Parameter | Type                                  | Description                                                                                                                                                    |
| --------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`    | `string` \| [`Path`](globals.md#path) | The path to the GIF file. Supports: - A string path (e.g., "/images/anim.gif"). - A `Path` object specifying storage \{ fs: "sd", path: "/images/anim.gif" \}. |

### Returns

[`Gif`](display.md#gif)

A `Gif` object for controlling playback.

---

## display.width()

```ts
display.width(): number;
```

Gets the display width.

### Returns

`number`

Display width in pixels.

---

## display.height()

```ts
display.height(): number;
```

Gets the display height.

### Returns

`number`

Display height in pixels.
