const Calculator = ({deleteValue, equals, currentOperator, currentDisplay, prevDisplay, displayNumberHandler, handleOperator, allClear}) => {



    return (  
        <div className="calculator-container">
            <div className="display">
                <div className="prevOperand">{prevDisplay}{currentOperator}</div>
                <div className="currentOperand">{currentDisplay}</div>
            </div>
            <div className="buttons-group">
                <button onClick={allClear} className="all-clear spantwo">AC</button>
                <button onClick={deleteValue}className="delete">DEL</button>
                <button onClick={handleOperator} className="operator" value={"/"}>÷</button>
                <button onClick={displayNumberHandler} value={1} className="number 1">1</button>  
                <button onClick={displayNumberHandler} value={2} className="number 2">2</button>
                <button onClick={displayNumberHandler} value={3} className="number 3">3</button>
                <button onClick={handleOperator} className="operator"  value={"*"}>*</button>
                <button onClick={displayNumberHandler} value={4} className="number 4">4</button>
                <button onClick={displayNumberHandler} value={5} className="number 5">5</button>
                <button onClick={displayNumberHandler} value={6} className="number 6">6</button>
                <button onClick={handleOperator} className="operator" value={"+"}>+</button>
                <button onClick={displayNumberHandler} value={7} className="number 7">7</button>
                <button onClick={displayNumberHandler} value={8} className="number 8">8</button>
                <button onClick={displayNumberHandler} value={9} className="number 9">9</button>
                <button onClick={handleOperator} className="operator" value={"-"}>-</button>
                <button onClick={displayNumberHandler} value={"."} className="number decicmal">.</button>
                <button onClick={displayNumberHandler} value={0} className="number 0">0</button>
                <button onClick={equals}className="equals spantwo">=</button>
            </div>

        </div>
    );
}
 
export default Calculator
