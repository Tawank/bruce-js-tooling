import display from 'display';
import keyboard from 'keyboard';
import {
  NES,
  createCartridge, readCartridge,
  createPalette, VIDEO_WIDTH, VIDEO_HEIGHT,
  Joypad, Button,
} from './cfxnes-core/index.js';
import storage from 'storage';
import serial from 'serial';

function fill(value, start, end) {
  var array = Object( this );

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
    array[i] = value;
  }

  return array;
};
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
  console.log('init nes');
  const nes = new NES();

  console.log('rom load');

  const romData = storage.read('/Super Mario Bros (E).nes', true);
  console.log('cartridge1');
  console.log(romData);
  const cartridge1 = createCartridge(romData);
  console.log('nes.setCartridge');
  nes.setCartridge(cartridge1);

  let getNextPressDown = false;
  let getSelPressDown = false;
  const joypad = new Joypad;
  nes.setInputDevice(1, joypad);

  console.log('videoBuffer');
  const videoBuffer = new Uint8Array(VIDEO_WIDTH * VIDEO_HEIGHT);

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

    console.log('nes.renderFrame');
    nes.renderFrame(videoBuffer);

    console.log(videoBuffer[0]);
    console.log(now() - time);
    time = now();

    delay(1);

  }

}
main();