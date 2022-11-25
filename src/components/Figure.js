/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the Figure function component. It stores an arrage of images representing each life/limb of the 
hangman, and takes the lives count props from App.js. It compares the number of lives remaining and updates the 
hangman image based on the number of lives left.

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react';

// Images array of hangman image lives.
const images = [
    { key: 0, id: 0, source: 'images/life1.png', description: 'hangman life 1' },
    { key: 1, id: 1, source: 'images/life2.png', description: 'hangman life 2' },
    { key: 2, id: 2, source: 'images/life3.png', description: 'hangman life 3' },
    { key: 3, id: 3, source: 'images/life4.png', description: 'hangman life 4' },
    { key: 4, id: 4, source: 'images/life5.png', description: 'hangman life 5' },
    { key: 5, id: 5, source: 'images/life6.png',  description: 'hangman life 6' },
    { key: 6, id: 6, source: 'images/life7.png', description: 'hangman life 7' },
    { key: 7, id: 7, source: 'images/life8.png', description: 'hangman life 8' },
    { key: 8, id: 8, source: 'images/life9.png', description: 'hangman life 9' },
    { key: 9, id: 9, source: 'images/life10.png', description: 'hangman life 10'},
    { key: 10, id: 10, source: 'images/blankSquare.png', description: 'blank beginning square' }
];

export default function Figure({lives}) { 
    // If there are 11 lives left, display the blank starting square (11 lives because the 
    // 11th life is the starting square).
    if (lives === 11) {
        return (
            <div key={10} className = "col">
                <img id={10} src={images[10].source} alt={images[10].description} className="hangmanFigure"></img>
            </div>
        )
    } else {
        // Else (i.e. if the lives count is frmo 10 - 0), map the images and return an image 
        // based on the number of lives left.
        return (
            images.map((image, index) => {
                const { id, source, key, description} = image;
                // index+1 because the index count starts at 0.
                if((index + 1) === lives) {
                    return (
                        <div key={key} className = "col">
                            <img id={id} src={source} alt={description} className="hangmanFigure"></img>
                        </div>
                    ); 
                }   
            })
        )
    } 
}
