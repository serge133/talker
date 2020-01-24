export const textToSpeech = (text, voice) => {
  const defaultVoice = window.speechSynthesis.getVoices()[0];
  // new SpeechSynthesisUtterance object
  let utter = new SpeechSynthesisUtterance();
  utter.voice = !voice ? defaultVoice : voice;
  utter.rate = 1;
  utter.pitch = 1;
  utter.text = text;

  // event after text has been spoken
  utter.onend = () => {
    console.log("Speech has finished");
  };

  // speak
  window.speechSynthesis.speak(utter);
};
