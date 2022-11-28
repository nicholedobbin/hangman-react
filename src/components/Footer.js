/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the Footer function component, which returns app creation credits and external links.

---------------------------------------------------------------------------------------------------------------------- */
import React from 'react'

export default function Footer() {
  return (
    <div className="footerContainer">
        <hr></hr>
        <div className="footerSection text-center">
            <p className="py-3">
               Made by
               &nbsp;<a href="https://github.com/nicholedobbin" target="_blank" rel="noreferrer">Nichole</a>&nbsp;
               with
               &nbsp;<a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">Create React App</a> 
               .
            </p>
        </div>
        
    </div>
  )
}