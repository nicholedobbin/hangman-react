/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the RandomWord function component. It maps through the hidden word's characters and compares 
them against the used letters, returning either the letter (if the used letter is in the hidden word), or 
an underscore (if the used letter is not in the hidden word).

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react';

export default function RandomWord({ selectedWord, usedLetters}) {
    return (
        <div className = "randomWordSection py-5">
            <h2>
                {selectedWord.split('').map((letter, index) => {
                    return (
                        <span key={index} className="letter">
                            {usedLetters.includes(letter) ? letter : ' _ '}
                        </span>
                    )
                })}
            </h2>
        </div>
    );
}
