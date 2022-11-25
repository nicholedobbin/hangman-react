/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the Lives function component. It takes the lives count as props from App.js, and returns 
a string showing the lives left in the game.

---------------------------------------------------------------------------------------------------------------------- */
import React from 'react'

export default function Lives({lives}) {
  return (
    <div className="livesSection py-2">
      <h4>
          {/* lives-1 because the lives count has 11 lives to account for the first blank square */}
          You have {lives-1} /10 lives left
      </h4>
    </div>
    
  )
}
