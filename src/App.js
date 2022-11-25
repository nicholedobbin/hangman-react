/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the main (parent) function component that sets state with the useState hook, selects a random word 
from the hard coded word list, and contains the following functions:
  * handleClick: handles the keyboard clicks, comparing the clicked letter with the hidden word's letters 
    and updating state properties accordingly.
  * resetGame: sets state properties back to default and gets a new random word. 
It returns the rendered child components with React Router, so that the home ("/") path renders all the game 
components and the help ("/Help") path renders only the Help component.

---------------------------------------------------------------------------------------------------------------------- */

import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu.js';
import Header from './components/Header.js'; 
import Figure from './components/Figure.js';
import RandomWord from './components/RandomWord.js';
import Keyboard from './components/Keyboard.js';
import Lives from './components/Lives.js';
import WinLose from './components/WinLose.js';
import UsedLetters from './components/UsedLetters.js';
import Help from './components/Help.js';
import Footer from './components/Footer.js';

// Create array of words and map through them to get a random word.
const wordList = ['monkey', 'song', 'harp', 'icon', 'function', 'lion', 'raven', 'brave', 'outer', 'audio'];
let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
// Console.log below displays the word - keeping here, commented out, for testing purposes.
// console.log("word is: " + selectedWord);

function App() {
  // Set state properties to default values.
  const [usedLetters, setUsedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [lives, setLives] = useState(11);

  // Function for handling keyboard button clicks.
  function handleClick(letter) {
    
    // If user clicks a wrong letter, take away a life.
    if (!selectedWord.includes(letter)) {
      setLives(prevLife => prevLife - 1);
    } 
    // Else, if user clicks a correct letter, add it to the correctLetters array with spread ([...prev, letter] ).
    // (The spread grows the array by adding a used letter to everything already in 'prevArray').
    else if (selectedWord.includes(letter)) {
      setCorrectLetters(prevArr => [...prevArr, letter]);
    }

    // Add used letters to usedLetters array with spread.
    setUsedLetters(prevArr => [...prevArr, letter]);

  }

  // useEffect functions to check lives, usedLetters and correctLetters are updating properly (keeping 
  // for test purposes, can comment out).
  useEffect(()=>{
    console.log(lives);
  }, [lives])

  useEffect(()=>{
    console.log("usedLetters: " + usedLetters);
  }, [usedLetters])

  useEffect(()=>{
    console.log("correctLetters: " + correctLetters);
  }, [correctLetters])

  // Resets game states to default values and alerts user that the game has been restarted.
  function resetGame() {
    setUsedLetters([]);
    setCorrectLetters([]);
    setLives(11);
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    // Console.log below displays the word - keeping here, commented out, for testing purposes.
    // console.log("word is: " + selectedWord);
  }

  // Render components with React Router, so that the home ("/") path renders the game and the 
  // help ("/Help") path renders only the Help component.
  return (
    <>
      {/* Navbar and Header section */}
      <Menu />
      <Routes>
        {/* First route - home/main section with header, game and keyboard */}
        <Route exact path = "/" element = {
          <>
            <Header />
            {/* Game section */}
            <div className="container container-fluid gameContainer">  
              <div className="row w-100 text-center">
                <Figure lives={lives}/>
                <div className="col text-start">
                  <Lives lives={lives} />
                  <RandomWord selectedWord={selectedWord} correctLetters={correctLetters} usedLetters={usedLetters} />
                  <UsedLetters usedLetters={usedLetters}/>
                  <WinLose lives={lives} selectedWord={selectedWord} correctLetters={correctLetters}/>
                </div>
              </div>
            </div>
    
            {/* Keyboard section */}
            <div className="container container-fluid gameContainer">
              <Keyboard handleClick={handleClick}/>
            </div>
          
            {/* Restart button section */}
            <div className="container container-fluid restartBtnContainer">
              <div className="row text-center">
                <div className="col">
                  <hr className="sectionDivider my-2"></hr>
                  <button className="btn btn-primary btn-lg mt-4 mb-5 restartButton" onClick={()=>resetGame()}>Restart</button>
                </div>
              </div>
            </div>

            {/* Footer section */}
            <Footer />
          </>
        }/>

        {/* Second route - Help section */}
        <Route path  = "/Help" element = {<Help />} />
      </Routes>

      
      
    </>
  );
}

export default App;
