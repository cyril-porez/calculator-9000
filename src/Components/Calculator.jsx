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
    const [isShow, setIsShow] = useState(false)

    function handleClick(number) {
      setCalculate(calculate.concat(number))
    }

    function handleDeleteOne() {
      setCalculate(calculate.slice(0, -1))
    }

    function handleClear() {
      setCalculate("")
      setResult("")
    }

    function handleClickEqual() {   
      setResult(eval(calculate).toString())   
    }

    const handleSave = async () => {
      console.log(calculate)
      const url = 'http://localhost/backend/apiSave.php';
      try{
        console.log('test')
        const dataCalculate = await axios.post(url, {
          calculate: calculate,
          result: result
        });
        console.log(dataCalculate.data);
      } catch (error) {
        console.log('error');
      }
    }
    return (
      <div>
        <div className="title">
          <TheTitle value="Calculator 9000" />
        </div>
        <div className="container">
          <div>
            <BeautifullScreen calculate={ calculate } result={ result } />
            <ItsOverNineThousand  calculate={ calculate }/>
          </div>
          
          <div className="keypad">
            <div className="specialButton">
              <SpecialButton  name='Clear' handleClick={ handleClear } />
            </div>
            <SpecialButton name='<=' handleClick={ handleDeleteOne }  /> 
            <SpecialButton name='Save' handleClick={ handleSave } />
            <AmazingNumberButton value={["7","8","9","4","5","6","1","2","3"]} handleCalculator={ handleClick } />
            <GreatOperationButton value={["/", "*", "-", "+"]} handleOperator={ handleClick } />
            <div className="equal">
              <MagnificientEqualButton name="="  handleEqual={handleClickEqual} />
            </div>
          </div>
        </div>
      </div>
    );   
  }
  
  export default Calculator;