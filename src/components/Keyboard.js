/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the Keyboard function component. It stores the alphabet as a string and takes the handleClick 
function as props from App.js. It then splits and maps the alphabet string and returns a button for each letter 
in the alphabet string, with an onClick function that calls the handleClick prop function (i.e. it renders a 
series of buttons that look like a keyboard, with each button calling the handleClick function from App.js).

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react'

export default function Keyboard({handleClick}) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return (
        <div className="row text-center justify-content-center py-4">
            <div className="col col-sm-8">{
                alphabet.split('').map((letter, index) => (
                <button className="btn btn-lg btn-secondary mx-1 my-1 keyboardButtons"
                key={index}
                value={letter}
                onClick={()=>handleClick(letter)}
                >
                {letter}
                </button>
                ))
            }
            </div>
        </div> 
    );
}
