/**
 * GPIO (General Purpose Input/Output) ports
 *
 * ### Example
 * ```js
 * const gpio = require("gpio");
 *
 * const led = 26;
 * gpio.init(led, OUTPUT);
 *
 * gpio.write(led, HIGH);
 * delay(1000);
 * gpio.write(led, LOW);
 * delay(1000);
 * ```
 *
 * @module gpio
 */
declare module 'gpio' {
  /**
   * Configures the specified pin mode.
   * @param pin GPIO pin number or name (e.g., `26` or "G26").
   * @param mode Pin mode (`INPUT`, `OUTPUT`, `PULLUP`, etc.).
   */
  export function pinMode(pin: number | string, mode: Mode): void;

  /**
   * Writes a digital value to a pin.
   * @param pin GPIO pin number or name.
   * @param value `HIGH`/`LOW` or `true`/`false`.
   */
  export function digitalWrite(
    pin: number | string,
    value: boolean | PinValue,
  ): void;

  /**
   * Reads the digital state of a pin.
   * @param pin GPIO pin number or name.
   * @returns `1` for HIGH, `0` for LOW.
   */
  export function digitalRead(pin: number | string): number;

  /**
   * Writes an analog value (PWM) to a pin.
   * @param pin GPIO pin number or name.
   * @param value PWM duty cycle (0-255).
   */
  export function analogWrite(pin: number | string, value: number): void;

  /**
   * Reads the analog value from a pin.
   * @param pin GPIO pin number or name.
   * @returns Analog value (0-4095 for ADC1, varies for ADC2).
   */
  export function analogRead(pin: number | string): number;

  /**
   * Reads the capacitive touch sensor value from a pin.
   * @param pin GPIO pin number or name.
   * @returns Touch sensor value.
   */
  export function touchRead(pin: number | string): number;

  /**
   * Writes a DAC (Digital-to-Analog) value to a pin.
   * @param pin GPIO pin number or name.
   * @param value DAC value (0-255).
   */
  export function dacWrite(pin: number | string, value: number): void;

  /**
   * Configures an LEDC (PWM) channel with a specific frequency and resolution.
   * @param channel LEDC channel number (0–15).
   * @param freq PWM frequency in Hz.
   * @param resolution_bits Resolution (1–16 bits, defining duty cycle range).
   * @returns The actual frequency set.
   */
  export function ledcSetup(
    channel: number,
    freq: number,
    resolution_bits: number,
  ): number;

  /**
   * Attaches a GPIO pin to an LEDC (PWM) channel.
   * @param pin GPIO pin number.
   * @param channel LEDC channel number (0–15).
   * @returns `0` on success, non-zero on failure.
   */
  export function ledcAttachPin(pin: number, channel: number): number;

  /**
   * Sets the PWM duty cycle for a specific LEDC (PWM) channel.
   * @param channel LEDC channel number (0–15).
   * @param duty Duty cycle (0 to `2^resolution_bits - 1`).
   * @returns `0` on success, non-zero on failure.
   */
  export function ledcWrite(channel: number, duty: number): number;
}

/**
 * M5StickC plus2 pinout:
 * GPIO26 - DAC_2, ADC2_CH9, RTC_GPIO7,  EMAC_RXD1
 * GPIO25 - DAC_1, ADC2_CH8, RTC_GPIO6,  EMAC_RXD0
 * GPIO36 -        ADC1_CH0, RTC_GPIO0
 * GPIO0  -        ADC2_CH1, RTC_GPIO11, EMAC_TX_CLK, TOUCH1, CLK_OUT1
 * GPIO32 -        ADC1_CH4, RTC_GPIO9,               TOUCH9, 32K_XP
 * GPIO33 -        ADC1_CH5, RTC_GPIO8,               TOUCH8, 32K_XN
 */
