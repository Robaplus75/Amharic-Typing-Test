const input_bar = document.getElementById('input_bar');
const text = document.getElementById('text');

let amh_text = "ፈጣኑ ቡናማ ቀበሮ ከግድግዳው በላይ ዘለለ.";
let eng_text = "The quick brown fox jumps over the wall.";
let amh_btn = document.getElementById("amh_btn");
let eng_btn = document.getElementById("eng_btn")

let words_list = text.innerText.split(" ");
let sentence_length = words_list.length;
let word_count = 0;
let word_mistakes = 0;

input_bar.value="";

highlighted_word = "<span class='highlighter'>"+words_list[word_count]+"</span>";
before_highlight = text.innerHTML;
after_highlight = textEdit(text.innerHTML, word_count-sentence_length, highlighted_word);
text.innerHTML = after_highlight;

input_bar.addEventListener("input", (key)=>{
    letter = key.data;
    console.log("logger triggered")
    console.log(`${letter} is pressed`)

    if (letter === " "){
      text.innerHTML = before_highlight;

      let word = input_bar.value.slice(0, -1);
      if (words_list[word_count] == word){
        console.log(`${word} is correct`);
        changed_color = '<span style="color:white">'+words_list[word_count]+'</span>';
        console.log(`Text: ${text.innerHTML}`);
        console.log(`Word_count: ${word_count}`)
        let result = textEdit(text.innerHTML, word_count-sentence_length, changed_color);
        console.log(`Result: ${result}`);
        
        text.innerHTML = result;
        word_count += 1;
        input_bar.value="";

        highlighted_word = "<span class='highlighter'>"+words_list[word_count]+"</span>";
        before_highlight = text.innerHTML;
        after_highlight = textEdit(text.innerHTML, word_count-sentence_length, highlighted_word);
        text.innerHTML = after_highlight;
      }
      else {
        console.log(` ${word} is not the same as ${words_list[word_count]}`);
        changed_color = '<span style="color:red">'+words_list[word_count]+'</span>';
        let result = textEdit(text.innerHTML, word_count-sentence_length, changed_color);
        console.log(result);
        text.innerHTML = result;
        word_count += 1;
        word_mistakes += 1;
        input_bar.value="";

        highlighted_word = "<span class='highlighter'>"+words_list[word_count]+"</span>";
        before_highlight = text.innerHTML;
        after_highlight = textEdit(text.innerHTML, word_count-sentence_length, highlighted_word);
        text.innerHTML = after_highlight;
      }
    }
    if (word_count >= sentence_length){
      alert(`The End, You have made ${word_mistakes} mistakes`)
      const loading = document.getElementById("loading-circle");
      const body_content = document.getElementById("body_content");

      body_content.style.display = "none";
      loading.style.display = "flex"
      location.reload(true);
    }
    
  }
)

function textEdit(sentence, index, word) {
  const words = sentence.split(' ');
  if (index >= -words.length && index < words.length) {
    if (index < 0) {
      index += words.length;
    }
    words[index] = word;
    return words.join(' ');
  } else {
    return sentence;
  }
}
function amh_lang(){
  text.innerText = amh_text;
  amh_btn.style.color = "var(--color1)";
  eng_btn.style.color = "var(--color2)";

  words_list = text.innerText.split(" ");
  sentence_length = words_list.length;
  word_count = 0;
  word_mistakes = 0;

  input_bar.value="";

  highlighted_word = "<span class='highlighter'>"+words_list[word_count]+"</span>";
  before_highlight = text.innerHTML;
  after_highlight = textEdit(text.innerHTML, word_count-sentence_length, highlighted_word);
  text.innerHTML = after_highlight;

  input_bar.focus();
}
function eng_lang(){
  text.innerText = eng_text;
  amh_btn.style.color = "var(--color2)";
  eng_btn.style.color = "var(--color1)";

  words_list = text.innerText.split(" ");
  sentence_length = words_list.length;
  word_count = 0;
  word_mistakes = 0;

  input_bar.value="";

  highlighted_word = "<span class='highlighter'>"+words_list[word_count]+"</span>";
  before_highlight = text.innerHTML;
  after_highlight = textEdit(text.innerHTML, word_count-sentence_length, highlighted_word);
  text.innerHTML = after_highlight;

  input_bar.focus();
}