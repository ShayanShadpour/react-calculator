import React from "react";
import "./styles.css"


function App() {


  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExpression(prev => prev + symbol)
  };
  
  const calculate = () =>{
    setExpression(prev => prev.replace(/[^-()\d/*+.]/g, ''))
    /*if(expression[expression.length-1] === '/'&&'+'&&'*'&&'-'){
       expression.slice(0,-1);
    }*/
    setAnswer(eval(expression));
  };

  const allClear = () =>{
    setExpression("");
    setAnswer("");
  };

  const backspace = () =>{
    setExpression(prev => prev.slice(0, -1));
  };

  return (
    <div className="calc-grid">
      <div className="result-output">
        <div className="previous">{expression}</div>
        <div className="current">{answer}</div>
      </div>
      <button className="span-two" onClick={allClear}>AC</button>
      <button onClick={backspace}>DEL</button>
      <button onClick={() => display("/")}>÷</button>
      <button onClick={() => display("7")}>7</button>
      <button onClick={() => display("8")}>8</button>
      <button onClick={() => display("9")}>9</button>
      <button onClick={() => display("*")}>X</button>
      <button onClick={() => display("4")}>4</button>
      <button onClick={() => display("5")}>5</button>
      <button onClick={() => display("6")}>6</button>
      <button onClick={() => display("-")}>-</button>
      <button onClick={() => display("1")}>1</button>
      <button onClick={() => display("2")}>2</button>
      <button onClick={() => display("3")}>3</button>
      <button onClick={() => display("+")}>+</button>
      <button onClick={() => display(".")}>.</button>
      <button onClick={() => display("0")}>0</button>
      <button id="equals" className="span-two" onClick={calculate}>=</button>
    </div>
  );
}

export default App;
