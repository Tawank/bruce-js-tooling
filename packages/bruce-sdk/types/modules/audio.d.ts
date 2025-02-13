/**
 * Controls the audio.
 *
 * ### Example
 * ```js
 * const audio = require("audio");
 *
 * audio.tone(988, 2000); // Beeps buzzer for 2 seconds
 * ```
 *
 * @module audio
 */
declare module 'audio' {
  /**
   * Plays an audio file from storage.
   *
   * @param filename The path to the audio file (e.g., "/sound.wav").
   */
  export function playAudioFile(filename: string): void;

  /**
   * Plays a tone at the specified frequency for a given duration.
   *
   * @param frequency Frequency in Hz.
   * @param durationMs Duration in milliseconds.
   * @param nonBlocking If true, the function will not play the tone if it would block execution.
   */
  export function tone(
    frequency: number,
    durationMs: number,
    nonBlocking?: boolean,
  ): void;
}
