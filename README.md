# **IFS L4T21 - Capstone Project III: Create a React app for a Hangman Game**

## **Description**
This a React app for the game Hangman, created with [Create React App](https://github.com/facebook/create-react-app) and styled with [React Bootstrap](https://react-bootstrap.github.io/). The description of how to play and each component's functionality are below.

<br>

### **How to play** 
Hangman is a word guessing game. The game displays a hidden word in the form of underscores (` _ _ _ _ _` ) and you need to guess the word by clicking letters on the keyboard.

Each time you click on a letter, it will be displayed in the "Used letters" section of the screen, so you can keep track of the letters you clicked on. If you choose a correct letter, it will be revealed in the hidden word ( e.g.: `_ e l l _` ). If you choose an incorrect letter, the hanging man will be drawn line by line in the display. When the hangman is completely drawn, you lose the game.

You have 10 lives to play before the hangman runs out of limbs! (Dont worry, you can restart the game at any point by clicking the restart button).

#### **Play with Netlify** 
Netlify app: [https://hangman-react-capstone.netlify.app/](https://hangman-react-capstone.netlify.app/)

<br>

### **Components Description** 

#### **1. The [App.js](/src/App.js) component**
This is the main (parent) function component that sets state with the useState hook, selects a random word from the hard coded word list, and contains the following functions:
* handleClick: handles the keyboard clicks, comparing the clicked letter with the hidden word's letters and updating state properties accordingly.
* resetGame: sets state properties back to default and gets a new random word. 
It returns the rendered child components with React Router, so that the home ("/") path renders all the game components and the help ("/Help") path renders only the Help component.

#### **2. The [Menu.js](/src/components/Menu.js) component**
This returns a Bootstrap navbar containing links to the home and help pages.

#### **3. The [Header.js](/src/components/Header.js) component**
This returns the page header containing title and subtitle.

#### **4. The [Figure.js](/src/components/Figure.js) component**
This stores an arrage of images representing each life/limb of the hangman, and takes the lives count props from App.js. It compares the number of lives remaining and updates the hangman image based on the number of lives left.

#### **5. The [Lives.js](/src/components/Lives.js) component**
This takes the lives count as props from App.js, and returns a string showing the lives left in the game.

#### **6. The [RandomWord.js](/src/components/RandomWord.js) component**
This maps through the hidden word's characters and compares them against the used letters, returning either the letter (if the used letter is in the hidden word), or an underscore (if the used letter is not in the hidden word).

#### **7. The [UsedLetters.js](/src/components/UsedLetters.js) component**
This takes the usedLetters array as props from App.js, and returns a string of the used letters if the usedLetters array contains 1 or more values.

#### **8. The [WinLose.js](/src/components/WinLose.js) component**
This takes the lives, selectedWord array and correctLetters array as props from App.js, and returns a win or lose message based on the values of the props.

#### **9. The [Keyboard.js](/src/components/Keyboard.js) component**
This stores the alphabet as a string and takes the handleClick function as props from App.js. It then splits and maps the alphabet string and returns a button for each letter in the alphabet string, with an onClick function that calls the handleClick prop function (i.e. it renders a series of buttons that look like a keyboard, with each button calling the handleClick function from App.js).

#### **10. The [Footer.js](/src/components/Footer.js) component**
This returns app creation credits and external links.

#### **11. The [Help.js](/src/components/Help.js) component**
This returns the help section of the app, containing game rules/how to play and a button that links back to the game/home page.

#### **12. The [App.css](/src/App.css) Stylesheet**
This is the stylesheet for the app.

<br>
<hr>
<br>

## **Installation and Usage**
1. Download the files in this repo. 
2. Navigate to the directory that you saved the download, open command line/terminal and type `npm install` where the package.json file is located.
3. In the same directory folder, open command line/terminal and run `npm start`. This runs the app in the development mode (i.e. locally).
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br>

#### **Learn More**
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

<br>
<hr>
<br>

## **Credit and References**
Made by [Nichole Dobbin](https://github.com/nicholedobbin), for my [HyperionDev](https://www.hyperiondev.com/) course.