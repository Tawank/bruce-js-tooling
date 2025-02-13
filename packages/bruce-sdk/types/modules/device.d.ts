/**
 * Show device information.
 *
 * ### Example
 * ```js
 * const device = require("device");
 *
 * console.log("Device Name:", device.getName());
 * console.log("Board:", device.getBoard());
 * console.log("Model:", device.getModel());
 * console.log("Battery Charge:", device.getBatteryCharge(), "%");
 *
 * const memoryStats = device.getFreeHeapSize();
 * console.log("RAM Free:", memoryStats.ram_free);
 * console.log("PSRAM Free:", memoryStats.psram_free);
 * ```
 *
 * @module device
 */
declare module 'device' {
  /**
   * Retrieves the device's name.
   * @returns The name of the device.
   */
  export function getName(): string;

  /**
   * Retrieves the board type.
   * @returns The board identifier.
   */
  export function getBoard(): string;

  /**
   * Retrieves the model name.
   * @returns The model of the device.
   */
  export function getModel(): string;

  /**
   * Retrieves the current battery charge level.
   * @returns The battery charge percentage (0-100).
   */
  export function getBatteryCharge(): number;

  /**
   * Retrieves information about the device's memory usage.
   * @returns An object containing RAM and PSRAM statistics:
   *   - `ram_free`: Free RAM available (in bytes).
   *   - `ram_min_free`: Minimum free RAM recorded (in bytes).
   *   - `ram_largest_free_block`: Largest contiguous free RAM block (in bytes).
   *   - `ram_size`: Total RAM size (in bytes).
   *   - `psram_free`: Free PSRAM available (in bytes).
   *   - `psram_size`: Total PSRAM size (in bytes).
   */
  export function getFreeHeapSize(): {
    ram_free: number;
    ram_min_free: number;
    ram_largest_free_block: number;
    ram_size: number;
    psram_free: number;
    psram_size: number;
  };
}
