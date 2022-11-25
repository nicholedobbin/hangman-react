/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the WinLose function component. It takes the lives, selectedWord array and correctLetters array 
as props from App.js, and returns a win or lose message based on the values of the props.

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react';

export default function WinLose({lives, selectedWord, correctLetters}) {
  // If the lives count is not 0, and the selectedWord array and correctLetters array lengths match, 
  // return a winning message.
  if (lives !== 0 && selectedWord.length === correctLetters.length) {
    return (
      <div className="winLoseSection text-start py-5">
        <h1 className="winLoseHeading">Woohoo! You Won!</h1>
      </div>
    )
  } else if (lives === 1 ){
    // Else, if the lives count is 1 (i.e. the last life), return a losing message.
    return (
        <div className="winLoseSection text-start py-3">
          <h1 className="winLoseHeading">Aw snap! You Lost!</h1>
        </div>
    )
  }
}
