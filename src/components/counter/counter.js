import React, { useState } from 'react';

const Counter = (props) => {

    //props
    const incLimit = props.incLimit;

    //state
    const [currentState, setState] = useState(incLimit);

    //function
    const increment = () => {
        setState(currentState + incLimit);
    }

    //styles
    const divStyle = {
        color: "black"
    }

    return (
        <div style={divStyle}>
            <button onClick={increment}>+{incLimit}</button>
            <div>{currentState}</div>
        </div>
    );

}

export default Counter;
