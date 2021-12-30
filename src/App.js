import React, { useState, createContext } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { appContext } from './components/context';
import BookingForm from './components/bookingForm'

const defState={darkModeOn: true, 
                totalValue: 0,
                };


function App(){
    const [state, setState] = useState(defState);    
    return (
        <React.Fragment>
             <React.StrictMode>
                <main className="container App-header" >
                    <div className="background-image blur-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'dryclean.png'})`}}>
                    </div>
                    <div className="container on-blur">
                        <appContext.Provider value={[state, setState]}>
                            <Navbar />
                            <BookingForm />
                        </appContext.Provider>
                    </div>
                </main>
             </React.StrictMode>
        </React.Fragment>
    );
}
export default App;
