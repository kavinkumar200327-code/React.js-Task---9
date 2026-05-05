import React, {useReducer} from 'react'

export default function UseReducer() {

    const initialState = {light: "red"};
    function reducer (state,action)
    {
        switch (action.type)
        {
            case "next":
                if (state.light === "red"){
                    return {light: "green"};
                }
                else if (state.light === "green"){
                    return {light: "yellow"};
                }
                else{
                    return {light: "red"};
                }
            
            case "reset":
                return {light: "red"};
            
            default:
                return state;
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState)
    return (
    <div className='container'>
        <h1>Traffic Light Controller</h1>
        
        <div className='traffic-box'>
        <div className={`light red ${state.light === "red" ? "active1" : ""}`}></div>
        <div className={`light yellow ${state.light === "yellow" ? "active2" : ""}`}></div>
        <div className={`light green ${state.light === "green" ? "active3" : ""}`}></div>
        </div>

        <h2>Current Light: {state.light.toUpperCase()}</h2>

        <div>
            <button className='buttons' onClick={()=> dispatch ({type: "next"})}>Next</button>
            <button className='buttons' onClick={()=> dispatch ({type: "reset"})}>Reset</button>
        </div>
    </div>
    )
}
