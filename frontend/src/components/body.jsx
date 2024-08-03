import { useState } from 'react'
import '../styles/body.css'

export const Body = ()=>{
    const [current, setCurrent] = useState([0,0])
    const [wrongIndex, setWrongIndex] = useState([])
    console.log("current:")
    console.log(current)

    var words = "The quick brown fox jumps ".split(' ')
    var wordLens = words.map(word => word.length)

    const sublistExists = (list, sublist) => {
        return list.some(item => {
            return JSON.stringify(item) === JSON.stringify(sublist);
        });
    };

    const arraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    const reset = ()=>{
        setCurrent([0,0])
        setWrongIndex([])
    }
    
    const HandleKeyDown = (event)=>{
        if (event.key !== 'Shift'){
            console.log(event.key)
            if (event.key != words[current[0]][current[1]]){
                setWrongIndex([...wrongIndex, current])
            }
                
            if (wordLens[current[0]]-1 > current[1]){
                setCurrent([current[0], current[1]+1])
            }else{
                setCurrent([current[0]+1, 0])
            }
            console.log(current)

        }
    }


    return (
        <div className="body">
            <div id="body_content" class="body_content">
                <div class="bar1">
                    <div class="time_setups">
                        <div>10s</div>
                        <div class="time_select">15s</div>
                        <div>20s</div>
                        <div>30s</div>
                    </div>
                </div>
                <div class='bar2'>
                    <div class="timer">30</div>
                    <div class="language">
                        <button class="amharic_btn" id="amh_btn" onClick="amh_lang()">አማርኛ</button>
                        <button class="english_btn btn_select" id="eng_btn" onClick="eng_lang()">English</button>
                    </div>
                    <button class="reset_btn" onClick={reset}>Reset</button>
                </div>
                <div id="bar3" onKeyDown={HandleKeyDown} className="bar3" tabIndex="0">
                    <div id="text" className="text">
                        {words.map((word, Windex) => (
                            <div className="word" key={Windex}>
                                {word.split('').map((letter, Lindex) => (
                                    <span className={`letter ${arraysEqual(current,[Windex, Lindex]) ? "current": ""} ${(current[0] > Windex  || (current[1] > Lindex && current[0] == Windex)) ? (sublistExists(wrongIndex, [Windex, Lindex])? "wrong": "correct") : ""}`} key={Lindex}>{letter}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div id="cursor"></div>
                    <div id="focus-error">Click here to Focus</div>
                </div>

            </div>
        </div>
    )
}