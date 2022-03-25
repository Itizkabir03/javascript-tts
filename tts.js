let speech = new SpeechSynthesisUtterance()


let btn = document.querySelector("#btn")

function speak() {
 speech.text = document.querySelector("#inp").value
 let voices = window.speechSynthesis.getVoices();
 speech.voice = voices[10]
 window.speechSynthesis.speak(speech)
 
}

btn.addEventListener('click', function() {
 speak()
})