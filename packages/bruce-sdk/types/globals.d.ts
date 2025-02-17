/**
 * Global variables and functions available in bruce js.
 *
 * ### Example
 * ```js
 * console.log(now()); // console.log prints to serial monitor
 * delay(1000); // Pause for 1000ms (1 second)
 * var myNumber = parse_int("2133"); // myNumber will be number 2133
 * var myString = to_string(24); // myString will be string "24"
 * var myHexStr = to_hex_string(1337); // myHexStr will be string "539" (because 1337 decimal is 0x539).
 * var str = "Hello World";
 * println(to_lower_case(str)); // prints: hello world
 * println(to_upper_case(str)); // prints: HELLO WORLD
 * println(random(1, 20)); // prints random value between 1 and 20
 * println(__dirname); // prints current dirname
 * ```
 *
 * @module
 */

/**
 * Returns the current time in milliseconds since the epoch
 * @returns The current timestamp in milliseconds
 */
declare function now(): number;

/**
 * Pauses execution for the specified number of milliseconds
 * @param ms The number of milliseconds to delay
 */
declare function delay(ms: number): void;

/**
 * Converts a string to a number
 * @param text The string to convert to a number
 */
declare function parse_int(text: string): number;

/**
 * Converts a value to a string
 * @param value The value to convert to a string
 */
declare function to_string(value: any): string;

/**
 * Converts a hex string to a number
 * @param text The hex string to convert to a number
 */
declare function to_hex_string(text: string): number;

/**
 * Converts a string to a number
 * @param text The string to convert to a number
 */
declare function to_lower_case(text: string): number;

/**
 * Converts a string to a number
 * @param text The string to convert to a number
 */
declare function to_upper_case(text: string): number;

/**
 * Returns a pseudo-random number
 * @param min Lower bound of the random value, inclusive (optional)
 * @param max Upper bound of the random value, exclusive
 */
declare function random(max: number): number;
declare function random(min: number, max: number): number;

/**
 * Prints text to serial monitor and display. Alias to [display.println](#displayprintln)().
 * @param args Text content.
 */
declare function println(...args: any[]): void;

/**
 * Path to the directory containing the current script
 */
declare const __dirname: string;

/**
 * Path to the current script file
 */
declare const __filename: string;

/**
 * Version of the bruce firmware
 */
declare const BRUCE_VERSION: string;

/**
 * @ignore
 */
declare const HIGH = 1;
/**
 * @ignore
 */
declare const LOW = 0;
/**
 * @ignore
 */
declare type PinValue = typeof HIGH | typeof LOW;

/**
 * @ignore
 */
declare const INPUT = 1;
/**
 * @ignore
 */
declare const OUTPUT = 3;
/**
 * @ignore
 */
declare const PULLUP = 4;
/**
 * @ignore
 */
declare const INPUT_PULLUP = 5;
/**
 * @ignore
 */
declare const PULLDOWN = 8;
/**
 * @ignore
 */
declare const INPUT_PULLDOWN = 9;
/**
 * @ignore
 */
declare type Mode =
  | typeof INPUT
  | typeof OUTPUT
  | typeof PULLUP
  | typeof INPUT_PULLUP
  | typeof PULLDOWN
  | typeof INPUT_PULLDOWN;

/**
 * Represents the storage medium where a file is located.
 *
 * - `'sd'` - File stored on SD card.
 * - `'littlefs'` - File stored on LittleFS.
 * - `null` - Automatically choose between SD card (if available) and LittleFS as a fallback.
 */
declare type FileSystem = 'sd' | 'littlefs' | null;

/**
 * Represents a file path along with its storage location.
 * ### Example
 * ```js
 * const dialog = require("dialog");
 * dialog.pickFile({ fs: "user", path: "/" });
 * ```
 */
declare interface Path {
  /** The storage medium where the file is located */
  fs: FileSystem;

  /** The file path within the selected storage medium */
  path: string;
}

/**
 * @ignore
 */
declare const console: {
  /**
   * Prints the given message to the Serial monitor
   * @param args The arguments are converted to strings, concatenated with spaces
   */
  log(...args: any[]): void;
  /**
   * Prints the given message to the Serial monitor with [D] at the begining
   * @param args The arguments are converted to strings, concatenated with spaces
   */
  debug(...args: any[]): void;
  /**
   * Prints the given message to the Serial monitor with [W] at the begining
   * @param args The arguments are converted to strings, concatenated with spaces
   */
  warn(...args: any[]): void;
  /**
   * Prints the given message to the Serial monitor with [E] at the begining
   * @param args The arguments are converted to strings, concatenated with spaces
   */
  error(...args: any[]): void;
};

/**
 * Loads a module. List of modules: [modules](#modules).
 * ### Example
 * ```js
 * const dialog = require("dialog");
 * dialog.message("Test.");
 * ```
 * @param module The name of the module to load
 */
declare function require(module: string): any;

/**
 * Represents the CommonJS module system.
 * Use `module.exports` to define the module's public API.
 * @ignore
 */
declare const module: {
  exports: any;
};

/**
 * Alias for `module.exports`.
 * Use `exports.propertyName = value` to add properties to the export object.
 * @ignore
 */
declare let exports: any;

/**
 * Foreign Pointer type
 *
 * JavaScript code cannot do anything with values of `RawPointer` type except
 * acquire them from native code and pass them right back to other parts of
 * native code. These values cannot be turned into something meaningful, nor can
 * be they modified.
 * @ignore
 */
declare type RawPointer = symbol & { __tag__: 'raw_ptr' };
// Introducing a nominal type in a hacky way; the `__tag__` property doesn't really exist.
