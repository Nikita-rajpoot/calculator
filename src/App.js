import React,{useState} from "react";
import "./App.css";

function App() {
  const[result,setResult]=useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearDisplay=()=>{
      setResult("");

  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }
   const slice = () => {
    setResult(result.slice(0,-1))
  }
  return (
    <div className="Calc">
      <input type="text" placeholder="0" id="answer" value={result}/>
    <div>
     <input
      type="button"
      value="AC"
      className="button"
      onClick={clearDisplay}
      />
      <input
      type="button"
      value="DE"
      className="button"
      onClick={slice}
      />
      <input
      type="button"
      value="%"
      className="button"
      onClick={clickHandler}
      />
      <input
      type="button"
      value="/"
      className="button"
      onClick={clickHandler}
      />
    </div>
    <div>
      <input 
       type="button" 
       value="7" 
       className="button" 
       onClick={clickHandler}/>
      <input
       type="button"
       value="8" 
       className="button"
       onClick={clickHandler}/>
      <input 
       type="button" 
       value="9" 
       className="button" 
       onClick={clickHandler}/>
      <input 
       type="button" 
       value="*" 
       className="button" 
       onClick={clickHandler}/>
    </div>
    <div>
      <input 
       type="button" 
       value="4" 
       className="button" 
       onClick={clickHandler}/>
      <input 
       type="button" 
       value="5" 
       className="button" 
       onClick={clickHandler}/>
      <input 
       type="button" 
       value="6" 
       className="button" 
       onClick={clickHandler}/>
      <input 
       type="button" 
       value="-" 
       className="button" 
       onClick={clickHandler}
       />
    </div>
    <div>
      <input
       type="button" 
       value="1" 
       className="button" 
       onClick={clickHandler}
       />
      <input 
       type="button" 
       value="2" 
       className="button" 
       onClick={clickHandler}
       />
      <input 
       type="button" 
       value="3" 
       className="button" 
       onClick={clickHandler}
        />
      <input 
       type="button"
       value="+"
       className="button"
       onClick={clickHandler}
       />
    </div>
    <div>
      <input
       type="button"
       value="0"
       className="button"
       onClick={clickHandler}/>
      <input 
       type="button"
       value="." 
       className="button" 
       onClick={clickHandler}/>
      <input 
       type="button" 
       value="=" 
       className="button button1" 
       onClick={calculate}/>
   </div>
</div>
  );
}

export default App;
