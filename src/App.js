import Calculator from "./Calculator";
import './index.css'
import { useState, useEffect} from 'react'
import userEvent from "@testing-library/user-event";


function App() {

  const [currentDisplay, setCurrentDisplay] = useState("")
  const [prevDisplay, setPrevDisplay] = useState("")
  const [currentOperator, setCurrentOperator] = useState("")

  function displayNumberHandler(number) {
    if (number.target.value === "." && currentDisplay.includes(".")) return
    setCurrentDisplay(currentDisplay + number.target.value)
  }

  function handleOperator(operator) {
    if (currentDisplay.length === 1 && currentDisplay === ".") return
    if(currentDisplay === "" && prevDisplay === "") return
    if (currentDisplay != "" && prevDisplay == ""){
      setCurrentOperator(operator.target.value)
      setPrevDisplay((parseFloat(currentDisplay) + currentOperator))
      setCurrentDisplay("")
    }
    if(currentDisplay === "" && prevDisplay != ""){
      setCurrentOperator(operator.target.value)
    }
    if(currentDisplay != "" && prevDisplay != ""){
      setPrevDisplay(eval(prevDisplay + currentOperator + parseFloat(currentDisplay)))
      setCurrentOperator(operator.target.value)
      setCurrentDisplay("")
    }
  }

  function allClear(){
    setCurrentDisplay("")
    setPrevDisplay("")
    setCurrentOperator("")
    
  }

  function equals(){
    if (currentDisplay.length === 1 && currentDisplay === ".") return
    if (currentDisplay != "" && prevDisplay != ""){
      setCurrentDisplay((eval(prevDisplay + currentOperator + currentDisplay)).toString())
      setPrevDisplay("")
      setCurrentOperator("")
    } 
  }

  function deleteValue(){
    if (currentDisplay == "") return
    setCurrentDisplay(currentDisplay.slice(0,-1))
  }


  return (
    <>
      <div className="container">
          <Calculator deleteValue={deleteValue} equals={equals} currentOperator={currentOperator} allClear={allClear} currentDisplay={currentDisplay} prevDisplay={prevDisplay} displayNumberHandler={displayNumberHandler} handleOperator={handleOperator}/> 
      </div>
    
    
    </>
  );
}

export default App;
