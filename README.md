# Calculator

This is a fun project I worked on in my spare time. I challenged myself to create an ultra beautiful, yet logical, UI, while learning SCSS. **Calculator** features 2 calculators born in different eras. The *Sexy* (left) calculator appears as an iPhone app with a modern aesthetic. The *Nerdy* (right) calculator replicates the now-obsolete, physical machine. This app is an homage to the progression of UI's over the years using a simple calculator as a case study.

[Click here](https://calcstyle.herokuapp.com/) to view the deployed version.

### Desciption
Although both **Sexy** and **Nerdy** essentially have the same purpose, they have distinct logic. For example, *Sexy* allows users to type in multiple math expressions and outputs a result based on order of operations. *Nerdy* requires each expression to be computed one-by-one. This means *Sexy* allows users to backspace characters, while *Nerdy* only allows a full clear. Lastly, but not limited to, for *Nerdy*, if a user clicks the **=** button consecutively, the value displayed in the view port is a result of repeating the last expression. *Sexy* does not have this capability.

Almost everything you see was designed by scratch. I only used 4 images (wifi, bluetooth, battery icons and the Braun logo). Everything else is pure SCSS including the iPhone, gradients, circles, and backgrounds.

##### Easter Eggs
* The time displayed in the iPhone reflects the actual time.
* When clicking buttons in **Sexy**, the display will show a color-coded record of what you've pressed. Operators and numbers have different colors.
* For **Nerdy**, the orange circle in the slider changes positions when clicked.
* Each button in **Nerdy** changes position when clicked to simulate the physical lowering of buttons on an old calculator.