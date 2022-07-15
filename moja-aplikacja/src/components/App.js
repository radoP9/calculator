import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDeleteLeft, faEquals, faEye} from '@fortawesome/free-solid-svg-icons'
import {MetaTags} from "react-meta-tags";
import "../styles/App.scss";


const App = () => {
    const getValues = () => {
        const storedValues = localStorage.getItem("resultList")
        if (!storedValues) return [];
        return JSON.parse(storedValues)
    }

    const [result, setResult] = useState("");
    const [resultArray, setResultArray] = useState(getValues());
    const [ifTrue, setIfTrue] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        localStorage.setItem("resultList", JSON.stringify(resultArray))
    }, [resultArray])
    useEffect(() => {
        setResultArray([...resultArray, result])
    }, [ifTrue])


    useEffect(() => {
        if (theme === "light") {
            document.querySelector("body").style.backgroundColor = "#f2f2f2";
        } else if (theme === "dark") {
            document.querySelector("body").style.backgroundColor = "#b3cce6";
        }
    }, [theme])

    const handleClick = (e) => {
        setResult(result + (e.target.value));
    }

    const handleClear = () => {
        setResult("");
    }

    const handleBackspace = () => {
        setResult(result.slice(0, result.length - 1));
    }

    const handleCalculate = () => {
        try {
            setResult(eval(result));
        } catch (error) {
            setResult("Error");
        }
        setIfTrue(prevState => !prevState);
    }

    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    }

    return (
        <>
            <div className="calculator">
                <MetaTags>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </MetaTags>
                <div className={theme === "light" ? "container light" : "container dark"}>
                    <form>
                        <input type="text" value={result}/>
                    </form>

                    <div className="keypad" id="text">
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
                        <button>
                            <FontAwesomeIcon icon={faEye} onClick={toggleTheme}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;