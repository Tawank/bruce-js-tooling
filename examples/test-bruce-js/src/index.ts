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
const selected = dialog.choice(options);
console.log("selected choice in dialog.choice(array):", selected);

const optionsNestedArray = [["Yes", "yes"], ["No", "no"], ["Cancel", "cancel"]];
// @ts-ignore TODO
const selectedNestedArray = dialog.choice(optionsNestedArray);
console.log("selected choice in dialog.choice(nestedArray):", selectedNestedArray);

const optionsObject = {"Go Back": "go_back", "Cancel": "cancel", "Quit": "quit"};
// @ts-ignore TODO
const selectedObject = dialog.choice(optionsObject);
console.log("selected choice in dialog.choice(object):", selectedObject);

const optionsOld = ["Yes", "yes", "No", "no"]; // Cancel is last option in legacy mode, and cannot be removed
// @ts-ignore legacy
const selectedOld = dialogChoice(optionsOld);
console.log("selected choice in legacy dialogChoice:", selectedOld);

const filePath = dialog.pickFile("/", ".txt");
dialog.viewFile(filePath);

// @ts-ignore legacy
const filePathOld = dialogPickFile("/", "*");
// @ts-ignore legacy
dialogViewFile(filePathOld);

dialog.viewText("test1line1", "test1");
dialog.viewText("test2line1\ntest2line2", "test2");
dialog.viewText("test3line1\ntest3line2\n", "test3");

// @ts-ignore TODO
const prompt = dialog.prompt('mytitle', 5, 'zxc');
console.log("User text prompt:", prompt);

console.log("Dialog module tests passed!");

////// DISPLAY MODULE //////
import display from "display";

// Test screen dimensions
assert(display.width() > 0, "Display width should be greater than 0");
assert(display.height() > 0, "Display height should be greater than 0");
// @ts-ignore legacy
assert(width() === display.width(), "Display width legacy should be equal to new syntax");
// @ts-ignore legacy
assert(height() === display.height(), "Display height legacy should be equal to new syntax");

// Test basic drawing
display.fill(display.color(60, 60, 60)); // Clear the screen
display.setTextSize(1);
display.drawText("Test (New syntax)", 5, 5);
display.drawString("Test (New syntax)", 5, 20);
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
display.drawRect(10, 10, 50, 50, display.color(255, 0, 0));
display.drawFillRect(60, 60, 50, 50, display.color(255, 255, 0));
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
display.drawFillRoundRect(160, 60, 50, 50, 10, display.color(255, 255, 255));
display.drawCircle(160, 60, 50, display.color(0, 255, 255));
display.drawFillCircle(10, 60, 50, display.color(0, 0, 255));

console.log("Display module draw functions test (new sytax to display) passed!");

while (!keyboard.getAnyPress()) {
  delay(10);
}

display.fill(display.color(0, 0, 0)); // Clear the screen

// cloud: 46x13
const cloudSprite = new Uint8Array([
  0x00, 0x00, 0x00, 0x1E, 0x00, 0x00, 0x00, 0x00, 0xF0, 0x73, 0x00, 0x00,
  0x00, 0x00, 0x18, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x0E, 0x80, 0x00, 0x00,
  0x00, 0x00, 0x02, 0x80, 0x07, 0x00, 0x00, 0x00, 0x02, 0x80, 0xFC, 0x00,
  0x00, 0xC0, 0x03, 0x40, 0x80, 0x00, 0x00, 0x60, 0x00, 0x00, 0x80, 0x07,
  0xC0, 0x3F, 0x00, 0x00, 0x00, 0x04, 0x60, 0x00, 0x00, 0x00, 0x00, 0x1C,
  0x20, 0x00, 0x00, 0x00, 0x00, 0x10, 0x36, 0x02, 0x00, 0x00, 0x00, 0x20,
  0x03, 0xFC, 0xFF, 0xFF, 0xFF, 0x3F,
]);
display.drawXBitmap(
  50,
  50,
  cloudSprite,
  46,
  13,
  display.color(0, 255, 0),
  display.color(255, 0, 0),
);
display.drawXBitmap(
  100,
  50,
  cloudSprite,
  46,
  13,
  display.color(255, 255, 0),
  display.color(255, 0, 255),
);
display.drawXBitmap(
  150,
  50,
  cloudSprite,
  46,
  13,
  display.color(255, 255, 0),
  display.color(255, 0, 255),
);
display.drawXBitmap(
  50,
  100,
  cloudSprite,
  46,
  13,
  display.color(255, 0, 0),
  display.color(255, 0, 255),
);
display.drawXBitmap(
  100,
  100,
  cloudSprite,
  46,
  13,
  display.color(255, 255, 0),
  display.color(255, 0, 255),
);
display.drawXBitmap(
  150,
  100,
  cloudSprite,
  46,
  13,
  display.color(255, 255, 0),
  display.color(0, 0, 255),
);

