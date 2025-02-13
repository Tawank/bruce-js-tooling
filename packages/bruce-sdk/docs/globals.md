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
