declare function assert(assertion: boolean, message?: string): boolean;
declare function to_hex_string(text: string): string;
declare function to_upper_case(text: string): string;
declare function to_lower_case(text: string): string;

import keyboard from "keyboard";

//////     GLOBALS    //////
assert(typeof BRUCE_PRICOLOR === "number", "BRUCE_PRICOLOR should be of type number");
assert(typeof BRUCE_SECCOLOR === "number", "BRUCE_SECCOLOR should be of type number");
assert(typeof BRUCE_BGCOLOR === "number", "BRUCE_BGCOLOR should be of type number");

assert(typeof now() === "number", "return type of now() should be number");

const timeBeforeDelay = now();
delay(200);
assert(now() >= timeBeforeDelay + 190, "delay(200) or now() is not working");

assert(parse_int("213") === 213, 'parse_int("213") !== 213');
assert(to_string(213) === "213", 'to_string(213) !== "213"');
assert(to_hex_string("123") === "7b", 'to_hex_string("123") !== "7b"');
assert(to_lower_case("123") === "123", 'to_lower_case(213) !== "213"');
assert(to_lower_case("AsdsasDASDASD") === "asdsasdasdasd", 'to_lower_case("AsdsasDASDASD") !== "asdsasdasdasd"');
assert(to_upper_case("123") === "123", 'to_upper_case(213) !== "213"');
assert(to_upper_case("AsdsasDASDASD") === "ASDSASDASDASD", 'to_upper_case("AsdsasDASDASD") !== "ASDSASDASDASD"');

console.log("random(100):", random(100));
console.log("random(100):", random(100));
console.log("random(100):", random(100));
console.log("random(50, 100):", random(50, 100));
console.log("random(20, 5000):", random(20, 5000));
console.log("random(2):", random(2));
console.log("random(2):", random(2));

console.log("Globals tests passed!");

//////  AUDIO MODULE  //////
import audio from "audio";

audio.tone(988, 500);
// @ts-ignore legacy
tone(440, 500);
// TODO: Test audio.playFile and playAudioFile

//////  BADUSB MODULE  //////
// TODO: Add tests for BADUSB functions


//////  DEVICE MODULE  //////
import device from "device";

console.log("New syntax:");
console.log("Device Name:", device.getName());
console.log("Board:", device.getBoard());
console.log("Model:", device.getModel());
console.log("Battery Charge:", device.getBatteryCharge(), "%");

const memoryStats = device.getFreeHeapSize();
console.log("RAM Free:", memoryStats.ram_free);
console.log("PSRAM Free:", memoryStats.psram_free);

// @ts-ignore legacy
console.log("Board:", getBoard());
// @ts-ignore legacy
console.log("Battery Charge:", getBattery(), "%");

// @ts-ignore legacy
const memoryStatsOld = getFreeHeapSize();
console.log("RAM Free:", memoryStatsOld.ram_free);
console.log("PSRAM Free:", memoryStatsOld.psram_free);

console.log("Device module tests passed!");

//////  DIALOG MODULE //////
import dialog from "dialog";

const buttonSelected = dialog.message("Choose option:", {left: "back", center: "ok", right: "next"});
console.log(buttonSelected);
// @ts-ignore TODO
dialog.info("Info (dialog.info).", true);
// @ts-ignore TODO
dialog.success("Success (dialog.success).", true);
// @ts-ignore TODO
dialog.warning("Warning (dialog.warning).", true);
dialog.error("Error (dialog.error).", true);
// @ts-ignore legacy
dialogMessage("Info legacy (dialogMessage).", true);
// @ts-ignore legacy
dialogError("Error legacy (dialogError).", true);

const options = ["Yes", "No", "Cancel"];
const selectedNew = dialog.choice(options);
console.log("selected choice in dialog.choice:", selectedNew);
// @ts-ignore legacy
const selectedOld = dialogChoice(options);
console.log("selected choice in legacy dialogChoice:", selectedOld);

// @ts-ignore legacy
const filePathOld = dialogPickFile("/", "*");
// @ts-ignore legacy
dialogViewFile(filePathOld);

const filePath = dialog.pickFile("/", ".txt");
dialog.viewFile(filePath);

dialog.viewText("test1line1", "test1");
dialog.viewText("test2line1\ntest2line2", "test1");
dialog.viewText("test3line1\ntest3line2\n", "test1");

// @ts-ignore TODO
dialog.prompt('mytitle', 5, 'zxc');

console.log("Dialog module tests passed!");

////// DISPLAY MODULE //////
import display from "display";

// Test screen dimensions
assert(display.width() > 0, "Display width should be greater than 0");
assert(display.height() > 0, "Display height should be greater than 0");
// @ts-ignore legacy
assert(width() = display.width(), "Display width legacy should be equal to new syntax");
// @ts-ignore legacy
assert(height() = display.height(), "Display height legacy should be equal to new syntax");

// Test basic drawing
display.fill(display.color(60, 60, 60)); // Clear the screen
display.setTextSize(3);
display.drawText("Test (New syntax)", 5, 5);
display.drawRect(10, 10, 50, 50, display.color(255, 0, 0));
display.drawFillRect(60, 60, 50, 50, display.color(255, 255, 0));
display.drawFillRoundRect(160, 60, 50, 50, 10, display.color(255, 255, 255));
display.drawFillRectGradient(
  100,
  10,
  50,
  50,
  display.color(255, 0, 0),
  display.color(0, 0, 255),
  "horizontal"
);
display.drawFillRectGradient(
  10,
  60,
  50,
  50,
  display.color(255, 255, 0),
  display.color(0, 255, 255),
  "vertical"
);
display.drawPixel(
  20,
  20,
  display.color(255, 255, 255)
);
display.drawLine(
  25,
  25,
  30,
  30,
  display.color(255, 255, 255)
);
console.log("Display module test (new sytax to display) passed!");

while (!keyboard.getAnyPress()) {
  delay(10);
}

//////  GPIO MODULE  //////
