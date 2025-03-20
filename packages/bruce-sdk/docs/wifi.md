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

const response = wifi.httpFetch("https://example.com/api", {
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

### Call Signature

```ts
wifi.httpFetch(
  url: string,
  options?: {
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
    binaryResponse: false;
    headers: string[] | [string, string][] | Record<string, string>;
  },
): {
  status: number;
  ok: boolean;
  body: string;
};
```

Performs an HTTP request.

#### Parameters

| Parameter                 | Type                                                                                                                                                                                                                                                                       | Description                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `url`                     | `string`                                                                                                                                                                                                                                                                   | The URL to fetch.                                    |
| `options`?                | \{ `method`: \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`; `body`: `string`; `binaryResponse`: `false`; `headers`: `string`[] \| \[`string`, `string`\][] \| `Record`&lt;`string`, `string`&gt;; \} | Request options including method, body, and headers. |
| `options.method`?         | \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`                                                                                                                                                        | -                                                    |
| `options.body`?           | `string`                                                                                                                                                                                                                                                                   | -                                                    |
| `options.binaryResponse`? | `false`                                                                                                                                                                                                                                                                    | -                                                    |
| `options.headers`?        | `string`[] \| \[`string`, `string`\][] \| `Record`&lt;`string`, `string`&gt;                                                                                                                                                                                               | -                                                    |

#### Returns

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

### Call Signature

```ts
wifi.httpFetch(
  url: string,
  options?: {
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
    responseType: "string";
    headers: string[] | [string, string][] | Record<string, string>;
  },
): {
  status: number;
  ok: boolean;
  body: string;
};
```

Performs an HTTP request.

#### Parameters

| Parameter               | Type                                                                                                                                                                                                                                                                        | Description                                          |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `url`                   | `string`                                                                                                                                                                                                                                                                    | The URL to fetch.                                    |
| `options`?              | \{ `method`: \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`; `body`: `string`; `responseType`: `"string"`; `headers`: `string`[] \| \[`string`, `string`\][] \| `Record`&lt;`string`, `string`&gt;; \} | Request options including method, body, and headers. |
| `options.method`?       | \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`                                                                                                                                                         | -                                                    |
| `options.body`?         | `string`                                                                                                                                                                                                                                                                    | -                                                    |
| `options.responseType`? | `"string"`                                                                                                                                                                                                                                                                  | -                                                    |
| `options.headers`?      | `string`[] \| \[`string`, `string`\][] \| `Record`&lt;`string`, `string`&gt;                                                                                                                                                                                                | -                                                    |

#### Returns

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

### Call Signature

```ts
wifi.httpFetch(
  url: string,
  options?: {
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
    responseType: "binary";
    headers: string[] | [string, string][] | Record<string, string>;
  },
): {
  status: number;
  ok: boolean;
  body: Uint8Array;
};
```

Performs an HTTP request.

#### Parameters

| Parameter               | Type                                                                                                                                                                                                                                                                        | Description                                          |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `url`                   | `string`                                                                                                                                                                                                                                                                    | The URL to fetch.                                    |
| `options`?              | \{ `method`: \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`; `body`: `string`; `responseType`: `"binary"`; `headers`: `string`[] \| \[`string`, `string`\][] \| `Record`&lt;`string`, `string`&gt;; \} | Request options including method, body, and headers. |
| `options.method`?       | \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`                                                                                                                                                         | -                                                    |
| `options.body`?         | `string`                                                                                                                                                                                                                                                                    | -                                                    |
| `options.responseType`? | `"binary"`                                                                                                                                                                                                                                                                  | -                                                    |
| `options.headers`?      | `string`[] \| \[`string`, `string`\][] \| `Record`&lt;`string`, `string`&gt;                                                                                                                                                                                                | -                                                    |

#### Returns

```ts
{
  status: number;
  ok: boolean;
  body: Uint8Array;
}
```

An object containing:

- `status`: The HTTP response status code (e.g., `200`, `404`).
- `ok`: `true` if the response status is 200-299, otherwise `false`.
- `body`: The response body as a string.

| Name     | Type         |
| -------- | ------------ |
| `status` | `number`     |
| `ok`     | `boolean`    |
| `body`   | `Uint8Array` |

### Call Signature

```ts
wifi.httpFetch(
  url: string,
  options?: {
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
    responseType: "string" | "binary";
    headers: string[] | [string, string][] | Record<string, string>;
  },
): {
  status: number;
  ok: boolean;
  body: string | Uint8Array;
};
```

Performs an HTTP request.

#### Parameters

| Parameter               | Type                                                                                                                                                                                                                                                                                      | Description                                          |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `url`                   | `string`                                                                                                                                                                                                                                                                                  | The URL to fetch.                                    |
| `options`?              | \{ `method`: \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`; `body`: `string`; `responseType`: `"string"` \| `"binary"`; `headers`: `string`[] \| \[`string`, `string`\][] \| `Record`&lt;`string`, `string`&gt;; \} | Request options including method, body, and headers. |
| `options.method`?       | \| `"GET"` \| `"POST"` \| `"DELETE"` \| `"PATCH"` \| `"PUT"` \| `"HEAD"` \| `"OPTIONS"` \| `"TRACE"` \| `"CONNECT"`                                                                                                                                                                       | -                                                    |
| `options.body`?         | `string`                                                                                                                                                                                                                                                                                  | -                                                    |
| `options.responseType`? | `"string"` \| `"binary"`                                                                                                                                                                                                                                                                  | -                                                    |
| `options.headers`?      | `string`[] \| \[`string`, `string`\][] \| `Record`&lt;`string`, `string`&gt;                                                                                                                                                                                                              | -                                                    |

#### Returns

```ts
{
  status: number;
  ok: boolean;
  body: string | Uint8Array;
}
```

An object containing:

- `status`: The HTTP response status code (e.g., `200`, `404`).
- `ok`: `true` if the response status is 200-299, otherwise `false`.
- `body`: The response body as a string.

| Name     | Type                     |
| -------- | ------------------------ |
| `status` | `number`                 |
| `ok`     | `boolean`                |
| `body`   | `string` \| `Uint8Array` |
