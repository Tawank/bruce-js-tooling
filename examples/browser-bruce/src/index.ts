import dialog from 'dialog';
import wifi from 'wifi';
import display from 'display';
import keyboard from 'keyboard';


const tftWidth = display.width();
const tftHeight = display.height();

let request: {
  status: number;
  ok: boolean;
  body: string;
} | undefined;

function drawWindow(title: string) {
  display.fill(0);
  display.drawRoundRect(5, 5, tftWidth - 10, tftHeight - 10, 5, BRUCE_PRICOLOR);
  display.setTextSize(2);

  display.setTextAlign('center', 'top');
  display.drawText(title.length > 20 ? title.substring(0, 20): title, tftWidth / 2, 5);
  display.setTextAlign('left', 'top');
  display.drawText('loading...', 20, 40);
}

// @ts-ignore
const textViewer = dialog.createTextViewer(request.body, {
  fontSize: 1,
  startX: 10,
  startY: 25,
  width: tftWidth - 2 * 10,
  height: tftHeight - 25 - 10
});

function goToPage(url: string) {
  console.log(url);
  drawWindow(url.substring(url.indexOf("://") + 3));

  request = wifi.httpFetch(`https://www.w3.org/services/html2txt?url=${url}&noinlinerefs=on&endrefs=on`, {
    method: 'GET',
  });
  textViewer.setText(request.body);
}

const websites = [
  'https://aniagotuje.pl',
  'https://en.cppreference.com/w',
  'https://randomnerdtutorials.com',
  // WEBSITES_INSERT
];

function selectWebsite() {
  drawWindow('Select Website');
  const websitesStripped = {};
  for (let index = 0; index < websites.length; index++) {
    const website = websites[index];
    websitesStripped[website.substring(website.indexOf("://") + 3)] = website;
  }
  websitesStripped['Quit'] = 'Quit';
  return dialog.choice(websitesStripped);
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
      const choicesMatch: string[] = visibleText.match(/\[\d+\][^\s\[,\]]+/g) || [];
      choicesMatch.push('Select Website');
      choicesMatch.push('Cancel');
      choicesMatch.push('Quit');
      const choice = dialog.choice(choicesMatch);
      if (choice === 'Cancel') {
        drawWindow(url.substring(url.indexOf("://") + 3));
        continue;
      }
      if (choice === 'Quit') {
        break;
      }
      let chosenUrl = '';
      if (choice === 'Select Website') {
        chosenUrl = selectWebsite();
        if (chosenUrl === 'Quit') {
          return;
        }
      } else {
        const searchTextIndex = request.body.indexOf(' ' + choice.match(/\d+/)?.[0] + '. http');
        const searchedUrl = request.body.substring(searchTextIndex, request.body.indexOf('\n', searchTextIndex + 1));
        chosenUrl = searchedUrl.substring(searchedUrl.indexOf('.') + 2);
      }
      if (chosenUrl !== '') {
        textViewer.close();
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
