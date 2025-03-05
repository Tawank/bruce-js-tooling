"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var keyboard_1 = __importDefault(require("keyboard"));
//////     GLOBALS    //////
assert(typeof BRUCE_PRICOLOR === "number", "BRUCE_PRICOLOR should be of type number");
assert(typeof BRUCE_SECCOLOR === "number", "BRUCE_SECCOLOR should be of type number");
assert(typeof BRUCE_BGCOLOR === "number", "BRUCE_BGCOLOR should be of type number");
assert(typeof now() === "number", "return type of now() should be number");
var timeBeforeDelay = now();
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
var audio_1 = __importDefault(require("audio"));
audio_1.default.tone(988, 500);
// @ts-ignore legacy
tone(440, 500);
// TODO: Test audio.playFile and playAudioFile
//////  BADUSB MODULE  //////
// TODO: Add tests for BADUSB functions
//////  DEVICE MODULE  //////
var device_1 = __importDefault(require("device"));
console.log("New syntax:");
console.log("Device Name:", device_1.default.getName());
console.log("Board:", device_1.default.getBoard());
console.log("Model:", device_1.default.getModel());
console.log("Battery Charge:", device_1.default.getBatteryCharge(), "%");
var memoryStats = device_1.default.getFreeHeapSize();
console.log("RAM Free:", memoryStats.ram_free);
console.log("PSRAM Free:", memoryStats.psram_free);
// @ts-ignore legacy
console.log("Board:", getBoard());
// @ts-ignore legacy
console.log("Battery Charge:", getBattery(), "%");
// @ts-ignore legacy
var memoryStatsOld = getFreeHeapSize();
console.log("RAM Free:", memoryStatsOld.ram_free);
console.log("PSRAM Free:", memoryStatsOld.psram_free);
console.log("Device module tests passed!");
//////  DIALOG MODULE //////
var dialog_1 = __importDefault(require("dialog"));
var buttonSelected = dialog_1.default.message("Choose option:", { left: "back", center: "ok", right: "next" });
console.log(buttonSelected);
// @ts-ignore TODO
dialog_1.default.info("Info (dialog.info).", true);
// @ts-ignore TODO
dialog_1.default.success("Success (dialog.success).", true);
// @ts-ignore TODO
dialog_1.default.warning("Warning (dialog.warning).", true);
dialog_1.default.error("Error (dialog.error).", true);
// @ts-ignore legacy
dialogMessage("Info legacy (dialogMessage).", true);
// @ts-ignore legacy
dialogError("Error legacy (dialogError).", true);
var options = ["Yes", "No", "Cancel"];
var selectedNew = dialog_1.default.choice(options);
console.log("selected choice in dialog.choice:", selectedNew);
// @ts-ignore legacy
var selectedOld = dialogChoice(options);
console.log("selected choice in legacy dialogChoice:", selectedOld);
// @ts-ignore legacy
var filePathOld = dialogPickFile("/", "*");
// @ts-ignore legacy
dialogViewFile(filePathOld);
var filePath = dialog_1.default.pickFile("/", ".txt");
dialog_1.default.viewFile(filePath);
dialog_1.default.viewText("test1line1", "test1");
dialog_1.default.viewText("test2line1\ntest2line2", "test1");
dialog_1.default.viewText("test3line1\ntest3line2\n", "test1");
// @ts-ignore TODO
dialog_1.default.prompt('mytitle', 5, 'zxc');
console.log("Dialog module tests passed!");
////// DISPLAY MODULE //////
var display_1 = __importDefault(require("display"));
// Test screen dimensions
assert(display_1.default.width() > 0, "Display width should be greater than 0");
assert(display_1.default.height() > 0, "Display height should be greater than 0");
// @ts-ignore legacy
assert(width() === display_1.default.width(), "Display width legacy should be equal to new syntax");
// @ts-ignore legacy
assert(height() === display_1.default.height(), "Display height legacy should be equal to new syntax");
// Test basic drawing
display_1.default.fill(display_1.default.color(60, 60, 60)); // Clear the screen
display_1.default.setTextSize(3);
display_1.default.drawText("Test (New syntax)", 5, 5);
display_1.default.drawRect(10, 10, 50, 50, display_1.default.color(255, 0, 0));
display_1.default.drawFillRect(60, 60, 50, 50, display_1.default.color(255, 255, 0));
display_1.default.drawFillRoundRect(160, 60, 50, 50, 10, display_1.default.color(255, 255, 255));
display_1.default.drawFillRectGradient(100, 10, 50, 50, display_1.default.color(255, 0, 0), display_1.default.color(0, 0, 255), "horizontal");
display_1.default.drawFillRectGradient(10, 60, 50, 50, display_1.default.color(255, 255, 0), display_1.default.color(0, 255, 255), "vertical");
display_1.default.drawPixel(20, 20, display_1.default.color(255, 255, 255));
display_1.default.drawLine(25, 25, 30, 30, display_1.default.color(255, 255, 255));
console.log("Display module test (new sytax to display) passed!");
while (!keyboard_1.default.getAnyPress()) {
    delay(10);
}
//////  GPIO MODULE  //////
