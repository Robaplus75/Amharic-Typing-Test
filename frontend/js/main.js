const textElement = document.getElementById('text');
cursorElement="<div>|</div>";
correctOpen = '<span style="color:white">'
wrongOpen = '<span style="color:red">'
colorClose = "</span>"

let { text, cursorPos } = getTextAndCursorPosition(document.getElementById('text').innerText);
let totalLetters = text.length;
let cursorPosition = totalLetters;
let letterPosition = 0;


document.addEventListener('keypress', (e) => {
  const keyPressed = e.key;
  console.log(`${e.key} key was pressed`)
  if (cursorPosition <= 1){
    alert("The End")
    const loading = document.getElementById("loading-circle");
    const body_content = document.getElementById("body_content");

    body_content.style.display = "none";
    loading.style.display = "flex"
    location.reload(true);
  }

  if (keyPressed === text[letterPosition]) {
    console.log("===============================================================")
    console.log(`Letter Position: ${letterPosition}`)
    console.log(`${keyPressed} matches with the ${text[totalLetters - cursorPosition]}`)
    insertCursor(textElement, cursorElement, cursorPosition);
    changeColor(textElement, "correct", cursorPosition)

    cursorPosition--;
    letterPosition++;
    //console.log(text);
    // Update the text element
    // textElement.innerText = text;
  }
  else {
    console.log("===============================================================")
    console.log(`Letter Position: ${letterPosition}`)
    console.log(`${keyPressed} Does Not matche with the ${text[totalLetters - cursorPosition]}`)
    // Insert the cursor
    insertCursor(textElement, cursorElement, cursorPosition);
    changeColor(textElement, "wrong", cursorPosition)

    cursorPosition--;
    letterPosition++;
  }
});


function getTextAndCursorPosition(initialText) {
  return { text: initialText, cursorPosition: 0 };
}

function insertCursor(textElement, cursor, index) {
    let innertext = textElement.innerHTML;
    console.log(textElement.innerHTML)
    console.log(`text before: ${innertext}`)
    console.log(`element to be removed: '${cursorElement}'`)
    innertext = innertext.replace(cursorElement, '');
    //innertext = innertext.replace(correctOpen, '');
    //innertext = innertext.replace(colorClose, '');
    
    console.log(`text after: ${innertext}`)
    console.log(`cursorPosition: ${index}`)
    textElement.innerHTML = insertAtIndexBackward(innertext, cursor, -(index-1))
    console.log(`text final: ${textElement.innerHTML}`)
}

function changeColor(textElement, stat, cursorPosition){
    
        console.log("Correct: color change process begin")
        let innertext = textElement.innerHTML;
        console.log(`color before: ${innertext}`)
        if (stat == "correct"){
            innertext = insertAtIndexBackward(innertext, correctOpen, -(cursorPosition+cursorElement.length));
            console.log(`color after <span>: ${innertext}`)
            innertext = insertAtIndexBackward(innertext, colorClose, -(cursorPosition+cursorElement.length-1));
            console.log(`color after: ${innertext}`)
        }else{
            innertext = insertAtIndexBackward(innertext, wrongOpen, -(cursorPosition+cursorElement.length));
            console.log(`color after <span>: ${innertext}`)
            innertext = insertAtIndexBackward(innertext, colorClose, -(cursorPosition+cursorElement.length-1));
            console.log(`color after: ${innertext}`)
        }
        textElement.innerHTML = innertext;
    // else {
    //     console.log("Wrong: color change process begin")
    //     let innertext = textElement.innerHTML;
    //     console.log(`color before: ${innertext}`)
    //     innertext = insertAtIndexBackward(innertext, wrongOpen, -(cursorPosition+cursorElement.length));
    //     console.log(`color after <span>: ${innertext}`)
    //     innertext = insertAtIndexBackward(innertext, colorClose, -(cursorPosition+cursorElement.length-1));
    //     console.log(`color after: ${innertext}`)

    //     textElement.innerHTML = innertext;
    //  }
}

function insertAtIndex(str, insert, index) {
    return str.substr(0, index) + insert + str.substr(index);
  }

function insertAtIndexBackward(str, insert, index) {
    if (index < 0) {
      index = str.length + index;
    }
    return str.substr(0, index) + insert + str.substr(index);
  }