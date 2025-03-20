/**
 * Wi-Fi connection and HTTP requests.
 *
 * ### Example
 * ```js
 * const wifi = require("wifi");
 *
 * if (!wifi.connected()) {
 *   wifi.connect("MySSID", 10, "password123");
 * }
 *
 * const networks = wifi.scan();
 * console.log("Available Networks:", networks);
 *
 * const response = wifi.httpFetch("https://example.com/api", {
 *   method: "GET",
 *   headers: { "Content-Type": "application/json" }
 * });
 * console.log(response.body);
 * ```
 *
 * @module wifi
 */
declare module 'wifi' {
  /**
   * Checks if the device is connected to a Wi-Fi network.
   *
   * @returns `true` if connected, otherwise `false`.
   */
  export function connected(): boolean;

  /**
   * Connects to a Wi-Fi network.
   *
   * @param ssid The name of the Wi-Fi network (SSID).
   * @param timeoutInSeconds The time (in seconds) to wait for a connection before failing.
   * @param password The Wi-Fi password.
   * @returns `true` if successfully connected, otherwise `false`.
   */
  export function connect(
    ssid: string,
    timeoutInSeconds: number,
    password: string,
  ): boolean;

  /**
   * Opens a dialog to select and connect to a Wi-Fi network.
   */
  export function connectDialog(): void;

  /**
   * Disconnects from the current Wi-Fi network.
   */
  export function disconnect(): void;

  /**
   * Scans for available Wi-Fi networks.
   *
   * @returns An array of available networks, each containing:
   *   - `encryptionType`: The type of encryption used (e.g., WPA2, WEP).
   *   - `SSID`: The name of the network.
   *   - `MAC`: The MAC address of the access point.
   */
  export function scan(): Array<{
    encryptionType: string;
    SSID: string;
    MAC: string;
  }>;

  /**
   * Performs an HTTP request.
   *
   * @param url The URL to fetch.
   * @param options Request options including method, body, and headers.
   * @returns An object containing:
   *   - `status`: The HTTP response status code (e.g., `200`, `404`).
   *   - `ok`: `true` if the response status is 200-299, otherwise `false`.
   *   - `body`: The response body as a string.
   */
  export function httpFetch(
    url: string,
    options?: {
      method:
        | 'GET'
        | 'POST'
        | 'DELETE'
        | 'PATCH'
        | 'PUT'
        | 'HEAD'
        | 'OPTIONS'
        | 'TRACE'
        | 'CONNECT';
      body?: string;
      binaryResponse?: false;
      headers?: Record<string, string> | [string, string][] | string[];
    },
  ): { status: number; ok: boolean; body: string };

  export function httpFetch(
    url: string,
    options?: {
      method:
        | 'GET'
        | 'POST'
        | 'DELETE'
        | 'PATCH'
        | 'PUT'
        | 'HEAD'
        | 'OPTIONS'
        | 'TRACE'
        | 'CONNECT';
      body?: string;
      responseType?: 'string';
      headers?: Record<string, string> | [string, string][] | string[];
    },
  ): { status: number; ok: boolean; body: string };

  export function httpFetch(
    url: string,
    options?: {
      method:
        | 'GET'
        | 'POST'
        | 'DELETE'
        | 'PATCH'
        | 'PUT'
        | 'HEAD'
        | 'OPTIONS'
        | 'TRACE'
        | 'CONNECT';
      body?: string;
      responseType: 'binary';
      headers?: Record<string, string> | [string, string][] | string[];
    },
  ): { status: number; ok: boolean; body: Uint8Array };

  export function httpFetch(
    url: string,
    options?: {
      method:
        | 'GET'
        | 'POST'
        | 'DELETE'
        | 'PATCH'
        | 'PUT'
        | 'HEAD'
        | 'OPTIONS'
        | 'TRACE'
        | 'CONNECT';
      body?: string;
      responseType?: 'string' | 'binary';
      headers?: Record<string, string> | [string, string][] | string[];
    },
  ): { status: number; ok: boolean; body: string | Uint8Array };
}
