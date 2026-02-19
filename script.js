// Text to Speech Conversion

let speech = new SpeechSynthesisUtterance();
let speakBtn = document.getElementById("speakBtn");
let textarea = document.querySelector("textarea");

speakBtn.addEventListener("click", () => {
    let text = textarea.value.trim();

    if (text === "") return;   

    speech.text = text;
    speech.rate = 1;           
    speech.pitch = 1;          
    speech.volume = 1;        

    window.speechSynthesis.cancel(); 
    window.speechSynthesis.speak(speech);
});
