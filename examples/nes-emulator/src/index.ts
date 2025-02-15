import display from 'display';
import keyboard from 'keyboard';
import {
  NES,
  createCartridge,
  createPalette, VIDEO_WIDTH, VIDEO_HEIGHT,
  Joypad, Button,
} from './cfxnes-core/index.js';
import storage from 'storage';

// Array.fill polyfill
function fill<T>(value: T[], start, end) {
  var array = this.valueOf() as T[];

  var length = array.length;
  start = parseInt(start, 10) || 0;
  end = end === undefined ? length : (parseInt(end, 10) || 0);

  var i;
  var l;

  if (start < 0) {
    i = Math.max(length + start, 0);
  } else {
    i = Math.min(start, length);
  }

  if (end < 0) {
    l = Math.max(length + end, 0);
  } else {
    l = Math.min(end, length);
  }

  for (; i < l; i++) {
    array[i] = value as T;
  }

  return array;
}
// @ts-ignore
if (!Array.prototype.fill)  {
  // @ts-ignore
  Array.prototype.fill = fill;
}
if (!Uint8Array.prototype.fill)  {
  // @ts-ignore
  Uint8Array.prototype.fill = fill;
}
if (!Uint32Array.prototype.fill)  {
  // @ts-ignore
  Uint32Array.prototype.fill = fill;
}

// I am putting all code in function to optimise, if variables are outside
// functions they are put in global namespace, and it's slower to get
function main() {
  const nes = new NES();

  const romData = storage.read('/Super Mario Bros (E).nes', true);
  const cartridge1 = createCartridge(romData);
  nes.setCartridge(cartridge1);

  let getNextPressDown = false;
  let getSelPressDown = false;
  const joypad = new Joypad;
  nes.setInputDevice(1, joypad);

  const palette = createPalette('fceux'); // Predefined palette
  nes.setPalette(palette);
  const videoSprite = display.createSprite(VIDEO_WIDTH, VIDEO_HEIGHT, 16);
  nes.setRegion(null);

  let time = now();
  while (true) {
    if (keyboard.getNextPress()) {
      joypad.setButtonPressed(Button.LEFT, true);
      getNextPressDown = true;
    } else if (getNextPressDown) {
      joypad.setButtonPressed(Button.LEFT, false);
      getNextPressDown = false;
    }

    if (keyboard.getSelPress()) {
      joypad.setButtonPressed(Button.A, true);
      getSelPressDown = true;
    } else if (getSelPressDown) {
      joypad.setButtonPressed(Button.A, false);
      getSelPressDown = false;
    }

    if (keyboard.getPrevPress()) {
      break;
    }

    nes.renderFrame(videoSprite);

    videoSprite.pushSprite();

    console.log('nes.renderFrame time:');
    console.log(now() - time);
    time = now();

    // delay(1);
  }
}
main();
