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

- [storage.read()](#storageread)
- [storage.write()](#storagewrite)
<!-- index-end -->

## storage.read()

```ts
storage.read(path: string): string;
```

Reads the content of a file.

### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `path`    | `string` | The file path (e.g., "/data/log.txt"). |

### Returns

`string`

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
