import React, { useState, useContext} from 'react'
import { appContext, countersContext, bookingFormContext } from './context';
import Counter from './counter'

const defState = {
    counters : {
       0: {id: 0, value: 0, title: "Shoes"},
       2: {id: 1, value: 0, title: "Blanket"},
       5: {id: 2, value: 0, title: "Quilt" },
    },
};
const Counters = () => {
    console.log("Rendering Counters!!");
    const [state, setState] = useContext(bookingFormContext);
    console.log("context", countersContext);
    const [appState, appSetState] = useContext(appContext);

    const handleReset = () => {
        console.log("Handle Reset is called.");
        const newState = {...state};
        Object.keys(newState.counters).map((key) => {newState.counters[key].value = 0; } );
        newState.totalValue = 0;
        setState(newState);
        onChange();
    }

    const updateTotalValue = () =>{
        let count = 0;
        Object.entries(state.counters).map(([key, value]) => {
            count += value.value;
        });
        console.log("Items in cart", count);
        
        const newAppState = {...appState};
        newAppState.totalValue = count;
        appSetState(newAppState);
    }
    const onChange = () => {
        updateTotalValue();
    };
    
    return (
        <div className="container-fluid mt-1 mb-1">
            <button onClick={handleReset} className="btn btn-primary btn-sm p-1 m-2">Reset</button>
            <div className="row ">
                {Object.keys(state.counters).map(id => (
                    <div key={id} className="card col-2">
                        <div key={id} className="card-body item-card" style={{display: 'inline-block'}}>
                            <countersContext.Provider key={id} value={[id, state, setState, onChange]}>
                                <Counter key={id}></Counter>
                            </countersContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 
export default Counters;