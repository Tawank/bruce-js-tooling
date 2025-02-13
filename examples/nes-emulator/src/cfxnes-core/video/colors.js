import {detectEndianness} from '../common';

const le = detectEndianness() === 'LE';

export const unpackColor = le ? unpackColorLE : unpackColorBE;

export const BLACK_COLOR = packColor(0, 0, 0);

export function packColor(r, g, b, a = 0xFF) {
  return ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3);
}


export function unpackColorLE(c) {
  return [c & 0xFF, (c >>> 8) & 0xFF, (c >>> 16) & 0xFF, (c >>> 24) & 0xFF];
}

export function unpackColorBE(c) {
  return [(c >>> 24) & 0xFF, (c >>> 16) & 0xFF, (c >>> 8) & 0xFF, c & 0xFF];
}
