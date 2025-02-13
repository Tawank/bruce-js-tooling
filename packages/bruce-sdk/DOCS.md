
<a name="readmemd"></a>

# Bruce JavaScript tooling

The Bruce JavaScript tooling provides tools and type definitions to help you build applications for the Bruce platform.

## Getting Started

To create a new Bruce application with **TypeScript support** and **modern JavaScript (ES6+) features**, use the interactive setup wizard (you need to have [node.js](https://nodejs.org/en) installed):

```sh
npx @bruce/create-bruce-app@latest
```

Once the setup is complete, navigate to your project folder and start the application:

```sh
cd my-bruce-app
npm run start
```

You can use `pnpm` or `yarn` instead of `npm` if preferred.

### Important: JavaScript Compatibility

If you **use the setup wizard (`npx @bruce/create-bruce-app@latest`)**, your project will support **TypeScript** and **modern JavaScript features** like:

- ✅ **TypeScript support** – Write safer, more maintainable code.
- ✅ **Function IntelliSense** – See available functions, expected parameters, and documentation directly in your editor.
- ✅ **Error checking** – Get warnings and errors when using functions incorrectly.
- ✅ **Modern JavaScript features** like:
  - ✅ `let` and `const`.
  - ✅ `for...of` loops.
  - ✅ Arrow functions (`() => {}`).
  - ✅ External npm module imports (`import isEven from "is-even";`).
  - ❌ **No** `Object.entries()`, `Promise`, `async/await`, `setInterval`, `setTimeout` (for now).

However, if you **upload scripts directly** without using the setup wizard, they **must be written in ES5**. This means:

- ❌ **No TypeScript or IntelliSense** – No function suggestions or error checking.
- ❌ **No modern JavaScript features** – Use only ES5 syntax:
  - ❌ **No** `let` (use `var` instead).
  - ❌ **No** `for...of` loops (use traditional `for` loops with indexes).
  - ❌ **No** Arrow functions `() => {}` (use `function` instead).
  - ❌ **No** `import ir from 'ir'` import syntax use `const ir = require('ir');` instead.
  - ❌ **No** External npm module imports.
  - ❌ **No** `Object.entries()`, `Promise`, `async/await`, `setInterval`, `setTimeout` (for now).

### Uploading Your Scripts to Bruce

When uploading scripts to Bruce, keep in mind:

- **Only JavaScript (`.js`) files can be uploaded.**
- If you have **TypeScript (`.ts`)** files, you must first **compile it to JavaScript** (`.js`).
- The setup wizard automatically compiles TypeScript to JavaScript when you build your project. The `.js` file will be in `bundle/` folder.

If you need **TypeScript** or **modern JavaScript features**, always create your project using the setup wizard.

### Code Examples in Documentation

- **All code examples in this documentation will run directly on Bruce.** No need to compile it.

## Documentation

https://github.com/Tawank/bruce-js-tooling/blob/master/packages/bruce-sdk/DOCS.md

## Modules

| Module                          | Description                                           |
| ------------------------------- | ----------------------------------------------------- |
| [globals](#globalsmd)           | Global variables and functions available in bruce js. |
| [audio](#audiomd)               | Controls the audio.                                   |
| [badusb](#badusbmd)             | Simulates USB keyboard input.                         |
| [device](#devicemd)             | Show device information.                              |
| [dialog](#dialogmd)             | Displays dialog messages and user interactions.       |
| [display](#displaymd)           | Controls the TFT Display                              |
| [gpio](#gpiomd)                 | GPIO (General Purpose Input/Output) ports             |
| [ir](#irmd)                     | Interacting with infrared (IR) signals.               |
| [keyboard](#keyboardmd)         | Access the keyboard input.                            |
| [notification](#notificationmd) | Controls the notification LED.                        |
| [serial](#serialmd)             | Serial communication.                                 |
| [storage](#storagemd)           | File storage operations.                              |
| [subghz](#subghzmd)             | Sub-GHz communication.                                |
| [wifi](#wifimd)                 | Wi-Fi connection and HTTP requests.                   |


<a name="globalsmd"></a>

# globals

Global variables and functions available in bruce js.

### Example

```js
console.log(now()); // console.log prints to serial monitor
delay(1000); // Pause for 1000ms (1 second)
var myNumber = parse_int("2133"); // myNumber will be number 2133
var myString = to_string(24); // myString will be string "24"
var myHexStr = to_hex_string(1337); // myHexStr will be string "539" (because 1337 decimal is 0x539).
var str = "Hello World";
println(to_lower_case(str)); // prints: hello world
println(to_upper_case(str)); // prints: HELLO WORLD
println(random(1, 20)); // prints random value between 1 and 20
println(__dirname); // prints current dirname
```

<!-- index-start -->
## globals functions

- [BRUCE_VERSION](#bruce_version)
- [now()](#now)
- [delay()](#delay)
- [parse_int()](#parse_int)
- [to_string()](#to_string)
- [to_hex_string()](#to_hex_string)
- [to_lower_case()](#to_lower_case)
- [to_upper_case()](#to_upper_case)
- [random()](#random)
- [println()](#println)
- [require()](#require)
<!-- index-end -->

## \_\_dirname

```ts
const __dirname: string;
```

Path to the directory containing the current script

---

## \_\_filename

```ts
const __filename: string;
```

Path to the current script file

---

## BRUCE_VERSION

```ts
const BRUCE_VERSION: string;
```

Version of the bruce firmware

---

## now()

```ts
now(): number;
```

Returns the current time in milliseconds since the epoch

### Returns

`number`

The current timestamp in milliseconds

---

## delay()

```ts
delay(ms: number): void;
```

Pauses execution for the specified number of milliseconds

### Parameters

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| `ms`      | `number` | The number of milliseconds to delay |

### Returns

`void`

---

## parse_int()

```ts
parse_int(text: string): number;
```

Converts a string to a number

### Parameters

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| `text`    | `string` | The string to convert to a number |

### Returns

`number`

---

## to_string()

```ts
to_string(value: any): string;
```

Converts a value to a string

### Parameters

| Parameter | Type  | Description                      |
| --------- | ----- | -------------------------------- |
| `value`   | `any` | The value to convert to a string |

### Returns

`string`

---

## to_hex_string()

```ts
to_hex_string(text: string): number;
```

Converts a hex string to a number

### Parameters

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| `text`    | `string` | The hex string to convert to a number |

### Returns

`number`

---

## to_lower_case()

```ts
to_lower_case(text: string): number;
```

Converts a string to a number

### Parameters

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| `text`    | `string` | The string to convert to a number |

### Returns

`number`

---

## to_upper_case()

```ts
to_upper_case(text: string): number;
```

Converts a string to a number

### Parameters

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| `text`    | `string` | The string to convert to a number |

### Returns

`number`

---

## random()

### Call Signature

```ts
random(max: number): number;
```

Returns a pseudo-random number

#### Parameters

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| `max`     | `number` | Upper bound of the random value, exclusive |

#### Returns

`number`

### Call Signature

```ts
random(min: number, max: number): number;
```

Returns a pseudo-random number

#### Parameters

| Parameter | Type     | Description                                           |
| --------- | -------- | ----------------------------------------------------- |
| `min`     | `number` | Lower bound of the random value, inclusive (optional) |
| `max`     | `number` | Upper bound of the random value, exclusive            |

#### Returns

`number`

---

## println()

```ts
println(...args: any[]): void;
```

Prints text to serial monitor and display. Alias to [display.println](#displayprintln)().

### Parameters

| Parameter | Type    | Description   |
| --------- | ------- | ------------- |
| ...`args` | `any`[] | Text content. |

### Returns

`void`

---

## require()

```ts
require(module: string): any;
```

Loads a module. List of modules: [modules](#modules).

### Example

```js
const dialog = require("dialog");
dialog.message("Test.");
```

### Parameters

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `module`  | `string` | The name of the module to load |

### Returns

`any`


<a name="audiomd"></a>

# audio

Controls the audio.

### Example

```js
const audio = require("audio");

audio.tone(988, 2000); // Beeps buzzer for 2 seconds
```

<!-- index-start -->
## audio functions

- [audio.playAudioFile()](#audioplayaudiofile)
- [audio.tone()](#audiotone)
<!-- index-end -->

## audio.playAudioFile()

```ts
audio.playAudioFile(filename: string): void;
```

Plays an audio file from storage.

### Parameters

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| `filename` | `string` | The path to the audio file (e.g., "/sound.wav"). |

### Returns

`void`

---

## audio.tone()

```ts
audio.tone(
  frequency: number,
  durationMs: number,
  nonBlocking?: boolean,
): void;
```

Plays a tone at the specified frequency for a given duration.

### Parameters

| Parameter      | Type      | Description                                                               |
| -------------- | --------- | ------------------------------------------------------------------------- |
| `frequency`    | `number`  | Frequency in Hz.                                                          |
| `durationMs`   | `number`  | Duration in milliseconds.                                                 |
| `nonBlocking`? | `boolean` | If true, the function will not play the tone if it would block execution. |

### Returns

`void`


<a name="badusbmd"></a>

# badusb

Simulates USB keyboard input.

### Example

```js
const badusb = require("badusb");

badusb.setup();
badusb.press(0x04); // Presses the 'A' key
badusb.release(0x04); // Releases the 'A' key
badusb.println("Hello, world!"); // Types and presses Enter
```

<!-- index-start -->
## badusb functions

- [badusb.setup()](#badusbsetup)
- [badusb.press()](#badusbpress)
- [badusb.pressRaw()](#badusbpressraw)
- [badusb.hold()](#badusbhold)
- [badusb.release()](#badusbrelease)
- [badusb.releaseAll()](#badusbreleaseall)
- [badusb.print()](#badusbprint)
- [badusb.println()](#badusbprintln)
- [badusb.runFile()](#badusbrunfile)
<!-- index-end -->

## badusb.setup()

```ts
badusb.setup(): void;
```

Initializes the BadUSB module.

### Returns

`void`

---

## badusb.press()

```ts
badusb.press(keycode: number): void;
```

Simulates pressing a key using a keycode.

### Parameters

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `keycode` | `number` | HID keycode of the key to press. |

### Returns

`void`

---

## badusb.pressRaw()

```ts
badusb.pressRaw(hid_key: number): void;
```

Simulates pressing a key using a raw HID key value.

### Parameters

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| `hid_key` | `number` | Raw HID key value. |

### Returns

`void`

---

## badusb.hold()

```ts
badusb.hold(keycode: number): void;
```

Simulates holding down a key.

### Parameters

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| `keycode` | `number` | HID keycode of the key to hold. |

### Returns

`void`

---

## badusb.release()

```ts
badusb.release(keycode: number): void;
```

Releases a previously pressed key.

### Parameters

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| `keycode` | `number` | HID keycode of the key to release. |

### Returns

`void`

---

## badusb.releaseAll()

```ts
badusb.releaseAll(): void;
```

Releases all currently held keys.

### Returns

`void`

---

## badusb.print()

```ts
badusb.print(message: string): void;
```

Types a string as keyboard input.

### Parameters

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `message` | `string` | The text to type. |

### Returns

`void`

---

## badusb.println()

```ts
badusb.println(message: string): void;
```

Types a string followed by an "Enter" key press.

### Parameters

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `message` | `string` | The text to type. |

### Returns

`void`

---

## badusb.runFile()

```ts
badusb.runFile(filename: string): void;
```

Executes a script file from storage.

### Parameters

| Parameter  | Type     | Description                  |
| ---------- | -------- | ---------------------------- |
| `filename` | `string` | The path to the script file. |

### Returns

`void`


<a name="devicemd"></a>

# device

Show device information.

### Example

```js
const device = require("device");

console.log("Device Name:", device.getName());
console.log("Board:", device.getBoard());
console.log("Model:", device.getModel());
console.log("Battery Charge:", device.getBatteryCharge(), "%");

const memoryStats = device.getFreeHeapSize();
console.log("RAM Free:", memoryStats.ram_free);
console.log("PSRAM Free:", memoryStats.psram_free);
```

<!-- index-start -->
## device functions

- [device.getName()](#devicegetname)
- [device.getBoard()](#devicegetboard)
- [device.getModel()](#devicegetmodel)
- [device.getBatteryCharge()](#devicegetbatterycharge)
- [device.getFreeHeapSize()](#devicegetfreeheapsize)
<!-- index-end -->

## device.getName()

```ts
device.getName(): string;
```

Retrieves the device's name.

### Returns

`string`

The name of the device.

---

## device.getBoard()

```ts
device.getBoard(): string;
```

Retrieves the board type.

### Returns

`string`

The board identifier.

---

## device.getModel()

```ts
device.getModel(): string;
```

Retrieves the model name.

### Returns

`string`

The model of the device.

---

## device.getBatteryCharge()

```ts
device.getBatteryCharge(): number;
```

Retrieves the current battery charge level.

### Returns

`number`

The battery charge percentage (0-100).

---

## device.getFreeHeapSize()

```ts
device.getFreeHeapSize(): {
  ram_free: number;
  ram_min_free: number;
  ram_largest_free_block: number;
  ram_size: number;
  psram_free: number;
  psram_size: number;
};
```

Retrieves information about the device's memory usage.

### Returns

```ts
{
  ram_free: number;
  ram_min_free: number;
  ram_largest_free_block: number;
  ram_size: number;
  psram_free: number;
  psram_size: number;
}
```

An object containing RAM and PSRAM statistics:

- `ram_free`: Free RAM available (in bytes).
- `ram_min_free`: Minimum free RAM recorded (in bytes).
- `ram_largest_free_block`: Largest contiguous free RAM block (in bytes).
- `ram_size`: Total RAM size (in bytes).
- `psram_free`: Free PSRAM available (in bytes).
- `psram_size`: Total PSRAM size (in bytes).

| Name                     | Type     |
| ------------------------ | -------- |
| `ram_free`               | `number` |
| `ram_min_free`           | `number` |
| `ram_largest_free_block` | `number` |
| `ram_size`               | `number` |
| `psram_free`             | `number` |
| `psram_size`             | `number` |


<a name="dialogmd"></a>

# dialog

Displays dialog messages and user interactions.

### Example

```js
const dialog = require("dialog");

dialog.message("Operation completed successfully.");
dialog.error("An error occurred!", true);

const options = ["Yes", "No", "Cancel"];
const selected = dialog.choice(options);

const filePath = dialog.pickFile("/documents", "txt");
dialog.viewFile(filePath);
```

<!-- index-start -->
## dialog functions

- [dialog.message()](#dialogmessage)
- [dialog.error()](#dialogerror)
- [dialog.choice()](#dialogchoice)
- [dialog.pickFile()](#dialogpickfile)
- [dialog.viewFile()](#dialogviewfile)
<!-- index-end -->

## dialog.message()

```ts
dialog.message(message: string, waitForKeyPress?: boolean): void;
```

Displays a message dialog.

### Parameters

| Parameter          | Type      | Description                                                         |
| ------------------ | --------- | ------------------------------------------------------------------- |
| `message`          | `string`  | The message to display.                                             |
| `waitForKeyPress`? | `boolean` | If `true`, waits for a key press before closing (default: `false`). |

### Returns

`void`

---

## dialog.error()

```ts
dialog.error(message: string, waitForKeyPress?: boolean): void;
```

Displays an error dialog.

### Parameters

| Parameter          | Type      | Description                                                         |
| ------------------ | --------- | ------------------------------------------------------------------- |
| `message`          | `string`  | The error message to display.                                       |
| `waitForKeyPress`? | `boolean` | If `true`, waits for a key press before closing (default: `false`). |

### Returns

`void`

---

## dialog.choice()

```ts
dialog.choice(values: string[]): string;
```

Displays a choice dialog and returns the selected option.

### Parameters

| Parameter | Type       | Description                         |
| --------- | ---------- | ----------------------------------- |
| `values`  | `string`[] | An array of options to choose from. |

### Returns

`string`

The selected option as a string.

---

## dialog.pickFile()

```ts
dialog.pickFile(path?: string, extension?: string): string;
```

Opens a file picker dialog and returns the selected file path.

### Parameters

| Parameter    | Type     | Description                            |
| ------------ | -------- | -------------------------------------- |
| `path`?      | `string` | The initial directory path (optional). |
| `extension`? | `string` | The file extension filter (optional).  |

### Returns

`string`

The selected file path or `null` if no file is chosen.

---

## dialog.viewFile()

```ts
dialog.viewFile(path: string): void;
```

Opens and displays a file in a viewer.

### Parameters

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| `path`    | `string` | The file path to view. |

### Returns

`void`


<a name="displaymd"></a>

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
- [display.setTextColor()](#displaysettextcolor)
- [display.setTextAlign()](#displaysettextalign)
- [display.setTextSize()](#displaysettextsize)
- [display.drawText()](#displaydrawtext)
- [display.drawString()](#displaydrawstring)
- [display.setCursor()](#displaysetcursor)
- [display.print()](#displayprint)
- [display.println()](#displayprintln)
- [display.drawPixel()](#displaydrawpixel)
- [display.drawLine()](#displaydrawline)
- [display.drawRect()](#displaydrawrect)
- [display.drawFillRect()](#displaydrawfillrect)
- [display.drawXBitmap()](#displaydrawxbitmap)
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
display.setTextAlign(align: 0 | 1 | 2, baseline?: 0 | 1 | 2 | 3): void;
```

Sets the text alignment and baseline for rendering text.

### Example

```js
display.setTextAlign(1, 2); // Center align, bottom baseline
display.drawText(50, 50, "Hello!");
```

### Parameters

| Parameter   | Type                     | Description                                                                                           |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `align`     | `0` \| `1` \| `2`        | Horizontal alignment of the text: - `0` - Left - `1` - Center - `2` - Right                           |
| `baseline`? | `0` \| `1` \| `2` \| `3` | Vertical alignment of the text: - `0` - Top - `1` - Middle - `2` - Bottom - `3` - Alphabetic baseline |

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

Draws a monochrome bitmap (X Bitmap) at the specified position on the screen.

### Parameters

| Parameter  | Type          | Description                                                        |
| ---------- | ------------- | ------------------------------------------------------------------ |
| `x`        | `number`      | X-coordinate for the bitmap.                                       |
| `y`        | `number`      | Y-coordinate for the bitmap.                                       |
| `bitmap`   | `ArrayBuffer` | The bitmap data stored in an ArrayBuffer (1-bit per pixel).        |
| `width`    | `number`      | The width of the bitmap in pixels.                                 |
| `height`   | `number`      | The height of the bitmap in pixels.                                |
| `fgColor`  | `number`      | The foreground color (used for `1` bits in the bitmap).            |
| `bgColor`? | `number`      | (Optional) The background color (used for `0` bits in the bitmap). |

### Returns

`void`

---

## display.drawJpg()

```ts
display.drawJpg(
  filesystem: FileSystem,
  filename: string,
  x: number,
  y: number,
): void;
```

Draws a JPG image on the display.

### Parameters

| Parameter    | Type         | Description                             |
| ------------ | ------------ | --------------------------------------- |
| `filesystem` | `FileSystem` | File source (e.g., `sd` or `littlefs`). |
| `filename`   | `string`     | Image file path.                        |
| `x`          | `number`     | X-coordinate.                           |
| `y`          | `number`     | Y-coordinate.                           |

### Returns

`void`

---

## display.drawGif()

```ts
display.drawGif(
  filesystem: FileSystem,
  filename: string,
  x: number,
  y: number,
  center: boolean,
  playDurationMs: number,
): void;
```

Draws a GIF image on the display.

### Parameters

| Parameter        | Type         | Description                             |
| ---------------- | ------------ | --------------------------------------- |
| `filesystem`     | `FileSystem` | File source (e.g., `sd` or `littlefs`). |
| `filename`       | `string`     | Image file path.                        |
| `x`              | `number`     | X-coordinate.                           |
| `y`              | `number`     | Y-coordinate.                           |
| `center`         | `boolean`    | Whether to center the image.            |
| `playDurationMs` | `number`     | Duration to play the GIF.               |

### Returns

`void`

---

## display.gifOpen()

```ts
display.gifOpen(filesystem: FileSystem, path: string): Gif;
```

Opens a GIF for manual frame playback.

### Parameters

| Parameter    | Type         | Description                             |
| ------------ | ------------ | --------------------------------------- |
| `filesystem` | `FileSystem` | File source (e.g., `sd` or `littlefs`). |
| `path`       | `string`     | File path.                              |

### Returns

[`Gif`](#gif)

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


<a name="gpiomd"></a>

# gpio

GPIO (General Purpose Input/Output) ports

### Example

```js
const gpio = require("gpio");

const led = 26;
gpio.init(led, OUTPUT);

gpio.write(led, HIGH);
delay(1000);
gpio.write(led, LOW);
delay(1000);
```

<!-- index-start -->
## gpio functions

- [gpio.pinMode()](#gpiopinmode)
- [gpio.digitalWrite()](#gpiodigitalwrite)
- [gpio.digitalRead()](#gpiodigitalread)
- [gpio.analogWrite()](#gpioanalogwrite)
- [gpio.analogRead()](#gpioanalogread)
- [gpio.touchRead()](#gpiotouchread)
- [gpio.dacWrite()](#gpiodacwrite)
- [gpio.ledcSetup()](#gpioledcsetup)
- [gpio.ledcAttachPin()](#gpioledcattachpin)
- [gpio.ledcWrite()](#gpioledcwrite)
<!-- index-end -->

## gpio.pinMode()

```ts
gpio.pinMode(pin: string | number, mode: Mode): void;
```

Configures the specified pin mode.

### Parameters

| Parameter | Type                 | Description                                    |
| --------- | -------------------- | ---------------------------------------------- |
| `pin`     | `string` \| `number` | GPIO pin number or name (e.g., `26` or "G26"). |
| `mode`    | `Mode`               | Pin mode (`INPUT`, `OUTPUT`, `PULLUP`, etc.).  |

### Returns

`void`

---

## gpio.digitalWrite()

```ts
gpio.digitalWrite(pin: string | number, value: boolean | PinValue): void;
```

Writes a digital value to a pin.

### Parameters

| Parameter | Type                    | Description                     |
| --------- | ----------------------- | ------------------------------- |
| `pin`     | `string` \| `number`    | GPIO pin number or name.        |
| `value`   | `boolean` \| `PinValue` | `HIGH`/`LOW` or `true`/`false`. |

### Returns

`void`

---

## gpio.digitalRead()

```ts
gpio.digitalRead(pin: string | number): number;
```

Reads the digital state of a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |

### Returns

`number`

`1` for HIGH, `0` for LOW.

---

## gpio.analogWrite()

```ts
gpio.analogWrite(pin: string | number, value: number): void;
```

Writes an analog value (PWM) to a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |
| `value`   | `number`             | PWM duty cycle (0-255).  |

### Returns

`void`

---

## gpio.analogRead()

```ts
gpio.analogRead(pin: string | number): number;
```

Reads the analog value from a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |

### Returns

`number`

Analog value (0-4095 for ADC1, varies for ADC2).

---

## gpio.touchRead()

```ts
gpio.touchRead(pin: string | number): number;
```

Reads the capacitive touch sensor value from a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |

### Returns

`number`

Touch sensor value.

---

## gpio.dacWrite()

```ts
gpio.dacWrite(pin: string | number, value: number): void;
```

Writes a DAC (Digital-to-Analog) value to a pin.

### Parameters

| Parameter | Type                 | Description              |
| --------- | -------------------- | ------------------------ |
| `pin`     | `string` \| `number` | GPIO pin number or name. |
| `value`   | `number`             | DAC value (0-255).       |

### Returns

`void`

---

## gpio.ledcSetup()

```ts
gpio.ledcSetup(
  channel: number,
  freq: number,
  resolution_bits: number,
): number;
```

Configures an LEDC (PWM) channel with a specific frequency and resolution.

### Parameters

| Parameter         | Type     | Description                                        |
| ----------------- | -------- | -------------------------------------------------- |
| `channel`         | `number` | LEDC channel number (0–15).                        |
| `freq`            | `number` | PWM frequency in Hz.                               |
| `resolution_bits` | `number` | Resolution (1–16 bits, defining duty cycle range). |

### Returns

`number`

The actual frequency set.

---

## gpio.ledcAttachPin()

```ts
gpio.ledcAttachPin(pin: number, channel: number): number;
```

Attaches a GPIO pin to an LEDC (PWM) channel.

### Parameters

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| `pin`     | `number` | GPIO pin number.            |
| `channel` | `number` | LEDC channel number (0–15). |

### Returns

`number`

`0` on success, non-zero on failure.

---

## gpio.ledcWrite()

```ts
gpio.ledcWrite(channel: number, duty: number): number;
```

Sets the PWM duty cycle for a specific LEDC (PWM) channel.

### Parameters

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| `channel` | `number` | LEDC channel number (0–15).                |
| `duty`    | `number` | Duty cycle (0 to `2^resolution_bits - 1`). |

### Returns

`number`

`0` on success, non-zero on failure.


<a name="irmd"></a>

# ir

Interacting with infrared (IR) signals.

### Example

```js
const ir = require("ir");

const signal = ir.read(5); // Waits up to 5 seconds for an IR signal
console.log("Received IR signal:", signal);

const rawSignal = ir.readRaw(5);
console.log("Received raw IR signal:", rawSignal);

const success = ir.transmitFile("/signals/power_on.ir");
console.log("Transmission successful:", success);
```

<!-- index-start -->
## ir functions

- [ir.read()](#irread)
- [ir.readRaw()](#irreadraw)
- [ir.transmitFile()](#irtransmitfile)
<!-- index-end -->

## ir.read()

```ts
ir.read(timeoutSeconds: number): string;
```

Reads an infrared signal within a given timeout.

### Parameters

| Parameter        | Type     | Description                  |
| ---------------- | -------- | ---------------------------- |
| `timeoutSeconds` | `number` | Timeout duration in seconds. |

### Returns

`string`

The received IR signal as a string.

---

## ir.readRaw()

```ts
ir.readRaw(timeoutSeconds: number): string;
```

Reads an infrared signal in raw format within a given timeout.

### Parameters

| Parameter        | Type     | Description                  |
| ---------------- | -------- | ---------------------------- |
| `timeoutSeconds` | `number` | Timeout duration in seconds. |

### Returns

`string`

The raw received IR signal as a string.

---

## ir.transmitFile()

```ts
ir.transmitFile(path: string): boolean;
```

Transmits an infrared signal stored in a file.

### Parameters

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| `path`    | `string` | Path to the IR signal file. |

### Returns

`boolean`

`true` if the transmission was successful, otherwise `false`.


<a name="keyboardmd"></a>

# keyboard

Access the keyboard input.

### Example

```js
const keyboard = require("keyboard");

while (true) {
  if (keyboard.getAnyPress()) {
    break; // Exits the loop when a button is pressed.
  }
}
```

<!-- index-start -->
## keyboard functions

- [keyboard.getKeysPressed()](#keyboardgetkeyspressed)
- [keyboard.getPrevPress()](#keyboardgetprevpress)
- [keyboard.getSelPress()](#keyboardgetselpress)
- [keyboard.getNextPress()](#keyboardgetnextpress)
- [keyboard.getAnyPress()](#keyboardgetanypress)
- [keyboard.keyboard()](#keyboardkeyboard)
<!-- index-end -->

## keyboard.getKeysPressed()

```ts
keyboard.getKeysPressed(): string[];
```

Gets a list of currently pressed keys.

### Returns

`string`[]

An array of key names.

---

## keyboard.getPrevPress()

```ts
keyboard.getPrevPress(): boolean;
```

Checks if the "previous" button was pressed.

### Returns

`boolean`

`true` if the button was pressed, otherwise `false`.

---

## keyboard.getSelPress()

```ts
keyboard.getSelPress(): boolean;
```

Checks if the "select" button was pressed.

### Returns

`boolean`

`true` if the button was pressed, otherwise `false`.

---

## keyboard.getNextPress()

```ts
keyboard.getNextPress(): boolean;
```

Checks if the "next" button was pressed.

### Returns

`boolean`

`true` if the button was pressed, otherwise `false`.

---

## keyboard.getAnyPress()

```ts
keyboard.getAnyPress(): boolean;
```

Checks if any button was pressed.

### Returns

`boolean`

`true` if any button was pressed, otherwise `false`.

---

## keyboard.keyboard()

```ts
keyboard.keyboard(title: string, valueLength: number, value: string): void;
```

Opens an on-screen keyboard for user input.

### Parameters

| Parameter     | Type     | Description                        |
| ------------- | -------- | ---------------------------------- |
| `title`       | `string` | Title of the keyboard prompt.      |
| `valueLength` | `number` | Maximum length of the input value. |
| `value`       | `string` | Initial value to display.          |

### Returns

`void`


<a name="notificationmd"></a>

# notification

Controls the notification LED.

### Example

```js
const notification = require("notification");

notification.blink(200); // Blinks the LED for 200ms
delay(1000);
notification.blink("short"); // Blinks using a predefined short duration
```

<!-- index-start -->
## notification functions

- [notification.blink()](#notificationblink)
<!-- index-end -->

## notification.blink()

```ts
notification.blink(durationMs: number | "short" | "long"): void;
```

Blinks the notification LED for a specified duration.

This function turns the LED on, waits for the given duration, and then turns it off.
Equivalent to:

```js
digitalWrite(19, HIGH);
delay(ms);
digitalWrite(19, LOW);
```

### Parameters

| Parameter    | Type                              | Description                                                 |
| ------------ | --------------------------------- | ----------------------------------------------------------- |
| `durationMs` | `number` \| `"short"` \| `"long"` | Duration in milliseconds for how long the LED should blink. |

### Returns

`void`


<a name="serialmd"></a>

# serial

Serial communication.

### Example

```js
const serial = require("serial");

serial.println("Hello, Serial Port!");
const input = serial.readln();
console.log("Received:", input);
```

<!-- index-start -->
## serial functions

- [serial.print()](#serialprint)
- [serial.println()](#serialprintln)
- [serial.readln()](#serialreadln)
<!-- index-end -->

## serial.print()

```ts
serial.print(...args: any[]): void;
```

Sends a message over the serial connection without a newline.

### Parameters

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| ...`args` | `any`[] | The values to print. |

### Returns

`void`

---

## serial.println()

```ts
serial.println(...args: any[]): void;
```

Sends a message over the serial connection with a newline at the end.

### Parameters

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| ...`args` | `any`[] | The values to print. |

### Returns

`void`

---

## serial.readln()

```ts
serial.readln(): string;
```

Reads a line of input from the serial connection.

### Returns

`string`

The received string.


<a name="storagemd"></a>

# storage

File storage operations.

### Example

```js
const storage = require("storage");

// Write data to a file
const success = storage.write("/data/log.txt", "Hello, world!");
if (success) {
  console.log("File written successfully!");
}

// Read data from a file
const content = storage.read("/data/log.txt");
console.log("File content:", content);
```

<!-- index-start -->
## storage functions

- [storage.read()](#read)
- [storage.write()](#storagewrite)
<!-- index-end -->

## read()

### Call Signature

```ts
storage.read(path: string, binary?: false): string;
```

Reads the content of a file.

#### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `path`    | `string` | The file path (e.g., "/data/log.txt"). |
| `binary`? | `false`  | -                                      |

#### Returns

`string`

The file content as a string.

### Call Signature

```ts
storage.read(path: string, binary: true): Uint8Array;
```

Reads the content of a file.

#### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `path`    | `string` | The file path (e.g., "/data/log.txt"). |
| `binary`  | `true`   | -                                      |

#### Returns

`Uint8Array`

The file content as a string.

---

## storage.write()

```ts
storage.write(path: string, data: string): boolean;
```

Writes data to a file.

### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `path`    | `string` | The file path (e.g., "/data/log.txt"). |
| `data`    | `string` | The string data to write.              |

### Returns

`boolean`

`true` if the write operation was successful, otherwise `false`.


<a name="subghzmd"></a>

# subghz

Sub-GHz communication.

This module allows interaction with Sub-GHz frequencies for reading and transmitting data.

### Example

```js
const subghz = require("subghz");

// Set frequency to 433 MHz
subghz.setFrequency(433);

// Read incoming signal for 5 seconds
const receivedData = subghz.read(5);
console.log("Received Data:", receivedData);

// Transmit a stored signal file
const success = subghz.transmitFile("/plug1_on.sub");
if (success) {
  console.log("Transmission successful!");
}
```

<!-- index-start -->
## subghz functions

- [subghz.setFrequency()](#subghzsetfrequency)
- [subghz.read()](#subghzread)
- [subghz.readRaw()](#subghzreadraw)
- [subghz.transmitFile()](#subghztransmitfile)
<!-- index-end -->

## subghz.setFrequency()

```ts
subghz.setFrequency(freq: number): void;
```

Sets the frequency for Sub-GHz communication.

### Parameters

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| `freq`    | `number` | Frequency in MHz (e.g., 433 for 433 MHz). |

### Returns

`void`

---

## subghz.read()

```ts
subghz.read(timeoutSeconds: number): string;
```

Reads an incoming signal.

### Parameters

| Parameter        | Type     | Description                                   |
| ---------------- | -------- | --------------------------------------------- |
| `timeoutSeconds` | `number` | Maximum time in seconds to wait for a signal. |

### Returns

`string`

The received signal as a string.

---

## subghz.readRaw()

```ts
subghz.readRaw(timeoutSeconds: number): string;
```

Reads raw incoming signal data.

### Parameters

| Parameter        | Type     | Description                                   |
| ---------------- | -------- | --------------------------------------------- |
| `timeoutSeconds` | `number` | Maximum time in seconds to wait for a signal. |

### Returns

`string`

The raw received signal as a string.

---

## subghz.transmitFile()

```ts
subghz.transmitFile(filename: string): boolean;
```

Transmits a saved signal from a file.

### Parameters

| Parameter  | Type     | Description                                             |
| ---------- | -------- | ------------------------------------------------------- |
| `filename` | `string` | The path to the file containing the signal to transmit. |

### Returns

`boolean`

`true` if the transmission was successful, otherwise `false`.


<a name="wifimd"></a>

# wifi

Wi-Fi connection and HTTP requests.

### Example

```js
const wifi = require("wifi");

if (!wifi.connected()) {
  wifi.connect("MySSID", 10, "password123");
}

const networks = wifi.scan();
console.log("Available Networks:", networks);

const response = wifi.fetch("https://example.com/api", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
});
console.log(response.body);
```

<!-- index-start -->
## wifi functions

- [wifi.connected()](#wificonnected)
- [wifi.connect()](#wificonnect)
- [wifi.connectDialog()](#wificonnectdialog)
- [wifi.disconnect()](#wifidisconnect)
- [wifi.scan()](#wifiscan)
- [wifi.httpFetch()](#wifihttpfetch)
<!-- index-end -->

## wifi.connected()

```ts
wifi.connected(): boolean;
```

Checks if the device is connected to a Wi-Fi network.

### Returns

`boolean`

`true` if connected, otherwise `false`.

---

## wifi.connect()

```ts
wifi.connect(
  ssid: string,
  timeoutInSeconds: number,
  password: string,
): boolean;
```

Connects to a Wi-Fi network.

### Parameters

| Parameter          | Type     | Description                                                    |
| ------------------ | -------- | -------------------------------------------------------------- |
| `ssid`             | `string` | The name of the Wi-Fi network (SSID).                          |
| `timeoutInSeconds` | `number` | The time (in seconds) to wait for a connection before failing. |
| `password`         | `string` | The Wi-Fi password.                                            |

### Returns

`boolean`

`true` if successfully connected, otherwise `false`.

---

## wifi.connectDialog()

```ts
wifi.connectDialog(): void;
```

Opens a dialog to select and connect to a Wi-Fi network.

### Returns

`void`

---

## wifi.disconnect()

```ts
wifi.disconnect(): void;
```

Disconnects from the current Wi-Fi network.

### Returns

`void`

---

## wifi.scan()

```ts
wifi.scan(): {
  encryptionType: string;
  SSID: string;
  MAC: string;
}[];
```

Scans for available Wi-Fi networks.

### Returns

\{
`encryptionType`: `string`;
`SSID`: `string`;
`MAC`: `string`;
\}[]

An array of available networks, each containing:

- `encryptionType`: The type of encryption used (e.g., WPA2, WEP).
- `SSID`: The name of the network.
- `MAC`: The MAC address of the access point.

---

## wifi.httpFetch()

```ts
wifi.httpFetch(
  url: string,
  options: {
    method:
      | "GET"
      | "POST"
      | "DELETE"
      | "PATCH"
      | "PUT"
      | "HEAD"
      | "OPTIONS"
      | "TRACE"
      | "CONNECT";
    body: string;
    headers: string[] | Record<string, string> | [string, string][];
  },
): {
  status: number;
  ok: boolean;
  body: string;
};
```

Performs an HTTP request.

### Parameters

| Parameter          | Type                                                                                                                                                                                                                                            | Description                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `url`              | `string`                                                                                                                                                                                                                                        | The URL to fetch.                                    |
| `options`          | \{ `method`: \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`; `body`: `string`; `headers`: `string`[] \| `Record`&lt;`string`, `string`&gt; \| \[`string`, `string`\][]; \} | Request options including method, body, and headers. |
| `options.method`   | \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`                                                                                                                             | -                                                    |
| `options.body`?    | `string`                                                                                                                                                                                                                                        | -                                                    |
| `options.headers`? | `string`[] \| `Record`&lt;`string`, `string`&gt; \| \[`string`, `string`\][]                                                                                                                                                                    | -                                                    |

### Returns

```ts
{
  status: number;
  ok: boolean;
  body: string;
}
```

An object containing:

- `status`: The HTTP response status code (e.g., `200`, `404`).
- `ok`: `true` if the response status is 200-299, otherwise `false`.
- `body`: The response body as a string.

| Name     | Type      |
| -------- | --------- |
| `status` | `number`  |
| `ok`     | `boolean` |
| `body`   | `string`  |
