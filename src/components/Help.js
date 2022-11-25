/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the Help function component, which returns the help section of the app, containing game rules/how to play 
and a button that links back to the game/home page.

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';

export default function Help() {
  return (
    <div className = "container container-fluid headerContainer pb-3 pt-5 mt-5 text-center">
        <div className="row justify-content-center">
            <div className="col mx-auto justify-content-center">
                <h1 className="display-1 pb-2">How to play</h1>
                <hr className="sectionDivider my-3"></hr>
                <p className="pt-3 mx-2 align-self-center">
                    Hangman is a word guessing game. The game displays a hidden word in the form of underscores 
                    (e.g.: _ _ _ _ _) and you need to guess the word by clicking letters on the keyboard.
                </p>
                <p className="pt-3 mx-2 align-self-center">
                    Each time you click on a letter, it will be displayed in the "Used letters" section, so you 
                    can keep track of the letters you chose. If you choose a correct letter, it will be revealed 
                    in the hidden word (e.g.: _ e l l _). If you choose an incorrect letter, the hanging man will 
                    be drawn line by line. When the hangman is completely drawn, you lose the game.
                </p>
                <p className="pt-3 mx-2 align-self-center">
                    You have 10 lives to play before the hangman runs out of limbs!
                </p>
                <br></br>
                {/* Back to game/home button */}
                <Link to="/">
                    <div className="pt-3 pb-5">
                        <button className="btn btn-secondary py-3 helpButton" href="#Home">Play game!</button>
                    </div>
                    
                </Link>
            </div> 
        </div>
    </div>
  )
}
