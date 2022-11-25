/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the UsedLetters function component. It takes the usedLetters array as props from App.js, and returns 
a string of the used letters if the usedLetters array contains 1 or more values.

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react';

export default function UsedLetters({usedLetters}) {
  return (
    <div className="usedLettersSection py-2">
      <p>
          Letters used: {usedLetters.length !== 0 ? usedLetters.toString() : ""}
      </p>
    </div>
  )
}
