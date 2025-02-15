import {detectEndianness} from '../common';

const le = detectEndianness() === 'LE';

export const BLACK_COLOR = packColor(0, 0, 0);

// export function packColor(r, g, b, a = 0xFF) {
//   return ((r << 24) | (g << 16) | (b << 8) | a) >>> 0; // Convert to 32-bit unsigned integer
// }
export function packColor(r, g, b, a = 0xFF) {
  return ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3);
}


// export function unpackColor(c) {
//   return [c & 0xFF, (c >>> 8) & 0xFF, (c >>> 16) & 0xFF, (c >>> 24) & 0xFF];
// }
export function unpackColor(c) {
  return [
    ((c >> 11) & 0x1F) << 3,  // Extract 5-bit red, scale to 8-bit
    ((c >> 5) & 0x3F) << 2,   // Extract 6-bit green, scale to 8-bit
    (c & 0x1F) << 3           // Extract 5-bit blue, scale to 8-bit
  ];
}
