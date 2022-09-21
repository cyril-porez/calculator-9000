import React, {useState} from "react";
import TheTitle from './TheTitle'
import AmazingNumberButton from "./AmazingNumberButton"
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import BeautifullScreen from "./BeautifullScreen"
import SpecialButton from "./SpecialButton"
import ItsOverNineThousand from "./ItsOverNineThousand";
import axios from 'axios'

function Calculator() {
    const [calculate, setCalculate] = useState("")
    const [result, setResult] = useState("")

    function handleClick(number) {
      setCalculate(calculate.concat(number))
    }

    function handleDeleteOne() {
      setCalculate(calculate.slice(0, -1))
    }

    function handleClear() {
      setCalculate("")
    }

    function handleClickEqual() {   
      setCalculate(eval(calculate).toString())   
    }

    function handleSave() {
      
    }
    return (
      <div>
        <div>
          <TheTitle value="Calculator 9000" />
        </div>
        <div className="container">
          <div>
            <BeautifullScreen calculate={calculate} setCalculate={setCalculate}/>
            <ItsOverNineThousand  calculate={calculate}/>
          </div>
          
          <div className="keypad">
            <SpecialButton name='Clear' handleClick={ handleClear } />
            <SpecialButton name='<=' handleClick={ handleDeleteOne }  /> 
            <SpecialButton name='Save' handleClick={ handleSave } />
            <AmazingNumberButton value={[7,8,9,4,5,6,1,2,3,0]} handleCalculator={handleClick} />
            <GreatOperationButton value={["/", "*", "-", "+"]} handleOperator={handleClick} />
            <MagnificientEqualButton name="="  handleEqual={handleClickEqual} />

          </div>
        </div>
      </div>
    );  
   
  }
  
  export default Calculator;

