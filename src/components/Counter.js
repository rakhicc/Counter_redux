import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import * as actionTypes from './store/actions'
const Counter = () => {
    const counter=useSelector(state=>state.counter);
    console.log(counter);
    const dispatch=useDispatch();
    let circleClass = "";
    if (counter === 0) {
      circleClass = "circle";
    } else if (counter % 2 === 0) {
      circleClass = "circle even";
    } else {
      circleClass = "circle odd";
    }
    const addOneHandler=()=>{
        console.log('adddone');
        dispatch({
            type:actionTypes.ADD_ONE
        })
    }
    const subtractOneHandler=()=>{
        console.log('subtractOneHandler');
        dispatch({
            type:actionTypes.REMOVE_ONE
        })
    }
    const addFiveHandler=()=>{
        console.log('addFiveHandler');
        dispatch({
            type:actionTypes.ADD_FIVE
        })
    }
    const subtractFiveHandler=()=>{
        console.log('subtractFiveHandler');
        dispatch({
            type:actionTypes.REMOVE_FIVE
        })
    }
    const resetHandler=()=>{
        console.log('resetHandler');
        dispatch({
            type:actionTypes.RESET
        })
    }
    return (
        <div>
        <main>
        <p className={circleClass}><p>{counter}</p></p>

        <div className="arraybutton">
          <button onClick={addOneHandler}>Add one</button>
          <button onClick={resetHandler}>Reset</button>
          <button onClick={subtractOneHandler}>Remove one</button>
          <button onClick={addFiveHandler}>Add Five</button>
          <button onClick={subtractFiveHandler}>Remove Five</button>
        </div>
      </main>    
        </div>
    );
};

export default Counter;