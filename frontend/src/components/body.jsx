import '../styles/body.css'
export const Body = ()=>{
    var words = "The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog.".split(' ')
    const HandleKeyDown = (event)=>{
        if (event.key !== 'Shift'){
            console.log(event.key)
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
                    <button class="reset_btn">Reset</button>
                </div>
                <div id="bar3" onKeyDown={HandleKeyDown} className="bar3" tabIndex="0">
                    <div id="text" className="text">
                        {words.map((word, index) => (
                            <div className="word" key={index}>
                                {word.split('').map((letter, i) => (
                                    <span className="letter" key={i}>{letter}</span>
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