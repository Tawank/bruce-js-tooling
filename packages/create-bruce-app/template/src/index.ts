import display from 'display';
import keyboard from 'keyboard';

// I am putting all code in function to optimise, if variables are outside
// functions they are put in global namespace, and it's slower to get
function main() {
  // Set the text size to 2 (bigger text)
  display.setTextSize(2);
  // Define a blue color using RGB values (0, 0, 255)
  const colorBlue = display.color(0, 0, 255);
  display.setTextColor(colorBlue);

  while (true) {
    // Check if any key is pressed
    if (keyboard.getAnyPress()) {
      break; // Exit the loop if a key is pressed
    }

    display.drawText('Hello world!', 10 , 10);

    // Small delay to prevent excessive CPU usage
    delay(1);

  }
}

main();