while (!keyboard.getAnyPress()) {
  delay(10);
}

display.drawJpg(
  '/test.jpg',
  50,
  50,
);

while (!keyboard.getAnyPress()) {
  delay(10);
}

display.drawGif(
  '/boot.gif',
  0,
  0,
);

while (!keyboard.getAnyPress()) {
  delay(10);
}

assert(typeof display.width() === "number", "display.width() should be of type number");
assert(typeof display.height() === "number", "display.height() should be of type number");


//////  GPIO MODULE  //////
// import gpio from "gpio";

// gpio.pinMode(26, OUTPUT);

// gpio.digitalWrite(26, HIGH);
// delay(100);
// const pin26ValueHigh = gpio.digitalRead(26);
// assert(pin26ValueHigh === HIGH, "pin26ValueHigh should be HIGH");

// while (!keyboard.getAnyPress()) {
//   delay(10);
// }

// gpio.digitalWrite(26, LOW);
// const pin26ValueLow = gpio.digitalRead(26);
// assert(pin26ValueLow === LOW, "pin26ValueHigh should be HIGH");

// gpio.dacWrite(26, 127);
// const pin26ValueHalf = gpio.analogRead(26);
// console.log("dacWrite(127):", pin26ValueHalf);


//////   IR MODULE   //////
import ir from "ir";

const irRead = ir.read(10);
console.log("irRead:", irRead);

// @ts-ignore legacy
const irReadLegacy = irRead(10);
console.log("irReadLegacy:", irReadLegacy);

const irReadRaw = ir.readRaw(10);
console.log("irReadRaw:", irReadRaw);

// @ts-ignore legacy
const irReadRawLegacy = irReadRaw(10);
console.log("irReadRawLegacy:", irReadRawLegacy);

console.log("ir.transmitFile click any key to continue");
while (!keyboard.getAnyPress()) {
  delay(10);
}
ir.transmitFile("/BruceIR/TV_TCL.ir");
console.log("ir.transmitFile completed");

console.log("irTransmitFile click any key to continue");
while (!keyboard.getAnyPress()) {
  delay(10);
}
// @ts-ignore legacy
irTransmitFile("/BruceIR/TV_TCL.ir");
console.log("irTransmitFile completed");

//////  INPUT MODULE //////


//////  MATH MODULE  //////



////// NOTIFICATION MODULE //////
import notification from "notification";

notification.blink(500);

////// SERIAL MODULE //////
import serial from "serial";

serial.print('serial.print ');
serial.println('serial.println');
// @ts-ignore legacy
serialPrintln('serialPrintln');

console.log("serial.cmd('tone 500 500');");
// @ts-ignore TODO
serial.cmd('tone 500 500');
console.log("serialCmd('tone 500 500'); // legacy");
// @ts-ignore legacy
serialCmd('tone 500 500');

serial.println('waiting for user input...');
const serialReadln = serial.readln();
serial.println('user input: ', serialReadln);

////// STORAGE MODULE //////
import storage from "storage";

storage.mkdir('/test');
console.log("storage.readdir('/'):", JSON.stringify(storage.readdir('/')));

storage.rename('/test', '/test2');
storage.write('/test/test.txt', 'steststest');
console.log("storage.read('/test/test.txt'):", storage.read('/test/test.txt'));

storage.remove('text.txt');
storage.rmdir('/test');
console.log("storage.readdir('/'):", JSON.stringify(storage.readdir('/')));

////// SUBGHZ MODULE  //////
import subghz from "subghz";

console.log("subghz.read(10):", subghz.read(10));
console.log("subghz.readRaw(10):", subghz.readRaw(10));
subghz.transmitFile('/BruceRF/raw_0.sub');

//////  WIFI MODULE   //////
import wifi from "wifi";

console.log("wifi.scan():", wifi.scan());

console.log("wifi.connected():", wifi.connected());
wifi.connectDialog();

{
  const response = wifi.httpFetch('https://dummy-json.mock.beeceptor.com/todos', {
    method: "GET"
  });
  console.log("response.body (todo):", response.body);
}

{
  const response = wifi.httpFetch('https://echo.free.beeceptor.com', {
    method: "POST"
  });
  console.log("response.body (POST):", response.body);
}

{
  const response = wifi.httpFetch('https://echo.free.beeceptor.com', {
    method: "DELETE"
  });
  console.log("response.body (DELETE):", response.body);
}
