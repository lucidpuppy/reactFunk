import React, { useContext } from 'react';
import {countersContext} from "./context"

function Counter () {
    const context = useContext(countersContext);
    console.log("context", context);
    const [key, state, setState, onChange] = context
    
    console.log("key", key);
    console.log("state", state);
    console.log("setState", setState);

    const getBadgeClasses = () => {
        let classes = "m-2 p-2 text-white bg-";
        classes += state.counters[key].value === 0 ? "secondary" : "success";
        return classes;
    }
    
    const handleIncrement = () => {
        console.log("Handle Increment is called", key);
        console.log('State: ', state);
        const newState = {...state};
        
        newState.counters[key].value++;
        setState(newState);
        onChange();
    }
    const handleDecrement = () => {
        console.log("Handle Decrement is called", key);
        const newState = {...state};

        newState.counters[key].value > 0 && state.counters[key].value--;
        setState(newState);
        onChange();
    }
    const handleDelete = () => {
        console.log("Handle Delete is called", key);
        const newState = {...state};
        console.log("new state", newState);
        delete newState.counters[key];
        console.log("new state", newState);
        setState(newState);
        onChange();
    }

    console.log("key", key);
    console.log("state", state);
    console.log("state.counters[key].id", state.counters);
    return (
        <React.Fragment>
            <strong>{state.counters[key].title}<br/></strong>
            <span className={getBadgeClasses()}>{state.counters[key].value}</span>
            <button onClick={() => handleIncrement()} className="btn btn-outline-success btn-sm m-1">+</button>
            <button onClick={() => handleDecrement()} className="btn btn-outline-danger btn-sm m-1">-</button>
            {state.showDeleteBtn === true && <button onClick={() => handleDelete()} className="m-1 btn btn-danger btn-sm">Delete</button>}
        </React.Fragment>);
};
export default Counter;