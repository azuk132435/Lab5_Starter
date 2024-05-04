// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const imgFace = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for(let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  speechSynthesis.onvoiceschanged = populateVoiceList;

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterance.voice = voices.find(voice => voice.name === selectedOption);
    utterance.onstart = () => {
      imgFace.src = 'assets/images/smiling-open.png'; 
    };
    utterance.onend = () => {
      imgFace.src = 'assets/images/smiling.png'; 
    };

    synth.speak(utterance);
  });
}