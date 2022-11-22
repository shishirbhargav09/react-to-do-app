import React, { useState } from "react";
import Item from "../Items/Item";
import uuid from "react-uuid";
import "./Body.css";
function Body() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  
  const inputHandler = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };
  const onclickHandler = (event) => {
    setList([...list, input]);
    setInput("");
    // console.log("Clicked");
  };
  const clearbuttonHandler = (event) => { 
    
    setList([])
   }
  
 
 
  return (
    <div>
      <center>
        <h2>Write Todos Here</h2>
      </center>
      <div className="card">
        <div className="input_div">
          <input
            type="text"
            placeholder="Add your new todo"
            style={{ width: "80%" }}
            onChange={inputHandler}
            value={input}
          />
          <button onClick={onclickHandler}> + </button>
        </div>

        {list.map((i) => {
          return <Item text={i} key={uuid()} id={uuid()} />;
        })}

        <center>
          <p>You Have {list.length} pending tasks</p>
          <button onClick={clearbuttonHandler}>Clear All</button>
        </center>
      </div>
    </div>
  );
}

export default Body;
