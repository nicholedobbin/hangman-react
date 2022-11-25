/* ------------------------------- IFS L4T21 Capstone Project 3: Hangman React App -----------------------------------

This is the Header function component, which returns the page header containing title and subtitle.

---------------------------------------------------------------------------------------------------------------------- */

// Import bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <>
            <div className = "container container-fluid headerContainer pb-3 pt-5 mt-5 text-center">
                <div className="row">
                    <div className="col">
                        <h1 className="display-1 py-2">hangman</h1>
                        <h3 className="py-3">Find the hidden word by entering a letter.</h3>
                        <hr className="sectionDivider my-3"></hr>
                    </div>
                </div>
                
            </div>
        </>
    );
}