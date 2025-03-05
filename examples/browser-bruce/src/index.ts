import dialog from 'dialog';
import wifi from 'wifi';
import display from 'display';
import keyboard from 'keyboard';

const tftWidth = display.width();
const tftHeight = display.height();

let request: {
  status?: number;
  ok?: boolean;
  body: string;
} = { body : '' };

function drawWindow(title: string) {
  display.fill(0);
  display.drawRoundRect(5, 5, tftWidth - 10, tftHeight - 10, 5, BRUCE_PRICOLOR);
  display.setTextSize(2);

  display.setTextAlign('center', 'top');
  display.drawText(title.length > 20 ? title.substring(0, 20): title, tftWidth / 2, 5);
  display.setTextAlign('left', 'top');
  display.drawText('loading...', 20, 40);
}

const textViewer = dialog.createTextViewer(request.body, {
  fontSize: 1,
  startX: 10,
  startY: 25,
  width: tftWidth - 2 * 10,
  height: tftHeight - 25 - 10,
  indentWrappedLines: true
});

const history: string[] = [];

function goToPage(url: string) {
  console.log(url);
  drawWindow(url.substring(url.indexOf("://") + 3));

  textViewer.clear();
  try {
    request = wifi.httpFetch(`https://www.w3.org/services/html2txt?url=${url}&noinlinerefs=on&endrefs=on`, {
      method: 'GET',
    });
  } catch (error) {
    console.log(JSON.stringify(error));
    request.body = 'error\n\n';
  }
  history.push(url);

  textViewer.setText(request.body);
}

/// TODO: Use storage.write('browser.js', 'https://newsite.com,\n  ', 'append', '// insert websites here') to add new websites
const websites = [
  'https://github.com/pr3y/Bruce/wiki',
  'https://en.cppreference.com/w',
  'https://randomnerdtutorials.com',
  // insert websites here
];

function selectWebsite() {
  drawWindow('Select Website');
  const websitesChoice: Record<string, string> = {};
  for (let index = 0; index < websites.length; index++) {
    const website = websites[index];
    websitesChoice[website.substring(website.indexOf("://") + 3)] = website;
  }
  if (request.status) {
    websitesChoice['Cancel'] = 'Cancel';
  }
  websitesChoice['Quit'] = 'Quit';
  return dialog.choice(websitesChoice);
}

function selectSection(): number {
  const websitesSections: Record<string, string> = {};
  const getMaxLines = textViewer.getMaxLines()
  for (let index = 0; index < getMaxLines; index++) {
    const textVieverLine = textViewer.getLine(index);
    if (textVieverLine[0] !== ' ' && textVieverLine.length) {
      websitesSections[textVieverLine] = String(index);
    }
  }
  websitesSections['Cancel'] = 'Cancel';
  const choice = dialog.choice(websitesSections);
  return choice === 'Cancel' ? -1 : parseInt(choice, 10);
}

function main() {
  let url = selectWebsite();
  if (url === 'Quit') {
    return;
  }

  goToPage(url);

  while (true) {
    if (keyboard.getSelPress()) {
      const visibleText = textViewer.getVisibleText() as string;
      const choicesMatch: string[] = [];
      choicesMatch.push('Go To Selection');
      choicesMatch.push(...visibleText.match(/\[\d+\][^\s\[,\]]*/g) || []);
      choicesMatch.push('Go Back');
      choicesMatch.push('Select Website');
      choicesMatch.push('Cancel');
      choicesMatch.push('Quit');
      const choice = dialog.choice(choicesMatch);

      if (choice === 'Quit') {
        break;
      }
      if (choice === 'Cancel') {
        drawWindow(url.substring(url.indexOf("://") + 3));
        continue;
      }
      if (choice === 'Go Back') {
        if (history.length > 1) {
          history.pop();
          const newUrl = history.pop();
          if (newUrl) {
            url = newUrl;
            console.log('url:', url);
            goToPage(url);
          }
        }
        drawWindow(url.substring(url.indexOf("://") + 3));
        continue;
      }
      if (choice === 'Go To Selection') {
        const line = selectSection();
        drawWindow(url.substring(url.indexOf("://") + 3));
        if (line === -1) {
          continue;
        }
        console.log('Go to line:', line);
        textViewer.scrollToLine(line);
        continue;
      }
      let chosenUrl = '';
      if (choice === 'Select Website') {
        chosenUrl = selectWebsite();
        if (chosenUrl === 'Cancel') {
          drawWindow(url.substring(url.indexOf("://") + 3));
          continue;
        }
        if (chosenUrl === 'Quit') {
          return;
        }
      } else {
        const searchTextIndex = request.body.indexOf(' ' + choice.match(/\d+/)?.[0] + '. http');
        const searchedUrl = request.body.substring(searchTextIndex, request.body.indexOf('\n', searchTextIndex + 1));
        chosenUrl = searchedUrl.substring(searchedUrl.indexOf('.') + 2);
      }
      if (chosenUrl !== '') {
        url = chosenUrl;
        goToPage(chosenUrl);
      }
    }

    if (keyboard.getPrevPress()) {
      textViewer.scrollUp();
    }
    if (keyboard.getNextPress()) {
      textViewer.scrollDown();
    }

    textViewer.draw();
    delay(100);
  }
}

main();
