# Calculator

Calculator is a fun project that I worked on in my spare time. It was a way to challenge myself with creating ultra beautiful but logical interfaces, and learn SCSS at the same time. This app features 2 calculators born from different generations. The 'Sexy' calculator appears as an iPhone app with striking gradients and modern aesthetic. The 'Nerdy' calculator replicates the now obsolete physical machine. This app is an homage to the progression of UI over the years using a simple calculator tool as a case study.

[Click here](https://calcstyle.herokuapp.com/) to see the deployed version of Calculator.

## Desciption
Although both 'Sexy' and 'Nerdy' essentially have the same purpose, they each have their own unique logic. For example, *Sexy* allows a user to type in a long arithmetic clause and outputs the result based on order of operations. *Nerdy* requires each operation to be computated one by one. This also means that *Sexy* allows for backspacing individual characters, while *Nerdy* only allows a full clear. Last but not least, for *Nerdy*, if a user clicks the **==** button consecutively, the answer in the view port is a result of repeating the last operation. *Sexy* does not have this capability.

Almost everything you see was designed by scratch. I only used 4 images (wifi, bluetooth, battery icons and Braun logo) and everything else is pure SCSS styling including the iPhone, gradients, circles, and backgrounds.

## Easter Eggs
* The time displayed in the iPhone header displays the actual correct time.
* When clicking buttons in *Sexy*, the display will show a color-coded record of what you've pressed. Operators and numbers have different colors.
* For *Nerdy* The orange circle in the slider changes positions when clicked
* Each button in *Nerdy* changes position when clicked to simulate the physical lowering of buttons on a physical calculator.
