import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDeleteLeft, faDivide, faMinus, faPlus, faXmark, faEquals, faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
import "./styles/App.scss";




const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result + (e.target.value))
    }
    const handleClear = () => {
        setResult("");
    }
    const handleBackspace = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const handleCalculate = () => {
        if (result === "Infinity") {
            setResult("Nie dziel przez 0!!!");
        }
        else {
            setResult("");
        }
        try {
            setResult(eval(result));
        } catch (error) {
            setResult("Error")
        }
    }
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result}/>
                </form>

                <div className="keypad">
                    <button className="sideBtns" onClick={handleClear} id="clear">Clear</button>
                    <button className="sideBtns" onClick={handleBackspace} id="backspace">
                        <FontAwesomeIcon icon={faDeleteLeft}/>
                    </button>
                    <button className="sideBtns" value="/" onClick={handleClick}>&divide;</button>
                    <button value="7" onClick={handleClick}>7</button>
                    <button value="8" onClick={handleClick}>8</button>
                    <button value="9" onClick={handleClick}>9</button>
                    <button className="sideBtns" value="*" onClick={handleClick}>&times;</button>
                    <button value="4" onClick={handleClick}>4</button>
                    <button value="5" onClick={handleClick}>5</button>
                    <button value="6" onClick={handleClick}>6</button>
                    <button className="sideBtns" value="-" onClick={handleClick}>&ndash;</button>
                    <button value="1" onClick={handleClick}>1</button>
                    <button value="2" onClick={handleClick}>2</button>
                    <button value="3" onClick={handleClick}>3</button>
                    <button className="sideBtns" value="+" onClick={handleClick}>+</button>
                    <button value="0" onClick={handleClick}>0</button>
                    <button value="." onClick={handleClick}>,</button>
                    <button className="sideBtns" onClick={handleCalculate} id="result">
                        <FontAwesomeIcon icon={faEquals}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default App;