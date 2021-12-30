import React, { Component, useContext } from 'react';
import { appContext } from './context';

function Navbar() {
    const context = useContext(appContext);
    const [state, setState] = context;
    console.log("appContext", context);
    
    const toggleDarkMode = () => {
        const newState = {...state};
        if(newState.darkModeOn){
            newState.darkModeOn = false;
            console.log("Dark Mode OFF.")
        }else{
            newState.darkModeOn = true;
            console.log("Dark Mode ON.")   
        }
        setState(newState);
    };

    return (
        <div className="Navbar">
            <header>
                <nav className="navbar navbar-dark bg-dark p-3 mb-1">
                    <a className="navbar-brand" href="#">Sawan Drycleaners</a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Bookings</a>
                            </li>
                        </ul>
                    </div>
                    <button onClick={toggleDarkMode} className="btn btn-sm btn-primary">DarkMode</button>
                </nav>
            </header>
        </div>
        );
}
 
export default Navbar;
