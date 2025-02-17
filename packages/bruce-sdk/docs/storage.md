# storage

File storage operations.

This module provides functions for reading, writing, listing, renaming, and deleting files on different storage types.

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

// Rename a file
const renamed = storage.rename("/data/log.txt", "/data/log_old.txt");
console.log("Rename successful:", renamed);

// Delete a file
const deleted = storage.delete("/data/log_old.txt");
console.log("Delete successful:", deleted);

// List directory contents
const files = storage.readdir("/data", { withFileTypes: true });
console.log("Files:\n", JSON.stringify(files, null, 2));

// Create a new directory
storage.mkdir("/data/newdir");

// Remove a directory
storage.rmdir("/data/newdir");
```

<!-- index-start -->
## storage functions

- [storage.Dirent](#storagedirent)
- [storage.read()](#storageread)
- [storage.write()](#storagewrite)
- [storage.readdir()](#storagereaddir)
- [storage.rename()](#storagerename)
- [storage.remove()](#storageremove)
- [storage.mkdir()](#storagemkdir)
- [storage.rmdir()](#storagermdir)
<!-- index-end -->

## storage.Dirent

Directory entry representing a file or directory.

### Properties

| Property                               | Type      |
| -------------------------------------- | --------- |
| <a id="name"></a> `name`               | `string`  |
| <a id="size"></a> `size`               | `number`  |
| <a id="isdirectory"></a> `isDirectory` | `boolean` |

---

## storage.read()

### Call Signature

```ts
storage.read(path: string | Path, binary?: false): string;
```

Reads the content of a file.

#### Parameters

| Parameter | Type                                  | Description                                                                                                                                    |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`    | `string` \| [`Path`](globals.md#path) | The path to the file. Supports: - A string path (e.g., `"/file.txt"`). - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`. |
| `binary`? | `false`                               | If `true`, returns the file content as a `Uint8Array` (default: `false`).                                                                      |

#### Returns

`string`

The file content as:

- A `string` if `binary` is `false` or omitted.
- A `Uint8Array` if `binary` is `true`.

### Call Signature

```ts
storage.read(path: string | Path, binary: true): Uint8Array;
```

Reads the content of a file.

#### Parameters

| Parameter | Type                                  | Description                                                                                                                                    |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`    | `string` \| [`Path`](globals.md#path) | The path to the file. Supports: - A string path (e.g., `"/file.txt"`). - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`. |
| `binary`  | `true`                                | If `true`, returns the file content as a `Uint8Array` (default: `false`).                                                                      |

#### Returns

`Uint8Array`

The file content as:

- A `string` if `binary` is `false` or omitted.
- A `Uint8Array` if `binary` is `true`.

---

## storage.write()

```ts
storage.write(path: string | Path, data: string | Uint8Array): boolean;
```

Writes data to a file.

### Parameters

| Parameter | Type                                  | Description                                                                                                                                    |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`    | `string` \| [`Path`](globals.md#path) | The path to the file. Supports: - A string path (e.g., `"/file.txt"`). - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`. |
| `data`    | `string` \| `Uint8Array`              | The data to write. Supports both `string` and `Uint8Array`.                                                                                    |

### Returns

`boolean`

`true` if the write operation was successful, otherwise `false`.

---

## storage.readdir()

### Call Signature

```ts
storage.readdir(
  path: string | Path,
  options?: {
    withFileTypes: false;
  },
): string[];
```

Lists the contents of a directory.

#### Parameters

| Parameter                | Type                                  | Description                                                                                                                                  |
| ------------------------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`                   | `string` \| [`Path`](globals.md#path) | The directory path. Supports: - A string path (e.g., `"/file.txt"`). - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`. |
| `options`?               | \{ `withFileTypes`: `false`; \}       | -                                                                                                                                            |
| `options.withFileTypes`? | `false`                               | -                                                                                                                                            |

#### Returns

`string`[]

An array of files and directories names in the directory.

### Call Signature

```ts
storage.readdir(
  path: string | Path,
  options: {
    withFileTypes: true;
  },
): Dirent[];
```

Lists the contents of a directory.

#### Parameters

| Parameter               | Type                                  | Description                                                                                                                                  |
| ----------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`                  | `string` \| [`Path`](globals.md#path) | The directory path. Supports: - A string path (e.g., `"/file.txt"`). - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`. |
| `options`               | \{ `withFileTypes`: `true`; \}        | If `{ withFileTypes: true }`, returns an array of `Dirent` objects with file type info.                                                      |
| `options.withFileTypes` | `true`                                | -                                                                                                                                            |

#### Returns

[`Dirent`](storage.md#dirent)[]

An array of filenames or `Dirent` objects if `withFileTypes` is `true`.

---

## storage.rename()

```ts
storage.rename(oldPath: string | Path, newPath: string): boolean;
```

Renames a file or directory.

### Parameters

| Parameter | Type                                  | Description                                                                                                                                                         |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `oldPath` | `string` \| [`Path`](globals.md#path) | The current path of the file or directory. Supports: - A string path (e.g., `"/file.txt"`). - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`. |
| `newPath` | `string`                              | The new path.                                                                                                                                                       |

### Returns

`boolean`

`true` if the rename operation was successful, otherwise `false`.

---

## storage.remove()

```ts
storage.remove(path: string | Path): boolean;
```

Deletes a file or directory.

### Parameters

| Parameter | Type                                  | Description                                                                                                                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`    | `string` \| [`Path`](globals.md#path) | The path of the file or directory to delete. Supports: - A string path (e.g., `"/file.txt"`). - A `Path` object specifying storage `{ fs: "sd", path: "/file.txt" }`. |

### Returns

`boolean`

`true` if the delete operation was successful, otherwise `false`.

---

## storage.mkdir()

```ts
storage.mkdir(path: string | Path): boolean;
```

Creates a directory, including parent directories if necessary.

### Parameters

| Parameter | Type                                  | Description                |
| --------- | ------------------------------------- | -------------------------- |
| `path`    | `string` \| [`Path`](globals.md#path) | The path to the directory. |

### Returns

`boolean`

`true` if the directory was successfully created, otherwise `false`.

---

## storage.rmdir()

```ts
storage.rmdir(path: string | Path): boolean;
```

Removes an empty directory.

### Parameters

| Parameter | Type                                  | Description                |
| --------- | ------------------------------------- | -------------------------- |
| `path`    | `string` \| [`Path`](globals.md#path) | The path to the directory. |

### Returns

`boolean`

`true` if the directory was successfully removed, otherwise `false`.
