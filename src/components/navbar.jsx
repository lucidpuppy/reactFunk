import React, { useContext } from 'react';
import { appContext } from './context';

function Navbar() {
    const [appState, appSetState] = useContext(appContext);
    
    const toggleDarkMode = () => {
        const newState = {...appState};
        if(newState.darkModeOn){
            newState.darkModeOn = false;
            console.log("Dark Mode turned OFF.")
        }else{
            newState.darkModeOn = true;
            console.log("Dark Mode turned ON.")   
        }
        appSetState(newState);
    };

    const getNavBarClasses = () => {
        let classes = "navbar navbar-expand-sm p-3 mb-1";
        classes += appState.darkModeOn === true ? " navbar-dark bg-dark" : "navbar-light bg-light";
        return classes;
    };

    return (
        <div>
            <nav className={getNavBarClasses()}>
                <div class="container">
                    <a className="navbar-brand" href="#"><strong>Sawan Drycleaners</strong></a>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="#"><strong>Home</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><strong>Bookings</strong></a>
                            </li>
                            <li className="nav-item">
                                <a onClick={toggleDarkMode} className="nav-link a-button"><strong>DarkMode</strong></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link">Items in Cart: {appState.totalValue}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        );
}
 
export default Navbar;
