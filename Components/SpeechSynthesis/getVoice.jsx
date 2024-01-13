
import { useState, useEffect } from 'react';
import Head from 'next/head';

const TextToSpeechComponent = () => {
  const [textToSpeak, setTextToSpeak] = useState('');
  const [language, setLanguage] = useState('en-US');
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    // Fetch available voices when the component mounts
    fetchVoices();
  }, []);

  const fetchVoices = () => {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      // Fetch available voices and update the state
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      // Add event listener to update voices when the list changes
      window.speechSynthesis.onvoiceschanged = () => {
        const updatedVoices = window.speechSynthesis.getVoices();
        setVoices(updatedVoices);
      };
    } else {
      console.error('Speech synthesis not supported in your browser.');
    }
  };

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      // Set the selected language
      utterance.lang = language;

      // Set the selected voice
      utterance.voice = voices.find((voice) => voice.lang === language);

      synthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in your browser.');
    }
  };

  return (
    <>
      <Head>
        <meta charSet='UTF-8'></meta>
      </Head>
      <div>
        <div>
          <label>Select Language: </label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            {voices.map((voice) => (
              <option key={voice.name} value={voice.lang}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>
        <textarea
          placeholder='Enter text to be spoken...'
          value={textToSpeak}
          onChange={(e) => setTextToSpeak(e.target.value)}
        />
        <button onClick={speakText}>Speak</button>
      </div>
    </>
  );
};

export default TextToSpeechComponent;
