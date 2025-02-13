"use strict";

// dist/index.js
var __importDefault = exports && exports.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var display_1 = __importDefault(require("display"));
var keyboard_1 = __importDefault(require("keyboard"));
function main() {
  display_1.default.setTextSize(2);
  var colorBlue = display_1.default.color(0, 0, 255);
  display_1.default.setTextColor(colorBlue);
  while (true) {
    if (keyboard_1.default.getAnyPress()) {
      break;
    }
    display_1.default.drawText("Hello world!", 10, 10);
    delay(1);
  }
}
main();
