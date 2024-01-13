
import SpeechSynthesis from '../Components/SpeechSynthesis'
const TextToSpeechComponent = () => {
	return (
		<div>
			<SpeechSynthesis />
		</div>
	)
}

export default TextToSpeechComponent

// import { useState } from 'react'

// const TextToSpeechComponent = () => {
// 	const [textToSpeak, setTextToSpeak] = useState('')
// 	const [selectedLanguage, setSelectedLanguage] = useState('en-US') // Default language is set to English (United States)

// 	const speakText = () => {
// 		if ('speechSynthesis' in window) {
// 			const synthesis = window.speechSynthesis
// 			const utterance = new SpeechSynthesisUtterance(textToSpeak)
// 			utterance.lang = selectedLanguage
// 			synthesis.speak(utterance)
// 		} else {
// 			console.error('Speech synthesis not supported in your browser.')
// 		}
// 	}

// 	const handleChange = (e) => {
// 		setTextToSpeak(e.target.value)
// 	}

// 	const handleLanguageChange = (e) => {
// 		setSelectedLanguage(e.target.value)
// 	}

// 	return (
// 		<div>
			// <div>
			// 	<label>Select Language: </label>
			// 	<select
			// 		value={selectedLanguage}
			// 		onChange={handleLanguageChange}>
			// 		<option value='en-US'>English (United States)</option>
			// 		<option value='es-ES'>Spanish (Spain)</option>
			// 		<option value='fa-IR'>Persian (Iran)</option>
			// 	</select>
			// </div>
// 			<textarea
// 				placeholder='Enter text to be spoken...'
// 				value={textToSpeak}
// 				onChange={handleChange}
// 			/>
// 			<button onClick={speakText}>Speak Text</button>
// 		</div>
// 	)
// }

// export default TextToSpeechComponent
