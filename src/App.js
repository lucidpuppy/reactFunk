import React, { useState, createContext } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import { appContext } from './components/context';
import Counters from './components/counters';

const defState={darkModeOn: false};
function App(){
    const [state, setState] = useState(defState);
    return (
        <React.Fragment>
            <main className="container">
                <appContext.Provider value={[state,setState]}>
                    <Navbar/>
                </appContext.Provider>
                <Counters/>    
            </main>
        </React.Fragment>
    );
}

export default App;
