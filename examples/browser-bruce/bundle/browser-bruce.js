"use strict";

// dist/index.js
var __importDefault = exports && exports.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dialog_1 = __importDefault(require("dialog"));
var wifi_1 = __importDefault(require("wifi"));
var display_1 = __importDefault(require("display"));
var keyboard_1 = __importDefault(require("keyboard"));
var tftWidth = display_1.default.width();
var tftHeight = display_1.default.height();
var request = { body: "" };
function drawWindow(title) {
  display_1.default.fill(0);
  display_1.default.drawRoundRect(5, 5, tftWidth - 10, tftHeight - 10, 5, BRUCE_PRICOLOR);
  display_1.default.setTextSize(2);
  display_1.default.setTextAlign("center", "top");
  display_1.default.drawText(title.length > 20 ? title.substring(0, 20) : title, tftWidth / 2, 5);
  display_1.default.setTextAlign("left", "top");
  display_1.default.drawText("loading...", 20, 40);
}
var textViewer = dialog_1.default.createTextViewer(request.body, {
  fontSize: 1,
  startX: 10,
  startY: 25,
  width: tftWidth - 2 * 10,
  height: tftHeight - 25 - 10,
  indentWrappedLines: true
});
var history = [];
function goToPage(url) {
  console.log(url);
  drawWindow(url.substring(url.indexOf("://") + 3));
  textViewer.clear();
  try {
    request = wifi_1.default.httpFetch("https://www.w3.org/services/html2txt?url=".concat(url, "&noinlinerefs=on&endrefs=on"), {
      method: "GET"
    });
  } catch (error) {
    console.log(JSON.stringify(error));
    request.body = "error\n\n";
  }
  history.push(url);
  textViewer.setText(request.body);
}
var websites = [
  "https://github.com/pr3y/Bruce/wiki",
  "https://en.cppreference.com/w",
  "https://randomnerdtutorials.com"
  // insert websites here
];
function selectWebsite() {
  drawWindow("Select Website");
  var websitesChoice = {};
  for (var index = 0; index < websites.length; index++) {
    var website = websites[index];
    websitesChoice[website.substring(website.indexOf("://") + 3)] = website;
  }
  if (request.status) {
    websitesChoice["Cancel"] = "Cancel";
  }
  websitesChoice["Quit"] = "Quit";
  return dialog_1.default.choice(websitesChoice);
}
function selectSection() {
  var websitesSections = {};
  var getMaxLines = textViewer.getMaxLines();
  for (var index = 0; index < getMaxLines; index++) {
    var textVieverLine = textViewer.getLine(index);
    if (textVieverLine[0] !== " " && textVieverLine.length) {
      websitesSections[textVieverLine] = String(index);
    }
  }
  websitesSections["Cancel"] = "Cancel";
  var choice = dialog_1.default.choice(websitesSections);
  return choice === "Cancel" ? -1 : parseInt(choice, 10);
}
function main() {
  var _a;
  var url = selectWebsite();
  if (url === "Quit") {
    return;
  }
  goToPage(url);
  while (true) {
    if (keyboard_1.default.getSelPress()) {
      var visibleText = textViewer.getVisibleText();
      var choicesMatch = [];
      choicesMatch.push("Go To Selection");
      choicesMatch.push.apply(choicesMatch, visibleText.match(/\[\d+\][^\s\[,\]]*/g) || []);
      choicesMatch.push("Go Back");
      choicesMatch.push("Select Website");
      choicesMatch.push("Cancel");
      choicesMatch.push("Quit");
      var choice = dialog_1.default.choice(choicesMatch);
      if (choice === "Quit") {
        break;
      }
      if (choice === "Cancel") {
        drawWindow(url.substring(url.indexOf("://") + 3));
        continue;
      }
      if (choice === "Go Back") {
        if (history.length > 1) {
          history.pop();
          var newUrl = history.pop();
          if (newUrl) {
            url = newUrl;
            console.log("url:", url);
            goToPage(url);
          }
        }
        drawWindow(url.substring(url.indexOf("://") + 3));
        continue;
      }
      if (choice === "Go To Selection") {
        var line = selectSection();
        drawWindow(url.substring(url.indexOf("://") + 3));
        if (line === -1) {
          continue;
        }
        console.log("Go to line:", line);
        textViewer.scrollToLine(line);
        continue;
      }
      var chosenUrl = "";
      if (choice === "Select Website") {
        chosenUrl = selectWebsite();
        if (chosenUrl === "Cancel") {
          drawWindow(url.substring(url.indexOf("://") + 3));
          continue;
        }
        if (chosenUrl === "Quit") {
          return;
        }
      } else {
        var searchTextIndex = request.body.indexOf(" " + ((_a = choice.match(/\d+/)) === null || _a === void 0 ? void 0 : _a[0]) + ". http");
        var searchedUrl = request.body.substring(searchTextIndex, request.body.indexOf("\n", searchTextIndex + 1));
        chosenUrl = searchedUrl.substring(searchedUrl.indexOf(".") + 2);
      }
      if (chosenUrl !== "") {
        url = chosenUrl;
        goToPage(chosenUrl);
      }
    }
    if (keyboard_1.default.getPrevPress()) {
      textViewer.scrollUp();
    }
    if (keyboard_1.default.getNextPress()) {
      textViewer.scrollDown();
    }
    textViewer.draw();
    delay(100);
  }
}
main();
