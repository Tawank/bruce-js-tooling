"use strict";

// dist/index.js
var __importDefault = exports && exports.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var keyboard_1 = __importDefault(require("keyboard"));
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
console.log("random(20, 5000):", random(20, 5e3));
console.log("random(2):", random(2));
console.log("random(2):", random(2));
console.log("Globals tests passed!");
var audio_1 = __importDefault(require("audio"));
audio_1.default.tone(988, 500);
tone(440, 500);
var device_1 = __importDefault(require("device"));
console.log("New syntax:");
console.log("Device Name:", device_1.default.getName());
console.log("Board:", device_1.default.getBoard());
console.log("Model:", device_1.default.getModel());
console.log("Battery Charge:", device_1.default.getBatteryCharge(), "%");
var memoryStats = device_1.default.getFreeHeapSize();
console.log("RAM Free:", memoryStats.ram_free);
console.log("PSRAM Free:", memoryStats.psram_free);
console.log("Board:", getBoard());
console.log("Battery Charge:", getBattery(), "%");
var memoryStatsOld = getFreeHeapSize();
console.log("RAM Free:", memoryStatsOld.ram_free);
console.log("PSRAM Free:", memoryStatsOld.psram_free);
console.log("Device module tests passed!");
var dialog_1 = __importDefault(require("dialog"));
var buttonSelected = dialog_1.default.message("Choose option:", { left: "back", center: "ok", right: "next" });
console.log(buttonSelected);
dialog_1.default.info("Info (dialog.info).", true);
dialog_1.default.success("Success (dialog.success).", true);
dialog_1.default.warning("Warning (dialog.warning).", true);
dialog_1.default.error("Error (dialog.error).", true);
dialogMessage("Info legacy (dialogMessage).", true);
dialogError("Error legacy (dialogError).", true);
var options = ["Yes", "No", "Cancel"];
var selected = dialog_1.default.choice(options);
console.log("selected choice in dialog.choice(array):", selected);
var optionsNestedArray = [["Yes", "yes"], ["No", "no"], ["Cancel", "cancel"]];
var selectedNestedArray = dialog_1.default.choice(optionsNestedArray);
console.log("selected choice in dialog.choice(nestedArray):", selectedNestedArray);
var optionsObject = { "Go Back": "go_back", "Cancel": "cancel", "Quit": "quit" };
var selectedObject = dialog_1.default.choice(optionsObject);
console.log("selected choice in dialog.choice(object):", selectedObject);
var optionsOld = ["Yes", "yes", "No", "no"];
var selectedOld = dialogChoice(optionsOld);
console.log("selected choice in legacy dialogChoice:", selectedOld);
var filePath = dialog_1.default.pickFile("/", ".txt");
dialog_1.default.viewFile(filePath);
var filePathOld = dialogPickFile("/", "*");
dialogViewFile(filePathOld);
dialog_1.default.viewText("test1line1", "test1");
dialog_1.default.viewText("test2line1\ntest2line2", "test2");
dialog_1.default.viewText("test3line1\ntest3line2\n", "test3");
var prompt = dialog_1.default.prompt("mytitle", 5, "zxc");
console.log("User text prompt:", prompt);
console.log("Dialog module tests passed!");
var display_1 = __importDefault(require("display"));
assert(display_1.default.width() > 0, "Display width should be greater than 0");
assert(display_1.default.height() > 0, "Display height should be greater than 0");
assert(width() === display_1.default.width(), "Display width legacy should be equal to new syntax");
assert(height() === display_1.default.height(), "Display height legacy should be equal to new syntax");
display_1.default.fill(display_1.default.color(60, 60, 60));
display_1.default.setTextSize(1);
display_1.default.drawText("Test (New syntax)", 5, 5);
display_1.default.drawString("Test (New syntax)", 5, 20);
display_1.default.drawPixel(20, 20, display_1.default.color(255, 255, 255));
display_1.default.drawLine(25, 25, 30, 30, display_1.default.color(255, 255, 255));
display_1.default.drawRect(10, 10, 50, 50, display_1.default.color(255, 0, 0));
display_1.default.drawFillRect(60, 60, 50, 50, display_1.default.color(255, 255, 0));
display_1.default.drawFillRectGradient(100, 10, 50, 50, display_1.default.color(255, 0, 0), display_1.default.color(0, 0, 255), "horizontal");
display_1.default.drawFillRectGradient(10, 60, 50, 50, display_1.default.color(255, 255, 0), display_1.default.color(0, 255, 255), "vertical");
display_1.default.drawFillRoundRect(160, 60, 50, 50, 10, display_1.default.color(255, 255, 255));
display_1.default.drawCircle(160, 60, 50, display_1.default.color(0, 255, 255));
display_1.default.drawFillCircle(10, 60, 50, display_1.default.color(0, 0, 255));
console.log("Display module draw functions test (new sytax to display) passed!");
while (!keyboard_1.default.getAnyPress()) {
  delay(10);
}
display_1.default.fill(display_1.default.color(0, 0, 0));
var cloudSprite = new Uint8Array([
  0,
  0,
  0,
  30,
  0,
  0,
  0,
  0,
  240,
  115,
  0,
  0,
  0,
  0,
  24,
  192,
  0,
  0,
  0,
  0,
  14,
  128,
  0,
  0,
  0,
  0,
  2,
  128,
  7,
  0,
  0,
  0,
  2,
  128,
  252,
  0,
  0,
  192,
  3,
  64,
  128,
  0,
  0,
  96,
  0,
  0,
  128,
  7,
  192,
  63,
  0,
  0,
  0,
  4,
  96,
  0,
  0,
  0,
  0,
  28,
  32,
  0,
  0,
  0,
  0,
  16,
  54,
  2,
  0,
  0,
  0,
  32,
  3,
  252,
  255,
  255,
  255,
  63
]);
display_1.default.drawXBitmap(50, 50, cloudSprite, 46, 13, display_1.default.color(0, 255, 0), display_1.default.color(255, 0, 0));
display_1.default.drawXBitmap(100, 50, cloudSprite, 46, 13, display_1.default.color(255, 255, 0), display_1.default.color(255, 0, 255));
display_1.default.drawXBitmap(150, 50, cloudSprite, 46, 13, display_1.default.color(255, 255, 0), display_1.default.color(255, 0, 255));
display_1.default.drawXBitmap(50, 100, cloudSprite, 46, 13, display_1.default.color(255, 0, 0), display_1.default.color(255, 0, 255));
display_1.default.drawXBitmap(100, 100, cloudSprite, 46, 13, display_1.default.color(255, 255, 0), display_1.default.color(255, 0, 255));
display_1.default.drawXBitmap(150, 100, cloudSprite, 46, 13, display_1.default.color(255, 255, 0), display_1.default.color(0, 0, 255));
while (!keyboard_1.default.getAnyPress()) {
  delay(10);
}
display_1.default.drawJpg("/test.jpg", 50, 50);
while (!keyboard_1.default.getAnyPress()) {
  delay(10);
}
display_1.default.drawGif("/boot.gif", 0, 0);
while (!keyboard_1.default.getAnyPress()) {
  delay(10);
}
assert(typeof display_1.default.width() === "number", "display.width() should be of type number");
assert(typeof display_1.default.height() === "number", "display.height() should be of type number");
var ir_1 = __importDefault(require("ir"));
var irRead = ir_1.default.read(10);
console.log("irRead:", irRead);
var irReadLegacy = irRead(10);
console.log("irReadLegacy:", irReadLegacy);
var irReadRaw = ir_1.default.readRaw(10);
console.log("irReadRaw:", irReadRaw);
var irReadRawLegacy = irReadRaw(10);
console.log("irReadRawLegacy:", irReadRawLegacy);
console.log("ir.transmitFile click any key to continue");
while (!keyboard_1.default.getAnyPress()) {
  delay(10);
}
ir_1.default.transmitFile("/BruceIR/TV_TCL.ir");
console.log("ir.transmitFile completed");
console.log("irTransmitFile click any key to continue");
while (!keyboard_1.default.getAnyPress()) {
  delay(10);
}
irTransmitFile("/BruceIR/TV_TCL.ir");
console.log("irTransmitFile completed");
var notification_1 = __importDefault(require("notification"));
notification_1.default.blink(500);
var serial_1 = __importDefault(require("serial"));
serial_1.default.print("serial.print ");
serial_1.default.println("serial.println");
serialPrintln("serialPrintln");
console.log("serial.cmd('tone 500 500');");
serial_1.default.cmd("tone 500 500");
console.log("serialCmd('tone 500 500'); // legacy");
serialCmd("tone 500 500");
serial_1.default.println("waiting for user input...");
var serialReadln = serial_1.default.readln();
serial_1.default.println("user input: ", serialReadln);
var storage_1 = __importDefault(require("storage"));
storage_1.default.mkdir("/test");
console.log("storage.readdir('/'):", JSON.stringify(storage_1.default.readdir("/")));
storage_1.default.rename("/test", "/test2");
storage_1.default.write("/test/test.txt", "steststest");
console.log("storage.read('/test/test.txt'):", storage_1.default.read("/test/test.txt"));
storage_1.default.remove("text.txt");
storage_1.default.rmdir("/test");
console.log("storage.readdir('/'):", JSON.stringify(storage_1.default.readdir("/")));
var subghz_1 = __importDefault(require("subghz"));
console.log("subghz.read(10):", subghz_1.default.read(10));
console.log("subghz.readRaw(10):", subghz_1.default.readRaw(10));
subghz_1.default.transmitFile("/BruceRF/raw_0.sub");
var wifi_1 = __importDefault(require("wifi"));
console.log("wifi.scan():", wifi_1.default.scan());
console.log("wifi.connected():", wifi_1.default.connected());
wifi_1.default.connectDialog();
{
  response = wifi_1.default.httpFetch("https://dummy-json.mock.beeceptor.com/todos", {
    method: "GET"
  });
  console.log("response.body (todo):", response.body);
}
var response;
{
  response = wifi_1.default.httpFetch("https://echo.free.beeceptor.com", {
    method: "POST"
  });
  console.log("response.body (POST):", response.body);
}
var response;
{
  response = wifi_1.default.httpFetch("https://echo.free.beeceptor.com", {
    method: "DELETE"
  });
  console.log("response.body (DELETE):", response.body);
}
var response;
