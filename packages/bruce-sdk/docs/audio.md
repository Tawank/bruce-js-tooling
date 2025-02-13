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
