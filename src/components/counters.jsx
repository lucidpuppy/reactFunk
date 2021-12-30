import React, { useState} from 'react'
import {countersContext} from "./context"
import Counter from './counter'

const defState = {
    counters : {
       0: {id: 0, value: 0, title: "Lehnga"},
       2: {id: 1, value: 0, title: "Coat Pant 2Pc"},
       5: {id: 2, value: 0, title: "Quilt" },
    },
};

const Counters = () => {
    const [state, setState] = useState(defState);
    console.log("context", countersContext);

    const handleReset = () => {
        console.log("Handle Reset is called.");
        const newState = {...state};
        Object.keys(newState.counters).map((key) => {newState.counters[key].value = 0; } );
        setState(newState);
    }

    const getTotalValue = () =>{

    }
    
    return (
        <div className="mt-1 mb-1">
            <button onClick={handleReset} className="btn btn-primary btn-sm p-1 m-2">Reset</button>
            {Object.keys(state.counters).map(id => (
                <countersContext.Provider value={{key: id, state: state, setState: setState}}>
                    <Counter key={id.toString()}></Counter>
                </countersContext.Provider>
            ))}
        </div>
    );
} 
export default Counters;